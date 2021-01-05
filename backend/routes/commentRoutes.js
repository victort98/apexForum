const express = require("express");
const commentController = require("../controllers/commentController");
const router = express.Router();

router.get("/topic/:topicId", commentController.getAllCommentsOnTopic);

module.exports = router;