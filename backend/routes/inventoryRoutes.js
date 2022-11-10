const express = require("express");
const router = express.Router();

const controller = require("../controllers/inventoryController.js");
router.get("/", controller.getAllInventory);
router.get("/:id", controller.getAllInventory);

module.exports = router;