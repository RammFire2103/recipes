import React from "react";

export const RecipeIngredients = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="recipe-ingredients">{children}</div>;
};
