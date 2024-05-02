const Crud = require("../models/crud");
exports.fetchCrud = async (req, res) => {
  try {
    const featuredProducts = await Crud.find({ featured: "true" });
    //response
    res.status(200).json({
      success: true,
      data: featuredProducts,
      message: "Entire Featured Data is fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
