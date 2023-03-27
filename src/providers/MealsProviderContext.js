import React, { createContext, useContext, useState } from "react";

const MealsContext = createContext();
const todayMeals = [
  "Beked Beans",
  "Cancelled beans",
  "Rice beans",
  "sugar beans",
];
const MealsProviderContext = ({ children }) => {
  const [meals, setMealsList] = useState(todayMeals);
  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  );
};

export const useMealsListContext = () => useContext(MealsContext);
export default MealsProviderContext;
