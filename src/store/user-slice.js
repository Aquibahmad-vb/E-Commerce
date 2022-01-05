import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loginUser: [],
};

const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    register: (state, action) => {
      state.user = [...state.user, action.payload];
    },
    userLogin: (state, action) => {
      state.loginUser = action.payload;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
