import React, { useState,  } from 'react';
import "./Searchs.css";

const StarRating = ({ totalStars }) => {
  const [rating, ] = useState(Math.floor(Math.random() * 3) + 2); // Initialize with a random rating

  return (
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
    </div>
  );
};

export default StarRating;


// import React, { useState,useEffect } from 'react';
// import "./Searchs.css";


// const StarRating = ({ totalStars }) => {
//   const [rating, setRating] = useState(0);

//   useEffect(() => {
//     const generateRandomRating = () => {
   
// const randomRating = Math.floor(Math.random() * 3) + 2; 

//       setRating(randomRating);
//     };

    
//     generateRandomRating();

   
//   }, [totalStars]);

//   return (
//     <div>
//       <div className='stars'>
//         {[...Array(totalStars)].map((_, index) => {
//           const starValue = index + 1;
//           return (
//             <span
//               key={starValue}
//               className="star"
//             >
//               {starValue <= rating ? '\u2605' : '\u2606'}
//             </span>
//           );
//         })}
      
//       </div>
//     </div>
//   );
// };

// export default StarRating;