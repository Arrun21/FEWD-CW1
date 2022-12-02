import React , { useEffect, useState, useCallback }from "react";
import Accordion from "react-bootstrap/Accordion";
import FoodItem from "./FoodItem";
import { Ingredient } from "./FoodItem";
import FetchNutrition from "./FetchNutrition";
import Review from "./Review";

const DisplayFoodItems = (params) => {
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
            <FoodItem food={food} list={params.menu} shoppingList={params.shoppingList} onClick={setSearchField} addtomenu={params.addtomenu} addtoshopping={params.addtoshopping}/>
            {food.ingredients.map((ingre) => {
            return <Ingredient ingredient={ingre} />;
            })}
            <FetchNutrition query={searchField} /> 
            <Review food={food}/>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
export default DisplayFoodItems;

