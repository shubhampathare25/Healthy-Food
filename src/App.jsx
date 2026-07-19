import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/Errormessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";

function App() {
  let foodItems = ["Sabzi", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <Container asdf="asdfasdf">
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>
          Above is the list of the healthy foodsd that are good for your healthy
          and well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
