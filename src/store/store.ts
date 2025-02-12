import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./mealsSlice";

export const store = configureStore({
  reducer: exampleReducer,
});

// Типы для использования с TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
