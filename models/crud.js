const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const crudSchema = new mongoose.Schema(
  {
    productID: {
      type: String,
      required: true,
      maxLength: 50,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      maxLength: 50,
    },
    price: {
      type: Number,
      required: true,
      maxLength: 50,
    },
    featured: {
      type: Boolean,
      required: true,
      maxLength: 50,
    },
    rating: {
      type: Number,
      required: true,
      maxLength: 50,
    },
    company: {
      type: String,
      required: true,
      maxLength: 50,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crud", crudSchema);
