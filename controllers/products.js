const products = [];

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/shop",
    hasProducts: products.length > 0,
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body.title);

  products.push({
    title: req.body.title,
  });

  res.redirect("/");
};

exports.getAddProducts = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product", path: "/add-product" });
};

