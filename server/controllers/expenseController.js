import {
  addExpenseService,
  deleteExpenseService,
  getAllExpensesService,
  updateExpenseService,
} from "../services/expenseService.js";
import asyncHandler from "../utils/asyncHandler.js";

//create
export const createExpense = asyncHandler(async (req, res) => {
  const { title, amount, category, date } = req.body;

  if (!title || !amount || !category) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const expense = await addExpenseService({ title, amount, category, date });
  res.status(201).json({ message: "expense track created successfully", expense });
});

//get
export const getExpenses = asyncHandler(async (req, res) => {
  const expenses = await getAllExpensesService();
  res.status(200).json({ success: true, expenses });
});

//delete
export const deleteExpenseController = asyncHandler(async (req, res) => {
  const { id } = req.params; // Get expense ID from URL parameter

  const expense = await deleteExpenseService(id);

  if (!expense) {
    res.status(404);
    throw new Error("Expense not found");
  }

  res.status(200).json({ message: "Expense deleted successfully" });
});

// Update Expense
export const updateExpenseController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, amount, category, date } = req.body;

  const updatedExpense = await updateExpenseService(id, {
    title,
    amount,
    category,
    date,
  });

  if (!updatedExpense) {
    res.status(404);
    throw new Error("Expense not found");
  }

  res.status(200).json({ message: "Expense updated successfully", updatedExpense });
});
