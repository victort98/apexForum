const express = require("express");
const commentController = require("../controllers/commentController");
const router = express.router();

router.get("/topic/:topicId", commentController.getAllCommentsOnTopic);

module.exports = router;