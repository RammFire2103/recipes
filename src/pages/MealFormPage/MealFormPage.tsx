import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Meal } from "../../store/types";
import { editMeal } from "../../store/mealsSlice";

import "./EditMeal.css";
import { IngredientForm } from "./components/IngredientForm";

const EditMealPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const initialMeal = useSelector((state: RootState) =>
    state.meals.find((meal: Meal) => meal.idMeal === id)
  );

  const [formValid, setFormValid] = useState(true);

  if (!initialMeal) {
    return <h1>Рецепт не найден!</h1>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    if (validateMeal(target)) {
      const inputs = target.elements.length;
      const updates: { [key: `strMeasure${number}`]: string } = {};

      for (let i = 0; i < inputs - 1; i++) {
        updates[`strMeasure${i + 1}`] = (target[i] as HTMLInputElement).value;
      }
      dispatch(editMeal({ ...initialMeal, ...updates }));

      const NewMeal: Meal = { ...initialMeal, ...updates };

      const localMeals = localStorage.getItem("localMeals");
      if (localMeals) {
        const localMealsArr = JSON.parse(localMeals);
        const filtered = localMealsArr.filter((item: Meal) => {
          if (item.idMeal === NewMeal.idMeal) {
            return false;
          }
          return true;
        });
        localStorage.setItem(
          "localMeals",
          JSON.stringify([...filtered, NewMeal])
        );

        navigate(`../../meal/${id}`);
      } else {
        localStorage.setItem("localMeals", JSON.stringify([NewMeal]));
      }
    } else {
      setFormValid(false);
    }
  };

  const validateMeal = (target: HTMLFormElement): boolean => {
    const inputs = target.elements.length;

    for (let i = 0; i < inputs - 1; i++) {
      if ((target[i] as HTMLInputElement).value.length === 0) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="edit-meal-container">
      <h1>Editing a recipe: {initialMeal.strMeal}</h1>
      <form onSubmit={handleSubmit}>
        <div className="ingredients-container">
          {Object.keys(initialMeal)
            .filter(
              (key) =>
                key.startsWith("strIngredient") &&
                initialMeal[key as keyof Meal]?.trim()
            )
            .map((key) => {
              const ingredientKey = key as keyof Meal;
              const measureKey = `strMeasure${key.slice(13)}` as keyof Meal;

              const ingredientValue = initialMeal[ingredientKey];
              const measureValue = initialMeal[measureKey] ?? "";

              // Проверяем, начинается ли значение measureValue с числа

              return (
                <div key={ingredientKey} className="ingredient-row">
                  <span>{ingredientValue}</span>
                  <IngredientForm amount={measureValue} />
                </div>
              );
            })}
        </div>
        {!formValid && (
          <p className="error">Введите корректные значения ингредиентов!</p>
        )}
        <button type="submit">Сохранить изменения</button>
      </form>
    </div>
  );
};

export default EditMealPage;
