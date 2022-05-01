import { createSlice } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const initialState = {
  user: [],
  signedUp: false,
  loggedIn: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = [...state.user, action.payload];
      state.signedUp = true;
      //   return {
      //       ...state,
      //       user:[...state.user,action.payload],
      //       signedUp:true
      //   }
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
