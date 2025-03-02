import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ExpContext } from "../context/ExpeContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditExpense = () => {
  const { expenseToEdit, editExpense } = useContext(ExpContext);
  const navigate = useNavigate();


  const validationSchema = Yup.object({
    title: Yup.string()
      .required("Title is required"),
    amount: Yup.number()
      .required("Amount is required"),
    category: Yup.string().required("Category is required"),
    date: Yup.date().required("Date is required"),
  });

  const handleSubmit = async (values) => {
    await editExpense(expenseToEdit._id, values);
    navigate("/expense");
  };

  return (
    <div className="w-md mx-auto bg-white rounded-lg p-6 mt-10">
      <h1 className="text-2xl font-bold text-center text-blue-500 mb-6">
        Edit Expense
      </h1>
      <Formik
        initialValues={{
          title: expenseToEdit.title,
          amount: expenseToEdit.amount,
          category: expenseToEdit.category,
          date: expenseToEdit.date.split("T")[0],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label className="block text-sm font-semibold">Title</label>
              <Field name="title" className="w-full border p-2 rounded" />
              <ErrorMessage name="title" component="div" className="text-red-500" />
            </div>

            <div>
              <label className="block text-sm font-semibold">Amount</label>
              <Field
                type="number"
                name="amount"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage name="amount" component="div" className="text-red-500" />
            </div>

            <div>
              <label className="block text-sm font-semibold">Category</label>
              <Field
                as="select"
                name="category"
                className="w-full border p-2 rounded"
              >
                <option>Food</option>
                <option>Travel</option>
                <option>Shopping</option>
                <option>Others</option>
              </Field>
              <ErrorMessage
                name="category"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Date</label>
              <Field
                type="date"
                name="date"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage name="date" component="div" className="text-red-500" />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white w-full p-2 rounded mt-4"
            >
              Update Expense
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditExpense;
