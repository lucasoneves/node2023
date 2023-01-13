const express = require("express");
const path = require("path");
const router = express.Router();

const products = [];

router.post("/add-product", (req, res, next) => {
  console.log(req.body.title);

  products.push({
    title: req.body.title,
  });

  res.redirect("/");
});

router.get("/add-product", (req, res, next) => {
  res.render('add-product', {pageTitle: 'Add Product', path: '/add-product'});
});


exports.routes = router;

exports.products = products;
