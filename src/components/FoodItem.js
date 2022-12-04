import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const FoodItem = (params) => {
  const food = params.food;
  return (
    <div className="accordion-color">
      <Accordion.Header onClick={()=>params.onClick(food.name)}>{food.name}</Accordion.Header>
      <Accordion.Body>
        <button className="button-style" onClick={()=>params.addtomenu(prevArray => [...prevArray, food])} disabled={params.list?.some((e)=>e===food)}>Add to menu</button>
        <button className="button-shopping" onClick={()=>params.addtoshopping(prevArray => [...prevArray, food])} disabled={params.shoppingList?.some((e)=>e===food)}>Add to shopping list</button>
        <br></br>
        <br></br>
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
    <div className="accordion-color">
      <Accordion.Body>
        {ingredient.quantity} {ingredient.measure} {ingredient.ingredientName}
      </Accordion.Body>
    </div>
  );
};

export { Ingredient };

