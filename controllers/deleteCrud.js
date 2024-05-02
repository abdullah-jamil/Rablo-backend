const Crud = require("../models/crud");
exports.deleteCrud = async (req, res) => {
  try {
    const { id } = req.params;
    await Crud.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Crud DELETED",
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
