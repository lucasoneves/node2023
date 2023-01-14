const express = require("express");

const path = require("path");

const router = express.Router();

const adminData = require("./admin");

// GET method uses exact path
router.get("/", (req, res, next) => {
  
  const products = adminData.products;

  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/shop", hasProducts: products.length > 0 });
});

module.exports = router;
