const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require('../helpers/path');

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'admin/add-product.html'));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
