import React from "react";
import "../MealPage.css";

export const RecipePage = ({ children }: { children: React.ReactNode }) => {
  return <div className="recipe-container">{children}</div>;
};
