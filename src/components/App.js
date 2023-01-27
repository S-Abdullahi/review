import React, {useState} from "react";
import Card from "./Card";
import Data from '../data'

export default function App() {

    const [reviewData, setReviewData] = useState(Data[0])
    let count
    function nextReview(){
        count++
        setReviewData(Data[count])
        console.log(count)
    }

  return (
    <div className="app-con">
      <h1 className="title">Our Reviews</h1>
      <Card reviewData={reviewData} nextReview={nextReview}/>
    </div>
  );
}
