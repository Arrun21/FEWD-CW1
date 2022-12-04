import React from "react";
import DisplayFoodItems from "./components/DisplayFoodItems"
import { items } from "./data/data";
import Search from "./components/Search"
import logo from './logo1.png';

console.log( {items})
function App() {
  return (
    <div>
      <img src={logo} />
      <h1 id="title">Time to feast</h1>
      <Search details={items}/>
    </div>
  );
}
export default App;




