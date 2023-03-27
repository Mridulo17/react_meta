import React from "react";
import { useMealsListContext } from "../providers/MealsProviderContext";

function MealList() {
  const { meals } = useMealsListContext();
  return (
    <div>
      <h1>Meals list using Context Api</h1>
      {meals.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
      ))}
    </div>
  );
}

export default MealList;
