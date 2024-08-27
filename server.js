const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://noorrk042:H527b8LjgBjoyXFM@cluster0.n0smj.mongodb.net/"
  )
  .then(() => console.log("MongoDB connected"))
  .catch(() => console.log(error));

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`server is running at PORT: ${PORT}`));
