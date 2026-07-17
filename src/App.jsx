import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/Errormessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = [
    "Dal",
    "Green Vegetable",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
  ];

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;