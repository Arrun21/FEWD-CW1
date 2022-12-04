import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const MenuItem = (params) => {
  const food = params.food;
  const handleClick = async()=>{
    const newMenu = params.list.filter((item)=>{
      return item!=food
    })
    params.addtomenu(newMenu)
  }

  return (
    <div className="accordion-color">
      <Accordion.Header>{food.name}</Accordion.Header>
      <Accordion.Body>
        <button className="button-style" onClick={()=>handleClick()}>Remove from menu</button>
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
export default MenuItem;


