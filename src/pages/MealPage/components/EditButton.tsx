import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const RecipeEditButton = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div className="recipe-edit-button">
      <button onClick={() => navigate(`../recipes/edit/${id}`)}>
        {children}
      </button>
    </div>
  );
};
