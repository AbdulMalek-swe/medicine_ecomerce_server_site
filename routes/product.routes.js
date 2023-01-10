const express = require("express");
const product  = require("../controller/product.controller");
const router = express.Router();
router
.route("/product")
.get(product.getProduct)
.post(product.addProduct)
module.exports = router