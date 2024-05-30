const express = require("express");
const router = express.Router();

const pagesController = require("../app/controllers/PagesController");

router.get("/dealer-locator", pagesController.dealerlocator);
router.get("/cog", pagesController.cog);
router.get("/", pagesController.index);

module.exports = router;
