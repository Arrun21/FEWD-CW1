import React, { useState } from "react";
import Star from "./star";


export default function StarRating(params) {

  const createArray = length => [...Array(length)];
  const totalStars = 5;
    return (
    <div>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={params.average > i}
          
        />
         
      ))
    
      }
    </div>
  );
}