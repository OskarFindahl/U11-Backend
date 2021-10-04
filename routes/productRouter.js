const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const isAuth = require("../middleware/isAuth");

router.post("/create", productController.postProduct);
router.get("/all", productController.getAllProducts);
// router.get("/user", isAuth, authController.getUser);

module.exports = router;
