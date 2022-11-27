import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const FoodItem = ({ food }) => {
  return (
    <div>
      <Accordion.Header>{food.name}</Accordion.Header>
      <Accordion.Body>
        <p id="category">{food.category}</p>
        <p><strong>Time: </strong>{food.time} mins</p>
        <p><strong>Serves: </strong>{food.serves}</p>
        <p><strong>Difficulty: </strong>{food.difficulty}</p>
        <p>{food.description}</p>
        <p id="method-heading">Method</p>
        <p id="foodmethod">{food.method}</p>
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

