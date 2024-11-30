import { timeStamp } from "console";
import { Schema, Mongoose } from "mongoose";

const schema = mongoose.Schema();

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
  { timeStamp: true }
);

const Drawing = new mongoose.Model("drawing", drawingSchema);

module.exports = Drawing;
