import React from 'react'

export default function Card(props){
    console.log(props)
    const {name, job, image, text} = props.reviewData
    return (
        <div className='card'>
            <img src={image} alt='review pic' className='card-image'/>
            <p className='card-name'>{name}</p>
            <p className='card-title'>{job}</p>
            <p className='review-text'>{text}</p>
            <div className='btn-con'>
                <button className='btn btn-left'>&larr;</button>
                <button className='btn btn-right' onClick={()=>props.nextReview()}>&rarr;</button>
            </div>
            <button className='surprise-review'>Surprise Me</button>
        </div>
    )
}