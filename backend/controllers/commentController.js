const sqlite3 = require("better-sqlite3");
const db = sqlite3("./apexForum.db");

const getAllComments = (req, res) => {
    let query = db.prepare(`
        SELECT * from comments
    `);

    res.json(query.all());
};

const getAllCommentsOnTopic = (req, res) => {
    let query = db.prepare(`
        SELECT comments.id, comments.message, comments.topicId, comments.created_at, users.username AS username FROM comments
        JOIN users ON comments.userId = users.id
        WHERE topicId = $topicId ORDER BY comments.created_at DESC
    `);

    res.json(query.all(req.params));
};

const postNewReply = (req, res) => {
    let query = db.prepare(`
        INSERT INTO comments (message, userId, topicId, created_at) VALUES ($message, $userId, $topicId, $created_at)
    `);

    res.json(query.run(req.body))
}

module.exports = {
    getAllComments,
    getAllCommentsOnTopic,
    postNewReply
};