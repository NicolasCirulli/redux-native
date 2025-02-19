import { createReducer } from "@reduxjs/toolkit";
import { loginAction, logoutAction } from "../actions/userActions";

interface User {
  id: string;
  name: string;
  image: string;
  email: string;
}

export interface UserStore {
  user: User;
  token: string;
}

const initialState: UserStore = {
  user: {
    id: "",
    name: "",
    image: "",
    email: "",
  },
  token: "",
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginAction, (state, action) => {
      return { ...state, ...action.payload };
    })
    .addCase(logoutAction, (state, action) => initialState);
});
