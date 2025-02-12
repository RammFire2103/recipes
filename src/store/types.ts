export interface Meal {
  dateModified: null;
  idMeal: string;
  strArea: string;
  strCategory: string;
  strCreativeCommonsConfirmed: string | null;
  strDrinkAlternate: string | null;
  strImageSource: string | null;

  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strSource: string;
  strTags: null | string;
  strYoutube: string;

  [key: `strIngredient${number}`]: string;

  [key: `strMeasure${number}`]: string;
}

export interface MealState {
  meals: Meal[];
}
