import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

const schema = Schema;

const drawingSchema = new schema(
  {
    drawing: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Drawing = mongoose.model("Drawing", drawingSchema);

module.exports = Drawing;
