import { createSlice } from "@reduxjs/toolkit";

const updateSlice = createSlice({
  name: "update",
  initialState: { updateWindow: false },
  reducers: {
    updater: (state, action) => {
      state.updateWindow = action.payload;
    },
  },
});

export const updateActions = updateSlice.actions;

export default updateSlice;
