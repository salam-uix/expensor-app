import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.user(cors());

await mongoose.connect(
  "mongodb+srv://expense-app:U0N7iYIDZzTM4NHi@cluster0.oiptd.mongodb.net/?retryWrites=true&w=majority"
);
console.log("Mongodb connection successfully");

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log("Server Running at: http://localhost:5000");
});
