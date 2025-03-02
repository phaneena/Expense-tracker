import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    date: Date,
  },
  {
    timestamps: true,
  }
);

const Expense=mongoose.model("Expense",ExpenseSchema)
export default Expense