const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/shop",
    hasProducts: products.length > 0,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getAddProducts = (req, res, next) => {
  
  res.render("add-product", { pageTitle: "Add Product", path: "/add-product" });
};
