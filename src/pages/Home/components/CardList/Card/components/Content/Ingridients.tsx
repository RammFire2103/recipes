import { FC, useContext } from "react";
import { CardContext } from "../../Card";
import { Meal } from "../../../../../../../store/types";

const CardIngridients: FC = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("CardContent must be used within a Card");
  }

  const combineIngredients = (meal: Meal): string => {
    const ingredients: string[] = [];

    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}` as keyof Meal;
      const ingredient = meal[ingredientKey];

      if (typeof ingredient === "string" && ingredient.trim() !== "") {
        ingredients.push(ingredient.trim());
      }
    }

    return ingredients.join(", ");
  };

  return (
    <>
      <label>Ingridients: </label>
      <p>{combineIngredients(context)}</p>
    </>
  );
};

export default CardIngridients;
