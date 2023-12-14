import React, {  useEffect, useState } from 'react'
import { CSVDownload, CSVLink } from 'react-csv';
import { useDispatch, useSelector } from 'react-redux';
import EditForm from './EditForm';
import { deleteExpense, getExpenses } from './ExpenseRequests';

const ExpenseContainer = () => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    getExpenses(dispatch)
  },[])

  const expense = useSelector(state=>state.expenses.expenses)
  
  return (
    <div>
      {expense?.map((e, i) => (
        <div className=" d-flex justify-content-around m-2 p-2 shadow" key={i}>
          <p>Amount - {e.Amount}</p>
          <p>Description - {e.Description}</p>
          <p>Category - {e.Category}</p>
          <div className=" d-flex gap-2">
            <EditForm item={e} />
            <button
              onClick={() => deleteExpense(e.id, dispatch)}
              className=" btn btn-danger"
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
      {expense && (
        <CSVLink data={expense}>
          <button className=" btn btn-primary">DOWNLOAD CSV</button>
        </CSVLink>
      )}
    </div>
  );
};

export default ExpenseContainer