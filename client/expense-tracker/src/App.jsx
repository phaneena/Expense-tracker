import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExpenseForm from './components/expenseForm';
import ExpenseContext from './context/ExpeContext';
import ExpenseList from './components/ExpenseList';
import EditExpense from './components/EditExpense';


function App() {

  return (
    <>
    <ExpenseContext>
     <Router>
      <Routes>
        <Route path='/' element={<ExpenseForm />}/>
        <Route path='/expense' element={<ExpenseList />}/>
        <Route path='/editexp' element={<EditExpense />} />
      </Routes>
     </Router>
     </ExpenseContext>
    </>
  )
}

export default App
