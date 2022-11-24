import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const FoodItem = ({ food }) => {
  return (
    <div>
      <Accordion.Header>{food.name}</Accordion.Header>
      <Accordion.Body>
        <p>{food.category}</p>
        <p>Time: {food.time}</p>
        <p>Serves:{food.serves}</p>
        <p>Difficulty: {food.difficulty}</p>
        <p>{food.description}</p>
        <p>{food.method}</p>
        <p id="ingredient-css">Ingredients</p>
      </Accordion.Body>
    </div>
  );
};
export default FoodItem;


const Ingredient = ({ ingredient }) => {
  return (
    <div>
      <Accordion.Body>
        {ingredient.quantity} {ingredient.measure} {ingredient.ingredientName}
      </Accordion.Body>
    </div>
  );
};

export { Ingredient };

