import { FC, useContext } from "react";
import { CardContext } from "../../Card";
import { useNavigate } from "react-router-dom";

const CardEditButton: FC = () => {
  const context = useContext(CardContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("CardContent must be used within a Card");
  }

  return (
    <button
      className="card__button card__button_edit"
      onClick={() => console.log(navigate(`./meal/${context.idMeal}`))}
    >
      Let's cook
    </button>
  );
};

export default CardEditButton;
