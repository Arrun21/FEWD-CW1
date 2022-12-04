import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const ShoppingItem = (params) => {
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
        <button className="button-style" onClick={()=>handleClick()}>Remove from shopping list</button>
      </Accordion.Body>
    </div>
  );
};
export default ShoppingItem;