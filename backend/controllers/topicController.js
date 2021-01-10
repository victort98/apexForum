const sqlite3 = require("better-sqlite3");
const db = sqlite3("./apexForum.db");

const getAllTopics = (req, res) => {
    let query = db.prepare(`
        SELECT * FROM topics
    `);

    res.json(query.all());
};

const getTopicByTopicId = (req, res) => {
    let query = db.prepare(`
        SELECT * FROM topics WHERE id = $topicId AND categoryId = $categoryId
    `);

    res.json(query.get(req.params));
};

const getAllTopicsByCategoryId = (req, res) => {
    let query = db.prepare(`
        SELECT topics.id, topics.title, topics.categoryId, topics.userId, users.username AS username FROM topics
        JOIN users ON topics.userId = users.id
        WHERE topics.categoryId = $categoryId
    `);

    res.json(query.all(req.params));
};

const postNewTopic = (req, res) => {
    req.body.userId = req.session.user.id;
    req.body.created_at = Date.now();
    req.body.locked = false;

    let query = db.prepare(`
        INSERT INTO topics (title, categoryId, locked, created_at, content, userId) VALUES ($title, $categoryId, $locked, $created_at, $content, $userId)
    `);

    res.json(query.run(req.body));
};

module.exports = {
    getAllTopics,
    getTopicByTopicId,
    getAllTopicsByCategoryId,
    postNewTopic
}