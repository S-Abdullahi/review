import React from 'react'

export default function Card(props){
    const {name, job, image, text} = props.reviewData
    return (
        <div className='card'>
            <div className='image-con'>
            <img src={image} alt='review pic' className='card-image'/> 
            </div>
            <p className='card-name'>{name}</p>
            <p className='card-title'>{job}</p>
            <p className='review-text'>{text}</p>
            <div className='btn-con'>
                <button className='btn btn-left' onClick={()=>props.prevReview()}>&larr;</button>
                <button className='btn btn-right' onClick={()=>props.nextReview()}>&rarr;</button>
            </div>
            <button className='surprise-review' onClick={()=>props.randomReview()}>Surprise Me</button>
        </div>
    )
}