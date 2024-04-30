import React, { useState } from 'react';
import "./Searchs.css";


const StarRating = ({ totalStars, initialRating, onRate,onFavorite, isFavorite  }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (hoveredRating) => {
    setHoverRating(hoveredRating);
   };

   const handleMouseLeave = () => {
    setHoverRating(0);
   };

 const handleClick = (clickedRating) => {
    setRating(clickedRating);
    onRate(clickedRating);
   };

  return (
    <div>
          <div className='container'>
         <div>
      <button className='heart' onClick={onFavorite}>{isFavorite ? '❤️' : '🤍'}</button>
      </div>
           <div className='stars'>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className="star"
             onMouseOver={() => handleMouseOver(starValue)}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleClick(starValue)}
          >
            {starValue <= (hoverRating || rating) ? '\u2605' : '\u2606'}
          </span>
        );
      })}
       <span>{rating}</span>
       </div> 
      
    </div>
    </div>

  );
};

export default StarRating;
