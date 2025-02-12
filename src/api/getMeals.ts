async function getMeals() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );

  if (response.ok) {
    const data = await response.json();
    return data.meals;
  } else {
    throw Error("Ошибка получения данных");
  }
}

export default getMeals;
