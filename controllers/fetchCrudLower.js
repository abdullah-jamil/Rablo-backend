const Crud = require("../models/crud");
exports.fetchCrudLower = async (req, res) => {
  try {
    const featuredLowerProducts = -1;

    //response
    res.status(200).json({
      success: true,
      data: featuredLowerProducts,
      message: `Entire Featured Data is fetched whose value is lower than ${nn}`,
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
