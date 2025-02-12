import { createContext, FC, ReactNode } from "react";

import { ClassicCardProps } from "./MealCard";

import CardOpenButton from "./components/Buttons/OpenButton";
import CardContent from "./components/Content/Content";
import CardArea from "./components/Area";
import CardTitle from "./components/Content/Title";
import CardImage from "./components/Image";
import CardButtonPanel from "./components/Buttons/ButtonsPanel";
import CardIngridients from "./components/Content/Ingridients";

import { Meal } from "../../../../../store/types";

import "./Card.css";
import CardCategory from "./components/Category";

type CardProps = ClassicCardProps & { children: ReactNode };

// eslint-disable-next-line react-refresh/only-export-components
export const CardContext = createContext<Meal | undefined>(undefined);

const Card: FC<CardProps> & {
  Title: typeof CardTitle;
  OpenButton: typeof CardOpenButton;
  Area: typeof CardArea;
  Category: typeof CardCategory;
  Content: typeof CardContent;
  Image: typeof CardImage;
  ButtonPanel: typeof CardButtonPanel;
  Ingridients: typeof CardIngridients;
} = ({ card, children }) => {
  return (
    <CardContext.Provider value={{ ...card }}>
      <div className="card">{children}</div>
    </CardContext.Provider>
  );
};

Card.Title = CardTitle;
Card.OpenButton = CardOpenButton;
Card.Area = CardArea;
Card.Category = CardCategory;
Card.Content = CardContent;
Card.Image = CardImage;
Card.ButtonPanel = CardButtonPanel;
Card.Ingridients = CardIngridients;

export default Card;
