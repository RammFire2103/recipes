import { FC } from "react";

import ClassicCard from "./Card/MealCard";

import { useSelector } from "react-redux";

import "./CardList.css";
import { RootState } from "../../../../store/store";
import { Meal } from "../../../../store/types";

const CardList: FC = () => {
  //Получение массива карт из стейта
  const meals = useSelector((state: RootState) => state.meals);

  return (
    <div className="card-list">
      {meals.map((meal: Meal) => (
        <ClassicCard key={meal.idMeal} card={meal}></ClassicCard>
      ))}
    </div>
  );
};

export default CardList;
