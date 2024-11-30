import { Router } from "express";
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
} = require("../controllers/User.Controller");
const {
  getUserDrawings,
  createDrawing,
  deleteDrawing,
} = require("../controllers/Drawings.Controller");

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/create", createUser);

router.delete("/:id", deleteUser);

router.get("/drawings", getUserDrawings);

router.post("/drawings/:id", createDrawing);

router.delete("/drawings/:id", deleteDrawing);

module.exports = router;
