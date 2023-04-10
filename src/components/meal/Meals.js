import React from "react";
import MealSummry from "./MealSummry";
import MealsList from "./MealsList";

const Meals = () => {
  return (
    <React.Fragment>
      <MealSummry />
      <MealsList />
    </React.Fragment>
  );
};

export default Meals;
