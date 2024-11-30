import { Request, Response } from "express";
const Drawing = require("../models/Drawing.Model");

const getAll = async (req: Request, res: Response) => {
  try {
    const allDrawings = await Drawing.find().sort({ ceatedAt: -1 });
    if (!allDrawings) {
      res.status(400).json({ error: "There are no drawings" });
    }
    res.status(200).json(allDrawings);
  } catch (err) {
    console.log("Error: ", err);
  }
};

const getUserDrawings = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const drawings = await Drawing.findById({ _id: id });
    if (!drawings) {
      res.status(400).json({ error: "There are no drawings for this user" });
    }
    res.status(200).json(drawings);
  } catch (err) {
    console.log("Error: ", err);
  }
};

const createDrawing = async (req: Request, res: Response) => {
  const id = req.params.id;
  const drawing = new Drawing(req.body);
  drawing["userId"] = id;
  try {
    const createdDrawing = await Drawing.create({ data: drawing });
  } catch (err) {
    console.log("Error: ", err);
  }
};

const deleteDrawing = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deletedDrawing = await Drawing.findOneAndDelete({ _id: id });
    if (!deleteDrawing) {
      res.status(400).json({ error: "There is no such drawing" });
    }
    res.status(200).json(deletedDrawing);
  } catch (err) {
    console.log("Error: ", err);
  }
};

module.exports = {
  getAll,
  getUserDrawings,
  createDrawing,
  deleteDrawing,
};
