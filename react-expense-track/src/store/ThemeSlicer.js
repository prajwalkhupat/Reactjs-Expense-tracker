import { createSlice } from "@reduxjs/toolkit";

const initialTheme = {
    dark : false
}

const themeSlicer = createSlice({
  name: "themeSlicer",
  initialState: initialTheme,
  reducers: {
      changeTheme(state) {
          state.dark = !state.dark
   }
  },
});

export const themeActions = themeSlicer.actions
export default themeSlicer