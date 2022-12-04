import React, { useEffect, useState, useCallback } from "react";
import Accordion from "react-bootstrap/Accordion";
import FoodItem from "./FoodItem";
import { Ingredient } from "./FoodItem";
import FetchNutrition from "./FetchNutrition";
import MenuItem from "./MenuItem";

const DisplayMenuItems = (params) => {
  const [searchField, setSearchField] = useState("");

  // const handleClick = (e) => {
  //   setSearchField(e.target.innerHTML);
  //   console.log(searchField);
  // };
  const foodList = params.foodList;
  const starterList = foodList.filter((item) => {
    return item.category === "Starter"
  })
  const mainList = foodList.filter((item) => {
    return item.category === "Main"
  })
  const dessertList = foodList.filter((item) => {
    return item.category === "Dessert"
  })

  return (
    <>
      {starterList.length > 0 && <><h4>Starters</h4>
        <Accordion>
          {starterList.map((food, index) => {
            return (
              <Accordion.Item eventKey={index} key={index} >
                <MenuItem food={food} list={params.foodList} addtomenu={params.addtomenu} />
                {food.ingredients.map((ingre) => {
                  return <Ingredient ingredient={ingre} />;
                })}
              </Accordion.Item>
            );
          })}
        </Accordion></>}
        {mainList.length > 0 && <><h4>Mains</h4>
        <Accordion>
          {mainList.map((food, index) => {
            return (
              <Accordion.Item eventKey={index} key={index} >
                <MenuItem food={food} list={params.foodList} addtomenu={params.addtomenu} />
                {food.ingredients.map((ingre) => {
                  return <Ingredient ingredient={ingre} />;
                })}
              </Accordion.Item>
            );
          })}
        </Accordion></>}
        {dessertList.length > 0 && <><h4>Desserts</h4>
        <Accordion>
          {dessertList.map((food, index) => {
            return (
              <Accordion.Item eventKey={index} key={index} >
                <MenuItem food={food} list={params.foodList} addtomenu={params.addtomenu} />
                {food.ingredients.map((ingre) => {
                  return <Ingredient ingredient={ingre} />;
                })}
              </Accordion.Item>
            );
          })}
        </Accordion></>}
        </>
  );


  // return (
  //   <Accordion>
  //     {foodList.map((food, index) => {
  //       return (
  //         <Accordion.Item eventKey={index} key={index} >
  //           <MenuItem food={food} list={params.foodList}addtomenu={params.addtomenu}/>
  //           {food.ingredients.map((ingre) => {
  //           return <Ingredient ingredient={ingre} />;
  //           })}
  //         </Accordion.Item>
  //       );
  //     })}
  //   </Accordion>
  // );
};
export default DisplayMenuItems;
