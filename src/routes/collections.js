const express = require("express");
const router = express.Router();

const collectionsController = require("../app/controllers/CollectionsController");

router.get("/bikes", collectionsController.bikes);
router.get("/pants", collectionsController.pants);
router.get("/gear", collectionsController.gear);
router.get("/sale", collectionsController.sale);
router.get("/all", collectionsController.all);
router.get("/", collectionsController.index);

module.exports = router;
