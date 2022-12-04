import React, { useState } from 'react'
import { Accordion } from "react-bootstrap";
import Star from "./star";
import Stars from "./stars";



const Review = (params) => {
    const[selectedStars,setSelectedStars] = useState(0)
    const handleClick = ()=>{
        if(selectedStars!=0){
            params.food.review.push(selectedStars)
            console.log(params.food.review)
            setSelectedStars(0);
        }
    }
    const createArray = length => [...Array(length)];
    const average = params.food?.review?.reduce((total,next) => total+next,0)/params.food?.review?.length
    const totalStars = 5
  return (
    <Accordion.Body className="accordion-color">
      <p id="review-heading">Review</p>
    <div>
        {params.food?.review?.length > 0 && <div><p id="averagerating">Average Ratings</p><Stars average={average}/></div>}
        <div>
        <p id="selectrating">Select rating</p>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
         
      ))
    
      }
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
    <button className="button-style" onClick={()=>handleClick()} disabled={selectedStars === 0}>Add Review</button>
    </div>
    </Accordion.Body>
  )
}

export default Review