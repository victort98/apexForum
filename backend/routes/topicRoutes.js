const express = require("express");
const topicController = require("../controllers/topicController");
const router = express.Router();

router.get("", topicController.getAllTopics);
router.get("/:categoryId/:topicId", topicController.getTopicByTopicId);
router.get("/:categoryId", topicController.getAllTopicsByCategoryId);
router.post("", topicController.postNewTopic);
router.put("/:categoryId/:topicId", topicController.updateTopic);

module.exports = router;