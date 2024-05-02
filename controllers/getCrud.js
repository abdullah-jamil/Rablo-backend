const Crud = require("../models/crud");
exports.getCrud = async (req, res) => {
  try {
    const cruds = await Crud.find({});
    //response
    res.status(200).json({
      success: true,
      data: cruds,
      message: "Entire Crud Data is fetched",
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

exports.getCrudById = async (req, res) => {
  try {
    const id = req.params.id;
    const Crud = await Crud.findById({ _id: id });
    if (!Crud) {
      return res.status(404).json({
        success: false,
        message: "No Data Found woth Given Id",
      });
    }

    res.status(200).json({
      success: true,
      data: Crud,
      message: `Crud ${id} data successfully fetched`,
    });
    //response
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
