import React from "react";

export const Ingredient = ({
  name,
  amount,
}: {
  name: string;
  amount: string;
}) => {
  return (
    <div className="ingredient">
      <span>{name}</span>
      <span>{amount}</span>
    </div>
  );
};
