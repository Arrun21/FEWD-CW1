import React, { useEffect, useState, useCallback } from "react";
import { items } from "../data/data";
import Nutrition from "./Nutrition";
//import { items } from "../data/Data";
import { Ingredient } from "./FoodItem";

const FetchData = ({ query }) => {
  const [nutrition, setNutrition] = useState({
    sugar_g: " ",
    fiber_g: " ",
    serving_size_g: " ",
    sodium_mg: " ",
    name: " ",
    potassium_mg: " ",
    fat_saturated_g: " ",
    fat_total_g: " ",
    calories: " ",
    cholesterol_mg: " ",
    protein_g: " ",
    carbohydrates_total_g: " ",
  });

  const fetchData = useCallback(() => {
    const url =
      "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + query;
    console.log(url);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5379e76b61msh9a0680589ffda6bp1c7e71jsnf023cd682f31",
        "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((incomingData) => {
        console.log(incomingData);
        if (incomingData.items.length !== 0) {
          // let TNutrition ={
          //   sugar_g: 0,
          //   fiber_g: 0,
          //   serving_size_g: 0,
          //   sodium_mg: 0,
          //   name: 0,
          //   potassium_mg: 0,
          //   fat_saturated_g: 0,
          //   fat_total_g: 0,
          //   calories: 0,
          //   cholesterol_mg: 0,
          //   protein_g: 0,
          //   carbohydrates_total_g: 0,
          // }
          
           setNutrition(incomingData.items[0]);
        }
      });
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData, query]);

  return (
    <div>
      <Nutrition item={nutrition} />
    </div>
  );
};
export default FetchData;