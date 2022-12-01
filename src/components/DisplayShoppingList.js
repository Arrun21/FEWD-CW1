import React, { useEffect, useState, useCallback } from "react";
import Accordion from "react-bootstrap/Accordion";
import FoodItem from "./FoodItem";
import { Ingredient } from "./FoodItem";
import FetchNutrition from "./FetchNutrition";
import ShoppingItem from "./ShoppingItem";


const DisplayShoppingList = (params) => {
  const [searchField, setSearchField] = useState("");

  // const handleClick = (e) => {
  //   setSearchField(e.target.innerHTML);
  //   console.log(searchField);
  // };
  const foodList = params.foodList;
  return (
    <Accordion>
      {foodList.map((food, index) => {
        return (
          <Accordion.Item eventKey={index} key={index} >
             <ShoppingItem food={food} list={params.foodList} addtomenu={params.addtomenu} />
            {food.ingredients.map((ingre) => {
            return <Ingredient ingredient={ingre} />;
            })}
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
  


 
};
export default DisplayShoppingList;