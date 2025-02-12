import { createSlice } from "@reduxjs/toolkit";
import { MealState } from "./types";
import { Meal } from "./types";

const initialState: MealState = {
  meals: [],
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    addMeals: (state, action) => {
      state.meals = [...action.payload, ...state.meals].reduce((acc, item) => {
        if (
          !acc.some((existingItem: Meal) => existingItem.idMeal === item.idMeal)
        ) {
          acc.push(item);
        }
        return acc;
      }, [] as { idMeal: string }[]);
    },
    editMeal: (state, action) => {
      const newMeals = state.meals.filter((meal: Meal) => {
        if (action.payload.idMeal === meal.idMeal) {
          return false;
        }
        return true;
      });

      state.meals = [...newMeals, action.payload];
    },
  },
});

export const { addMeals, editMeal } = exampleSlice.actions;
export default exampleSlice.reducer;
