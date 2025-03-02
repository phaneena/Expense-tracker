import Expense from "../models/expenseModel.js";



export const addExpenseService = async ({title,amount,category,date}) => {
  const newExpense = new Expense({title,amount,category,date});
  console.log(newExpense)
  return await newExpense.save();
};

export const getAllExpensesService = async () => {
  // return await Expense.find();
  const expenses = await Expense.find();
  const totalAmount = await Expense.aggregate([
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);
  const totalExpense = totalAmount[0] ? totalAmount[0].total : 0;
  console.log(totalExpense);
  // Return the data rather than sending a response
  return { expenses, totalExpense };

};


//delete
export const deleteExpenseService = async (id) => {
    return await Expense.findByIdAndDelete(id);
  };
  

export const updateExpenseService = async (id, updatedData) => {
    return await Expense.findByIdAndUpdate(id, updatedData, { new: true });
};
  