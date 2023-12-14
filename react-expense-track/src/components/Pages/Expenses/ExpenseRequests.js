import axios from "axios";
import { expensesActions } from "../../../store/ExpenseSlicer";

export async function getExpenses(dispatch) {
  const res = await axios.get(
    "https://react-expense-tracker-3fb78-default-rtdb.firebaseio.com/expenses.json"
  );
  const data = [];
  let sum = 0;
  for (let key in res.data) {
    data.push({ id: key, ...res.data[key] });
    sum += +res.data[key].Amount;
  }
  dispatch(expensesActions.setExpenses({ data: data, total: sum }));
}

export async function deleteExpense(id, dispatch) {
  await axios.delete(
    `https://react-expense-tracker-3fb78-default-rtdb.firebaseio.com/expenses/${id}.json`
  );
  getExpenses(dispatch);
}

export async function editExpense(id, item, dispatch) {
  const res = await axios.put(
    `https://react-expense-tracker-3fb78-default-rtdb.firebaseio.com/expenses/${id}.json`,
    item
  );
  await getExpenses(dispatch);
}

export async function postExpense(item, dispatch) {
  const res = await axios.post(
    "https://react-expense-tracker-3fb78-default-rtdb.firebaseio.com/expenses.json",
    item
  );
  getExpenses(dispatch);
}
