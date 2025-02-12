import { FC, useContext } from "react";
import { CardContext } from "../Card";

const CardCategory: FC = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("CardContent must be used within a Card");
  }

  return (
    <div className="card__date">
      <label>Category: </label>
      <span>{context.strCategory}</span>
    </div>
  );
};

export default CardCategory;
