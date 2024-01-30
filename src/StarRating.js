import React from 'react';
import './StarRating.css';

const StarRating = (props) => {
  const starRating = props.rating;
  const fullStars = Math.floor(starRating);
  const hasHalfStar = starRating % 1 > 0;

  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < fullStars) {
      return <img src={require('./fullstar.png')} className='star'></img>
    } else if (hasHalfStar && index === fullStars) {
      return (
          <img src={require('./halfstar.png')} className='star'></img>
      );
    }
    else{
        return(
            <img src={require('./greystar.png')} className='star'></img>
        )
    }
  });

  return <div className="star-container">{stars}<p className='font'>({props.number})</p></div>;
};

export default StarRating;