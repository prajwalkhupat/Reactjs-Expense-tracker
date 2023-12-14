import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ExpenseContainer from './ExpenseContainer';
import ExpenseForm from './ExpenseForm'

const Expenses = () => {
  const [expenseArr, setExpenseArr] = useState([])
  const total = useSelector(state => state.expenses)
  
  return (
    <div>
      {total > 10000 && (
        <button className=" btn btn-warning mt-5">Unlock Premium</button>
      )}
      <ExpenseForm expenseArr={expenseArr} setExpenseArr={setExpenseArr} />
      <ExpenseContainer expenseArr={expenseArr} />
    </div>
  );
}

export default Expenses