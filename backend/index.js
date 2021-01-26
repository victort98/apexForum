const express = require('express');
const session = require('express-session');
const store = require('better-express-store');

const ACL = require('./Middleware/ACL/ACL');
const ACLsettings = require('./Middleware/ACL/ACLsettings');

const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const commentRoutes = require("./routes/commentRoutes");
const topicRoutes = require("./routes/topicRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(express.static('dist'));

app.use((error, req, res, next) => {
  console.log("ERROR", error)
  if (error) {
    res.status(500);
    res.json({
      error: 'Something went wrong - probably badly formatted JSON',
      errorDetails: error
    });
  }
});

app.use(session({
  secret: require('./session-secret.json'),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: 'auto' },
  store: store({ dbPath: './apexForum.db' })
}));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/comments", commentRoutes);
app.use("/api/v1/topics", topicRoutes);
app.use("/api/v1/users", userRoutes);

app.use(ACL(ACLsettings));


app.listen(7000, () => { console.log('Listening on port 7000') });