import "./App.css";
import Counter from "./components/Counter";
import MealList from "./components/MealList";
import MealsProvider from "./providers/MealsProviderContext";

function App() {
  return (
    <div>
      <MealsProvider>
        <MealList />
        <Counter />
      </MealsProvider>
    </div>
  );
}

export default App;
