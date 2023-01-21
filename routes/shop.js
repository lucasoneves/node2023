const express = require("express");

const router = express.Router();

const productsController = require("../controllers/products");

// GET method uses exact path
router.get("/", productsController.getProducts);

module.exports = router;
