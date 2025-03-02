import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

export const ExpContext = createContext();

const ExpenseContext = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [expenseToEdit, setExpenseToEdit] = useState(null);
  const [totalExpense, setTotalExpense] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async (expenses) => {
    console.log("Sending request:", expenses);
    await axiosInstance.post("/add", expenses);
    fetchExpenses();
  };

  const fetchExpenses = async () => {
    const { data } = await axiosInstance.get("/expenses");
    console.log(data, "fetched");
    setExpenses(data.expenses.expenses);
    setTotalExpense(data.expenses.totalExpense);
  };

  const deleteExpense = async (id) => {
      await axiosInstance.delete(`/expenses/${id}`);
      fetchExpenses();
  };
  

  const editExpense = async (id, updatedExp) => {
    await axiosInstance.put(`/expenses/${id}`, updatedExp);
    fetchExpenses();
  };


  const filteredExpenses =
  selectedCategory === "All"
    ? expenses
    : expenses.filter((exp) => exp.category === selectedCategory);

  return (
    <ExpContext.Provider value={{ expenses, addExpense ,deleteExpense, editExpense,expenseToEdit,setExpenseToEdit,selectedCategory,
      setSelectedCategory,
      filteredExpenses,totalExpense}}>
      {children}
    </ExpContext.Provider>
  );
};

export default ExpenseContext;
