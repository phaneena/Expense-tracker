import express from "express"
import { createExpense, deleteExpenseController, getExpenses, updateExpenseController } from "../controllers/expenseController.js";

const router = express.Router();

router.post("/add", createExpense);
router.get("/expenses", getExpenses);
router.delete("/expenses/:id",deleteExpenseController)
router.put("/expenses/:id",updateExpenseController);



export default router
