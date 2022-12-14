import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import TransactionRoutes from "./routes/transactionRoutes.js";
import connect from "./database/mongodb.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/transaction", TransactionRoutes);

await connect();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server Running at: http://localhost:5000");
});
