import { Router } from "express";
import transactionModel from "../models/transactionModel.js";

const router = Router();

router.get("/", async (req, res) => {
  const transaction = await transactionModel.find({}).sort({ createdAt: -1 });
  res.json({ data: transaction });
});

router.post("/", async (req, res) => {
  const { amount, description, date } = req.body;
  const transaction = new transactionModel({
    amount,
    description,
    date,
  });
  await transaction.save();
  res.json({ message: "Success" });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await transactionModel.findOneAndDelete({ _id: id });
  res.json({ message: "Success" });
});

export default router;
