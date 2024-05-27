import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    id: null,
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    age: "",
  },

  setDefault: {
    id: null,
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    age: "",
  },

  submittedData: [],
};

const userDetailsSlice = createSlice({
  name: "userdetail",
  initialState,
  reducers: {
    setField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },

    submitForm: (state, action) => {
      if (state.formData.id != null && state.formData.id === action.payload) {
        state.submittedData = state.submittedData.filter(
          (user) => user.id !== action.payload
        );
        state.submittedData.push({ ...state.formData });
        state.formData = state.setDefault;
      } else {
        state.submittedData.push({ ...state.formData, id: Date.now() });
        state.formData = state.setDefault;
      }
    },

    resetForm: (state, action) => {
      if (action.payload) {
        state.formData = state.setDefault;
      }
    },

    deleteUser: (state, action) => {
      state.submittedData = state.submittedData.filter(
        (user) => user.id !== action.payload
      );
    },

    updateForm: (state, action) => {
      state.formData = state.submittedData.filter(
        (user) => user.id === action.payload
      )[0];
    },
  },
});

export const userdetailActions = userDetailsSlice.actions;

export default userDetailsSlice;
