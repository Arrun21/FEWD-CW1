import React from "react";
import DisplayFoodItems from "./components/DisplayFoodItems"
import { items } from "./data/data";
import Search from "./components/Search"

console.log( {items})
function App() {
  return (
    <div>
      <Search details={items}/>
    </div>
  );
}
export default App;




