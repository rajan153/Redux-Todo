import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const stores = configureStore({
  reducer: todoReducer,
});
