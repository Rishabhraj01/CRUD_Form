import { configureStore } from "@reduxjs/toolkit";
import userDetailsSlice from "./userDetailsSlice";
import updateSlice from "./updateSlice";

const userStore = configureStore({
  reducer: {
    userdetail: userDetailsSlice.reducer,
    update: updateSlice.reducer,
  },
});

export default userStore;
