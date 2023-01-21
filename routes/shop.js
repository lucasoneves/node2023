const express = require("express");

const path = require("path");

const router = express.Router();

const adminData = require("./admin");

const productsController = require('../controllers/products');

// GET method uses exact path
router.get("/", productsController.getProducts);

module.exports = router;
