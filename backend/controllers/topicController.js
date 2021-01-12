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
        SELECT topics.id, topics.title, topics.categoryId, topics.locked, topics.created_at, topics.content, topics.userId, users.username AS username FROM topics
        JOIN users ON topics.userId = users.id
        WHERE topics.id = $topicId
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
    req.body.locked = req.body.locked?1:0
    let query = db.prepare(`
        INSERT INTO topics (title, categoryId, locked, created_at, content, userId) VALUES ($title, $categoryId, $locked, $created_at, $content, $userId)
    `);

    res.json(query.run(req.body));
};

const updateTopic = (req, res) => {
    req.body.id = req.params.id;

    let query = db.prepare(`
        UPDATE topics SET ${Object.keys(b).map(x => x + ' = $' + x)} WHERE id = $id
    `)

    res.json(query.run(req.body));
}

module.exports = {
    getAllTopics,
    getTopicByTopicId,
    getAllTopicsByCategoryId,
    postNewTopic,
    updateTopic
}