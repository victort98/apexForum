const express = require("express");
const topicController = require("../controllers/topicController");
const router = express.Router();

router.get("", topicController.getAllTopics);
router.get("/:topicId", topicController.getTopicByTopicId);
router.get("/topic/:topicId", topicController.getAllTopicsByCategoryId);

module.exports = router;