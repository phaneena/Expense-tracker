import React, { useContext } from "react";
import { ExpContext } from "../context/ExpeContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ExpenseForm = () => {
  const { addExpense } = useContext(ExpContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    title: Yup.string()
      .required("Title is required"),
    amount: Yup.number()
      .required("Amount is required"),
    category: Yup.string().required("Category is required"),
    date: Yup.date().required("Date is required"),
  });

  const initialValues = {
    title: "",
    amount: "",
    category: "Food",
    date: new Date().toISOString().split("T")[0],
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    await addExpense(values);
    navigate("/expense");
    resetForm();
  };

  return (
    <div className="w-md mx-auto bg-white rounded-lg p-6 mt-10">
      <h1 className="text-2xl font-bold text-center text-black mb-6">
        Expense Tracker
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-4">
          
            <div>
              <label className="block text-sm font-semibold">Expense Title</label>
              <Field
                type="text"
                name="title"
                className="w-full border rounded-lg p-2"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Amount</label>
              <Field
                type="number"
                name="amount"
                className="w-full border rounded-lg p-2"
              />
              <ErrorMessage
                name="amount"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

          
            <div>
              <label className="block text-sm font-semibold">Category</label>
              <Field
                as="select"
                name="category"
                className="w-full border rounded-lg p-2"
              >
                <option>Food</option>
                <option>Travel</option>
                <option>Shopping</option>
                <option>Others</option>
              </Field>
              <ErrorMessage
                name="category"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>


            <div>
              <label className="block text-sm font-semibold">Date</label>
              <Field
                type="date"
                name="date"
                className="w-full border rounded-lg p-2"
              />
              <ErrorMessage
                name="date"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add Expense
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ExpenseForm;







// import React, { useState, useContext } from "react";
// import { ExpContext } from "../context/ExpeContext";
// import { useNavigate } from "react-router-dom";

// const ExpenseForm = () => {
//   const { addExpense } = useContext(ExpContext);
//   const navigate=useNavigate()
//   const [form, setForm] = useState({
//     title: "",
//     amount: "",
//     category: "food",
//     date: new Date().toISOString().split("T")[0],
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     console.log("Form Submitted");
//     e.preventDefault();
//     console.log(form)
//     await addExpense(form);
//     setForm({ title: "", amount: "", category: "Food", date: new Date().toISOString().split("T")[0] });
//     navigate("/expense")

//   };

//   return (
//     <div className="w-md mx-auto bg-white rounded-lg  p-6 mt-10">
//        <h1 className="text-2xl font-bold text-center text-blue-500 mb-6">Expense Tracker</h1>
//        <form onSubmit={handleSubmit} className="space-y-4">
//          <div>
//            <label className="block text-sm font-semibold">Expense Title</label>
//           <input
//             type="text"
//             name="title"
//             onChange={handleChange}
//             value={form.title}
//             required
//             className="w-full border rounded-lg p-2"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold">Amount</label>
//           <input
//             type="number"
//             name="amount"
//             onChange={handleChange}
//             value={form.amount}
//             required
//             className="w-full border rounded-lg p-2"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold">Category</label>
//           <select
//             name="category"
//             onChange={handleChange}
//             value={form.category}
//             className="w-full border rounded-lg p-2"
//            >
//             <option>Food</option>
//            <option>Travel</option>
//             <option>Shopping</option>
//             <option>Others</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-semibold">Date</label>
//           <input
//             type="date"
//             name="date"
//             onChange={handleChange}
//             value={form.date}
//             className="w-full border rounded-lg p-2"
//           />
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
//           Add Expense
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ExpenseForm;