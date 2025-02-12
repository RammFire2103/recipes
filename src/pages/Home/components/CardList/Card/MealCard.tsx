import { FC } from "react";
import { Meal } from "../../../../../store/types";

import Card from "./Card";

export interface ClassicCardProps {
  card: Meal;
}

//Разметка карточки семинара
const ClassicCard: FC<ClassicCardProps> = ({ card }) => {
  return (
    <Card card={card}>
      <Card.Image></Card.Image>
      <Card.Content>
        <Card.Title></Card.Title>
        <Card.Ingridients></Card.Ingridients>
        <div className="card__options">
          <Card.Category></Card.Category>
          <Card.Area></Card.Area>
        </div>
      </Card.Content>
      <Card.ButtonPanel>
        <Card.OpenButton></Card.OpenButton>
      </Card.ButtonPanel>
    </Card>
  );
};

export default ClassicCard;
