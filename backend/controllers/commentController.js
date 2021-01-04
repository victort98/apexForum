const sqlite3 = require("better-sqlite3");
const db = sqlite3("./apexForum.db");

const getAllCommentsOnTopic = (req, res) => {
    let query = db.prepare(`
        SELECT * FROM comments WHERE topicId = $topicId ORDER BY created_at ASC
    `);

    res.json(query.all(req.params));
};

module.exports = {
    getAllCommentsOnTopic
};