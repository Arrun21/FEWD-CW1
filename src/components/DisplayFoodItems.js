import React , { useEffect, useState, useCallback }from "react";
import Accordion from "react-bootstrap/Accordion";
import FoodItem from "./FoodItem";
import { Ingredient } from "./FoodItem";
import FetchNutrition from "./FetchNutrition";

const DisplayFoodItems = ({ foodList }) => {
  const [searchField, setSearchField] = useState("");
  
  // const handleClick = (e) => {
  //   setSearchField(e.target.innerHTML);
  //   console.log(searchField);
  // };
  return (
    <Accordion style={{width:30+'%'}}>
      {foodList.map((food, index) => {
        return (
          <Accordion.Item eventKey={index} key={index} >
            <FoodItem food={food} onClick={setSearchField}/>
            {food.ingredients.map((ingre) => {
            return <Ingredient ingredient={ingre} />;
            })}
            <FetchNutrition query={searchField} /> 
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
export default DisplayFoodItems;

