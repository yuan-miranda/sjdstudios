// routes/page.js
const express = require("express");
const router = express.Router();
const { sendPage } = require("../controllers/pageController");

router.get("/", sendPage("index.html"));

module.exports = router;