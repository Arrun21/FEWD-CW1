import React from "react";
import DisplayFoodItems from "./components/DisplayFoodItems"
import { items } from "./data/data";

console.log( {items})
function App() {
  return (
    <div>
      <h1>Recipes</h1>
      <DisplayFoodItems foodList={items} />
    </div>
  );
}
export default App;




