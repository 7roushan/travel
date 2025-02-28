import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    formData: {},
  },
  reducers: {
    submitForm: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { submitForm } = contactSlice.actions;
export default contactSlice.reducer;
