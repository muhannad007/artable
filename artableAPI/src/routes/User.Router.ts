import { Router } from "express";
const { signupUser, loginUser } = require("../controllers/User.Controller");

const router = Router();

router.post("/login", loginUser);

router.post("/signup", signupUser);

module.exports = router;
