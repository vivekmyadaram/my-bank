import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import bankUserReducer from "./accountHolderSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bankUsers: bankUserReducer,
  },
});
