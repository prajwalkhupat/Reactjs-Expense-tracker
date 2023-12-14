import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    expenses: [],
    total : 0
}

const expensesSlice = createSlice({
    name: 'expenseSlice',
    initialState: initialValues,
    reducers: {
        setExpenses(state, action) {
            state.expenses = action.payload.data
            state.total = action.payload.total
        }
    }
})

export const expensesActions = expensesSlice.actions
export default expensesSlice

