const express = require("express");
const path = require("path");
const { postAddProduct, getAddProducts } = require("../controllers/products");
const router = express.Router();

router.post("/add-product", postAddProduct)

router.get("/add-product", getAddProducts);


exports.routes = router;

// exports.products = products;
