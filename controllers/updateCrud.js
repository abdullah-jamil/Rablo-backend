const Crud = require("../models/crud");
exports.updateCrud = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;

    const update = await Crud.findByIdAndUpdate(
      { _id: id },
      { name, price, updatedAt: Date.now() }
    );

    res.status(200).json({
      success: true,
      data: update,
      message: `Updated Successfully`,
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
