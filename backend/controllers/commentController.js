const sqlite3 = require("better-sqlite3");
const db = sqlite3("./apexForum.db");

const getAllCommentsOnTopic = (req, res) => {
    let query = db.prepare(`
        SELECT comments.id, comments.message, comments.topicId, comments.created_at, users.username AS username FROM comments
        JOIN users ON comments.userId = users.id
        WHERE topicId = $topicId ORDER BY comments.created_at ASC
    `);

    res.json(query.all(req.params));
};

module.exports = {
    getAllCommentsOnTopic
};