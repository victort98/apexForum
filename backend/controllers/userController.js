const sqlite3 = require("better-sqlite3");
const Encrypt = require("../Middleware/Encrypt");
const db = sqlite3("./apexForum.db");

const getAllUsers = (req, res) => {
  let query = db.prepare(`
    SELECT * FROM users
  `);
  res.json(query.all().map((x) => ({ ...x, password: undefined })));
};

const getUserById = (req, res) => {
    let query = db.prepare(`
        SELECT * FROM users WHERE id = $id
    `);
    let user = query.get(req.params) || null;

    if(user) {
        delete user.password;
        res.json(user);
    } else {
        res.status(404).json({ error: "No user with that id found" })
    }
};

const registerAccount = (req, res) => {
    if(req.body.password) {
        req.body.password = Encrypt.multiEncrypt(req.body.password);
    }

    let query = db.prepare(`
        INSERT INTO users (email, username, password, userRole) VALUES ($email, $username, $password, $userRole)
    `);

    res.json(query.run(req.body));
};

const updateAccount = (req, res) => {
    if(req.body.password) {
        req.body.password = Encrypt.multiEncrypt(req.body.password);
    }
    req.body.id = req.params.id;

    let query = db.prepare(`
        UPDATE users SET ${Object.keys(b).map(x => x + ' = $' + x)} WHERE id = $id
    `)

    res.json(query.run(req.body));
};

const deleteAccount = (req, res) => {
    let query = db.prepare(`
        DELETE FROM users WHERE id = $id
    `);
    
    res.json(query.run(req.body));
}

module.exports = {
    getAllUsers,
    getUserById,
    registerAccount,
    updateAccount,
    deleteAccount
};