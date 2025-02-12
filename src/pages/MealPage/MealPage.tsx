import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { Meal } from "../../store/types";
import { RecipePage } from "./components/RecipePage";
import { RecipeHeader } from "./components/RecipeHeader";
import { RecipeImage } from "./components/RecipeImage";
import { RecipeIngredients } from "./components/RecipeIngredients";
import { Ingredient } from "./components/Ingredient";
import { RecipeInstructions } from "./components/RecipeInstructions";
import { useParams } from "react-router-dom";
import { RecipeEditButton } from "./components/EditButton";

const MealPage = () => {
  const { id } = useParams<{ id: string }>();

  const meal = useSelector((state: RootState) =>
    state.meals.find((meal: Meal) => meal.idMeal === id)
  );

  if (!meal) {
    return <h1>Рецепт не найден</h1>;
  }

  const ingredients = Array.from({ length: 20 }, (_, i) => ({
    name: meal[`strIngredient${i + 1}` as keyof Meal],
    amount: meal[`strMeasure${i + 1}` as keyof Meal],
  })).filter((ingredient) => ingredient.name && ingredient.name.trim() !== "");

  const instructions = meal.strInstructions.split("\n");

  return (
    <RecipePage>
      <RecipeHeader>
        <RecipeImage src={meal.strMealThumb} alt={meal.strMeal} />
        <RecipeIngredients>
          <h2>Ingredients</h2>
          {ingredients.map((ingredient, index) => (
            <Ingredient
              key={index}
              name={ingredient.name || ""}
              amount={ingredient.amount || ""}
            />
          ))}
          <RecipeEditButton>Edit</RecipeEditButton>
        </RecipeIngredients>
      </RecipeHeader>
      <RecipeInstructions steps={instructions} />
    </RecipePage>
  );
};

export default MealPage;
