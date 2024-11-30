import path from "path";

const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/Router");
const userRouter = require("./routes/User.Router");
const cors = require("cors");
require("dotenv").config({
  path: "../.env",
});

const app = express();

const { PORT, MONGO_PATH, MONGO_USER, MONGO_PASSWORD } = process.env;

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`;

const clientOptions = {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
    useNEWUrlParser: true,
    useUnifiedTopology: true,
  },
};
mongoose
  .connect(uri, clientOptions)
  .then(() => app.listen(PORT))
  .catch((err: any) => console.log(err));

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/artable", router);
app.use("/api/user", userRouter);
