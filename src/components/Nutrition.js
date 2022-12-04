import React from "react";
import { Accordion } from "react-bootstrap";
const Nutrition = ({ item }) => {
  return (
    <div className="accordion-color">
      <Accordion.Body>
        <p id="nutrition-css">Nutritional Information</p>
        <p>Serving size:{item.serving_size_g} g</p>
        <p>Calories per serving :{item.calories}</p>
        <p>Sugar content per serving:{item.sugar_g} g</p>
        <p>Total fat content per serving:{item.fat_total_g} g</p>
        <p>Saturated fat content per serving:{item.fat_saturated_g}g</p>
        <p>Protein content per serving:{item.protein_g}g</p>
        <p>Total carbohydrates per serving:{item.carbohydrates_total_g}g</p>
        <p>Fiber per serving: {item.fiber_g}g</p>
        <p>Sodium per serving:{item.sodium_mg}mg</p>
        <p>Potassium per serving:{item.potassium_mg}mg</p>
        <p>Cholesterol per serving:{item.cholesterol_mg}mg</p>
      </Accordion.Body>
    </div>
  );
};
export default Nutrition;