import { useState } from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/Errormessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = ["Sabzi", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  const [textToShow, setTextToShow] = useState("Food Item Entered by user");

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextToShow(event.target.value);
  };

  return (
    <>
      <Container asdf="asdfasdf">
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>

        <p>{textToShow}</p>

        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
