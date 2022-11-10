const express = require("express");
const router = express.Router();

//const userRoutes = require("./userRoutes.js");
const inventoryRoutes = require("./inventoryRoutes.js");

//router.use("/users", usersRoutes);
router.use("/inventory", inventoryRoutes);

module.exports = router;