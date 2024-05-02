const Crud = require("../models/crud");
exports.fetchCrudHigher = async (req, res) => {
  try {
    const featuredHigherProducts = await Crud.find({ price: { $gt: 20 } });
    //response
    res.status(200).json({
      success: true,
      data: featuredHigherProducts,
      message: `Entire Featured Data is fetched whose value is higher than 20`,
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
