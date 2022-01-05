import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    register: (state, action) => {
      state.user = [...state.user, action.payload];
    },
  },
});

export default userSlice;
