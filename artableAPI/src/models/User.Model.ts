import mongoose, { Schema } from "mongoose";
const bcrypt = require("bcrypt");
const validator = require("validator");

const schema = Schema;

const userSchema = new schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Static signup method
userSchema.statics.signup = async function (
  first_name: string,
  last_name: string,
  email: string,
  password: string
) {
  if (!first_name || !last_name || !email || !password) {
    throw Error("All fields must be filled.");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid.");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Passord is not strong enough.");
  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use.");
  }

  const salt = await bcrypt.genSalt(10); // Adds 10 random chars to the password
  const hash = await bcrypt.hash(password, salt); // Hashing the password

  const user = await this.create({
    first_name,
    last_name,
    email,
    password: hash,
  });

  return user;
};

userSchema.statics.login = async function (email: string, password: string) {
  if (!email || !password) {
    throw Error("All fields must be filled.");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
