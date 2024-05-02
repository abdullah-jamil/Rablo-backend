const Crud = require("../models/crud");
exports.fetchCrudLower = async (req, res) => {
  try {
    const featuredLowerProducts = await Crud.find({ price: { $lt: 20 } });

    //response
    res.status(200).json({
      success: true,
      data: featuredLowerProducts,
      message: `Entire Featured Data is fetched whose value is lower than 20`,
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
