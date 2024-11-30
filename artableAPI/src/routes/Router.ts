import { Router } from "express";
const {
  getUserDrawings,
  createDrawing,
  deleteDrawing,
} = require("../controllers/Drawings.Controller");

const router = Router();

router.get("/drawings", getUserDrawings);

router.post("/drawings/:id", createDrawing);

router.delete("/drawings/:id", deleteDrawing);

module.exports = router;
