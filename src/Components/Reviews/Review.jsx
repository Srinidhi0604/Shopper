import React from 'react'
import user_img from '../Assests/Sample_User_Icon.png'
import ratings from '../Assests/star_icon.png'
import dull from '../Assests/star_dull_icon.png'
import './Reviews.css'

function Review(props) {

    const rating = parseInt(props.ratingstars, 10);

    // Create an array to store the star elements
    const stars = [];
  
    // Loop to add the correct number of filled or dull stars
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img src={ratings} alt="star" />);
      } else {
        stars.push(<img src={dull} alt="star" />);
      }
    }

  return (
    <div className='review-container'>
        <div className='reviewer'>
            <div className='bgg'><img src={user_img} alt="user_image" /></div>
            <p>{props.name}</p>
        </div>

        <div className='rating'>
            <div>{stars}</div>
            <p> {props.comment}</p>
        </div>
        
        <p className='review-date'><span> Reviewed on : </span>{props.date}</p>
        <p className='details'>
            <span> Size : {props.size}</span> |
            <span> Color : Blue </span> |
            <span className='verified'> Verified Purchase</span>
        </p>
        <p>{props.description}</p>
    </div>
  )
}

export default Review
