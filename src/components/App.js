import React, {useState} from "react";
import Card from "./Card";
import Data from '../data'

let count = 0
export default function App() {

    const [reviewData, setReviewData] = useState(Data[0])
    
    function nextReview(){
        if(count == Data.length - 1){
            count = 0
        } else{
            count = count + 1
        }
        setReviewData(Data[count])
    }

    function previousReview(){
        if(count == 0){
            count = Data.length - 1
        } else{
            count = count - 1
        }
        setReviewData(Data[count])
    }

    function randomReview(){
        const random = Math.floor(Math.random()* Data.length)
        setReviewData(Data[random])
    }

  return (
    <div className="app-con">
      <h1 className="title">Our Reviews</h1>
      <Card reviewData={reviewData} nextReview={nextReview} prevReview={previousReview} randomReview={randomReview}/>
    </div>
  );
}
