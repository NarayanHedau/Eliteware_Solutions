const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: {
      type: String,
    },
    category:{
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    userId:{
      type: mongoose.Types.ObjectId, ref:"Users"
    }
  },
  { timestamps: true }

);

const Items = mongoose.model("Items", itemSchema);
module.exports = Items;


