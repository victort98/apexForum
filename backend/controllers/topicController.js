const sqlite3 = require("better-sqlite3");
const db = sqlite3("./apexForum.db");

const getAllTopics = (req, res) => {
    let query = db.prepare(`
        SELECT * FROM topics
    `);

    res.json(query.all());
};

const getTopicById = (req, res) => {
    let query = db.prepare(`
        SELECT * FROM topics WHERE id = $id
    `);

    res.json(query.get(req.params));
};

module.exports = {
    getAllTopics,
    getTopicById
}