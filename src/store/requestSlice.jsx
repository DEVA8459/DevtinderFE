import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    setRequest: (state, action) => {
      return action.payload;
    },
    clearRequest: (state, action) => {
      const newArray = state.filter((item) => item._id !== action.payload);
      return newArray;
    },
  },
});

export const { setRequest, clearRequest } = requestSlice.actions;

export default requestSlice.reducer;
