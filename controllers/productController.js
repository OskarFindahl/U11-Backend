const productModel = require("../models/productModel");

exports.postProduct = async (req, res, next) => {
  const { name, description, price } = req.body;
  try {
    const exsitProduct = await productModel.findOne({ name: name });
    if (exsitProduct) {
      const error = new Error(
        "Product already exist, please pick another name!"
      );
      res.status(409).json({
        error: "Product already exist, please pick another name! ",
      });
      error.statusCode = 409;
      throw error;
    }

    const product = new productModel({
      name: name,
      description: description,
      price: price,
    });
    const result = await product.save();
    res.status(200).json({
      message: "Product created",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const result = await productModel.find();
    res.status(200).json({
      result,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
