const express = require("express");
const commentController = require("../controllers/commentController");
const router = express.Router();

router.get("", commentController.getAllComments)
router.get("/:categoryId/:topicId", commentController.getAllCommentsOnTopic);
router.post("", commentController.postNewReply)

module.exports = router;