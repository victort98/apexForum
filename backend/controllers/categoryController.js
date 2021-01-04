const sqlite3 = require("better-sqlite3");
const db = sqlite3("./apexForum.db");

const getAllCategories = (req, res) => {
    let query = db.prepare(`
        SELECT * FROM categories
    `);

    res.json(query.all());
};

module.exports = {
    getAllCategories
};