const sqlite3 = require("better-sqlite3");
const Encrypt = require("../Middleware/Encrypt");
const db = sqlite3("./apexForum.db");

const login = (req, res) => {
  if (req.body.password) {
    req.body.password = Encrypt.multiEncrypt(req.body.password);
  }
  let statement = this.db.prepare(`
           SELECT * FROM users
           WHERE email = $email AND password = $password
        `);
  let user = statement.get(req.body) || null;
  if (user) {
    delete user.password;
    // store the logged in user in a session
    req.session.user = user;
  }
  res.json(user);
};

const logout = (req, res) => {
  delete req.session.user;
  res.json({ loggedOut: true });
};

const whoami = (req, res) => {
    res.json(req.session.user || null);
};

module.exports = {
    login,
    logout,
    whoami
};
