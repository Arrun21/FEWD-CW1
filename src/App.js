import React from "react";
import DisplayFoodItems from "./components/DisplayFoodItems"
import { items } from "./data/data";
import Search from "./components/Search"

console.log( {items})
function App() {
  return (
    <div>
      <h1>Recipes</h1>
      {/* <DisplayFoodItems foodList={items} /> */}
      <Search details={items}/>
    </div>
  );
}
export default App;




