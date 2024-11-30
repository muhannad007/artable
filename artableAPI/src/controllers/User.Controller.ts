import { Request, Response } from "express";
const User = require("../models/User.Model");
const jwt = require("jsonwebtoken");

const createToken = (_id: string) => {
  return jwt.sign({ _id }, process.env.SECRET_TOKEN, { expiresIn: "3d" });
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req: Request, res: Response) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    const user = await User.signup(first_name, last_name, email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error: any) {
    // throw Error(error);
    res.status(400).json({ error: error.message });
  }
};

const getUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await User.findById({ _id: id });
  if (!user) {
    res.status(400).json({ error: "There is no such user" });
  }
  res.status(200).json(user);
};

const createUser = async (req: Request, res: Response) => {
  const user = new User(req.body);
  try {
    const res = await User.create(user);
    res.status(200).json(res);
  } catch (error) {
    res.status(400).json({ error: "Can't create user" });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const res = await User.findOneAndDelete({ _id: id });
    res.status(200).json(res);
  } catch (error) {
    res.status(400).json({ error: "Can't delete user" });
  }
};

module.exports = {
  loginUser,
  signupUser,
  getUser,
  createUser,
  deleteUser,
};
