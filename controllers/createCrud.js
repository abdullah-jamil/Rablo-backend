const Crud = require("../models/crud");
exports.createCrud = async (req, res) => {
  try {
    const { productID, name, price, featured, rating, company } = req.body;
    const response = await Crud.create({
      productID,
      name,
      price,
      featured,
      rating,
      company,
    });
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
