import { FC, useContext } from "react";
import { CardContext } from "../Card";

const CardArea: FC = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("CardContent must be used within a Card");
  }

  return (
    <div className="card__date">
      <label>Area: </label>
      <span>{context.strArea}</span>
    </div>
  );
};

export default CardArea;
