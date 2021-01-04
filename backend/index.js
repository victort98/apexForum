const express = require('express');
const session = require('express-session');
const store = require('better-express-store');

const app = express();
const RestApi = require('./RestApi');
const ACL = require('./Middleware/ACL/ACL');
const ACLsettings = require('./Middleware/ACL/ACLsettings');

app.use(express.static('WWW'));

app.use(express.json());


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

app.use(ACL(ACLsettings));


new RestApi(app);


app.listen(3000, () => { console.log('Listening on port 3000') });