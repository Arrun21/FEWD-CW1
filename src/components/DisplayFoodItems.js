import React from "react";
import Accordion from "react-bootstrap/Accordion";
import FoodItem from "./FoodItem";
import { Ingredient } from "./FoodItem";

const DisplayFoodItems = ({ foodList }) => {
  return (
    <Accordion style={{width:30+'%'}}>
      {foodList.map((food, index) => {
        return (
          <Accordion.Item eventKey={index} key={index}>
            <FoodItem food={food} />
            {food.ingredients.map((ingre) => {
            return <Ingredient ingredient={ingre}/>;
            })}
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
export default DisplayFoodItems;

