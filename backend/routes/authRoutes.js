const express = require("express");
const authController = require("../controllers/authController");
const router = express.router();

router.post("/login", authController.login);
router.get("/whoami", authController.whoami);
router.delete("/logout", authController.logout);

module.exports = router;