const express = require("express");
const categoryController = require("../controllers/categoryController");
const router = express.router();

router.get("", categoryController.getAllCategories);

module.exports = router;