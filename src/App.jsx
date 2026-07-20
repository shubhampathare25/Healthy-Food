import { useState } from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/Errormessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let [textToShow, setTextToShow] = useState("");
  let [foodItems, setFoodItems] = useState([
    "Green Vegetable",
    "Roti",
    "Salad",
  ]);

  const onKeyDown = (event) => {
    if (event.key == 'Enter') {
      let newFoodItem = event.target.value;
      console.log('Food value entered is ' + newFoodItem);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
