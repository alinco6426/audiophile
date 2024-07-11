const express = require("express");

const router = express.Router();

const productsController = require("./../Controller/ProductsController");

router.route("/").get(productsController.getAllProducts);
router.route("/:category").get(productsController.getProductsByCategory);

module.exports = router;