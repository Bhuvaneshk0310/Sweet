import React, { useState,useEffect } from 'react';
import "./Searchs.css";


const StarRating = ({ totalStars }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const generateRandomRating = () => {
      // const randomRating = Math.floor(Math.random() * totalStars) + 1;
   
const randomRating = Math.floor(Math.random() * 3) + 2; // Generates a random number between 3 and 5

 // Output the random rating


      setRating(randomRating);
    };

    // Generate a random rating initially
    generateRandomRating();

    // Refresh rating every 3 seconds
    const intervalId = setInterval(generateRandomRating, 33000);

    // Clean up interval
    return () => clearInterval(intervalId);
  }, [totalStars]);

  return (
    <div>
      <div className='stars'>
        {[...Array(totalStars)].map((_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={starValue}
              className="star"
            >
              {starValue <= rating ? '\u2605' : '\u2606'}
            </span>
          );
        })}
        <span>{rating}</span>
      </div>
    </div>
  );
};

export default StarRating;