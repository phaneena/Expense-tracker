import React, { useContext } from "react";
import { ExpContext } from "../context/ExpeContext";
import { useNavigate } from "react-router-dom";

const ExpenseList = () => {
  const {
    deleteExpense,
    setExpenseToEdit,
    selectedCategory,
    setSelectedCategory,
    filteredExpenses,
    totalExpense
  } = useContext(ExpContext);
  const navigate = useNavigate();

  const fullCategories = ["Shopping", "Food", "Travel", "Others"];
  const categories = ["All", ...fullCategories];

  // const categories = ["All", ...new Set(expenses.map((exp) => exp.category))];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleDelete = (id) => {
    deleteExpense(id);
  };

  const handleEdit = (exp) => {
    setExpenseToEdit(exp);
    navigate("/editexp");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mt-2 flex justify-end">
        <select
          onChange={handleCategoryChange}
          value={selectedCategory}
          className="p-2 rounded border"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <h2 className="text-2xl font-bold mb-4 flex justify-center">Expense List</h2>
      <p className="text-lg font-semibold flex justify-center">
        Total Expense:  {totalExpense}
      </p>

      {filteredExpenses.length === 0 ? (
        <p className="text-center text-black py-2 text-[14px]">No expenses added yet</p>
      ) : (
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Title</th>
              <th className=" border p-2">Amount</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((exp) => (
              <tr key={exp._id} className="text-center hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{exp.title}</td>
                <td className="border border-gray-300 p-2">₹ {exp.amount}</td>
                <td className="border border-gray-300 p-2">{exp.category}</td>
                <td className="border border-gray-300 p-2">
                  {new Date(exp.date).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    className="bg-red-300 rounded-lg w-full"
                    onClick={() => handleDelete(exp._id)}
                  >
                    Delete
                  </button>
                  <br />
                  <button
                    className="bg-green-300 rounded-lg w-full mt-2"
                    onClick={() => handleEdit(exp)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseList;
