import FoodItems from "./components/FoodItems";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
 // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];  

  
  return (
    <>
      <h1>Healthy Food</h1>
      {foodItems.length === 0 && <h3>I am still hungry.</h3>} 
      <FoodItems></FoodItems>
    </>
  );
}

export default App;
