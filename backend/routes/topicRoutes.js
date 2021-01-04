const express = require("express");
const topicController = require("../controllers/topicController");
const router = express.router();

router.get("", topicController.getAllTopics);
router.get("/:id", topicController.getTopicById);

module.exports = router;