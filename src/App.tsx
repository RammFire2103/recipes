import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MealPage from "./pages/MealPage/MealPage";
import MealFormPage from "./pages/MealFormPage/MealFormPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import getMeals from "./api/getMeals";
import { useDispatch } from "react-redux";
import { addMeals } from "./store/mealsSlice";

import "./styles/App.css";

const App: React.FC = () => {
  const dispatch = useDispatch();

  getMeals()
    .then((data) => {
      dispatch(addMeals(data));
    })
    .then(() => {
      const localMeals = localStorage.getItem("localMeals");
      if (localMeals) {
        dispatch(addMeals(JSON.parse(localMeals)));
      }
    });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealPage />} />
        <Route path="/edit/:id" element={<MealFormPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
