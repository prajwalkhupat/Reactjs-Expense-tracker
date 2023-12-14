import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlicer";
import expensesSlice from "./ExpenseSlicer";
import themeSlicer from "./ThemeSlicer";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    expenses: expensesSlice.reducer,
    theme: themeSlicer.reducer,
  },
});

export default store