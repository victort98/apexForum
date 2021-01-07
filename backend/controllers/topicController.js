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
        SELECT * FROM topics WHERE id = $topicId
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
}

module.exports = {
    getAllTopics,
    getTopicByTopicId,
    getAllTopicsByCategoryId
}