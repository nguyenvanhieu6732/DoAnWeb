const express = require("express");
const router = express.Router();

const blogController = require("../app/controllers/BlogController");

router.get("/teams", blogController.teams);
router.get("/cog", blogController.cog);
router.get("/", blogController.index);

module.exports = router;
