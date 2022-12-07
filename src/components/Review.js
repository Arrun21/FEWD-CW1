import React, { useState } from 'react'
import { Accordion } from "react-bootstrap";
import { items } from '../data/data';
import Star from "./star";
import Stars from "./stars";



const Review = (params) => {
    const[selectedStars,setSelectedStars] = useState(0)
    const[reviewText,setReviewText] = useState("")
    const handleClick = ()=>{
        if(selectedStars!=0){
          if(reviewText!=""){
            const newReview = {
              stars:selectedStars,
              text:reviewText,
            }
            params.food.review.push(newReview)
            console.log(params.food.review)
            setSelectedStars(0);
            setReviewText("");
          }
        }
    }
    const createArray = length => [...Array(length)];
    const average = params.food?.review?.reduce((total,next) => total+next.stars,0)/params.food?.review?.length
    const totalStars = 5
  return (
    <Accordion.Body className="accordion-color">
      <p className="review-heading">Review</p>
    <div>
        {params.food?.review?.length > 0 && <div><p id="averagerating">Average Ratings</p><Stars average={average}/></div>}
        {params.food.review.length > 0 && <div><br></br><p className="review-heading">All Reviews</p>{params.food.review.map((item)=>{
          return <><Stars average={item.stars}/> <p>{item.text}</p></>
        })}</div>}
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
      <textarea value={reviewText} onChange={(e)=>setReviewText(e.target.value)}/>
    </div>
    <button className="button-style" onClick={()=>handleClick()} disabled={selectedStars === 0 || reviewText === ""}>Add Review</button>
    </div>
    </Accordion.Body>
  )
}

export default Review