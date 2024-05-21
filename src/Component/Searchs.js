import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Searchs.css";
import data from "./TemplateData.json";
import * as image from "../Component/ImagesFolder/Image";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './Footer';


function Searchs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data);
  }, []);

  // Update the filtered data whenever the search term changes
  useEffect(() => {
    const filtered = data.filter((val) =>
      val.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFavorite = (id) => {
    // Find the item by ID in your data array
    const item = filteredData.find((item) => item.id === id);
    // Toggle the favorite state of the item
    item.isFavorite = !item.isFavorite;
    // Update the filtered data with the new favorite state
    setFilteredData([...filteredData]);
  };

  const FavoriteButton = ({ isFavorite, id }) => {
    const handleClick = () => {
      handleFavorite(id); // Handle favorite logic
    };

    return (
      <div>
        <button className='heart' onClick={handleClick}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className="container p-5 my-5 ">
        <div className="searchInput_Container">
          <input
           className="searchInput control"
                       type="text"
            placeholder="Search something Sweet..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <img className="sea1" src={image.searchs} alt="search" />
        </div>
        <div className="container-fluid ">
          {filteredData.map((val) => (
            <div className="template" key={val.id}>
              <FavoriteButton
                isFavorite={val.isFavorite} 
                id={val.id} 
              />
              <div>
                <Link to={`/Searchdetail/${val.id}`}>
                  <img className="sweetimg" src={val.image} alt={val.title} />
                  <div className="tp2">
                    <p className="title-no-shadow">{val.title}</p>
                    <p className="price box-no-shadow">₹{val.price}</p>
                  </div>
                </Link>
              </div>
             
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Searchs;


// function Searchs() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
//   const [isFavorite, setIsFavorite] = useState(false);
//   useEffect(() => {
//     setFilteredData(data);
//   }, []);

//   // Update the filtered data whenever the search term changes
//   useEffect(() => {
//     const filtered = data.filter((val) =>
//       val.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(filtered);
//   }, [searchTerm]);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };


//   // const handleFavorite = () => {
//   //       setIsFavorite(!isFavorite);
//   //       // Implement any logic you need when the user toggles favorite
//   //     };
//       const handleFavorite = (id) => {
//         // Find the item by ID in your data array
//         const item = data.find((item) => item.id === id);
//         // Toggle the favorite state of the item
//         item.isFavorite = !item.isFavorite;
       
//         // Update the data with the new favorite state
//         setData([...data]); // Assuming you have setData function to update data state
//       };
      
//   const FavoriteButton = ({ isFavorite, id }) => {
//     const handleClick = () => {
//       handleFavorite(id); // Handle favorite logic
//     };
    

//     return (
//       <div>
//         <button className='heart' onClick={handleClick}>
//           {isFavorite ? '❤️' : '🤍'}
//         </button>
//       </div>
//     );
//   };
  

//   return (
//     <>
//       <div className="container p-5 my-5 ">
//         <div className="searchInput_Container">
//           <input
//             id="searchInput"
//             type="text"
//             placeholder="Search something Sweet..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//           <img className="sea1" src={image.searchs} alt="search" />
//         </div>
//         <div className="container-fluid ">

//           {filteredData.map((val) => (
//             <div className="template" key={val.id}>
//               <FavoriteButton
//                 // Assuming isFavorite property is present in your data
              
//                 isFavorite={isFavorite} 
//                 onFavorite={handleFavorite}  // Pass item id to handleFavorite function
//               />
//               <div>
//                 <Link to={`/Searchdetail/${val.id}`}>
//                   <img className="sweetimg" src={val.image} alt={val.title} />
//                   <div className="tp2">
//                     <p className="title-no-shadow">{val.title}</p>
//                     <p className="price box-no-shadow">₹{val.price}</p>
//                   </div>
//                 </Link>
//               </div>
//               {/* Render the StarRating component */}
//               <StarRating
//                 totalStars={5}
//                 // Use the stored rating, default to 0
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Searchs;


// function Searchs() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
//   const [rating, setRating] = useState(0);
//   const [isFavorite, setIsFavorite] = useState(false);

//   useEffect(() => {
//     setFilteredData(data);
//   }, []);

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value.toLowerCase();
//     const filtered = data.filter((val) =>
//       val.title.toLowerCase().includes(searchTerm)
//     );
//     setFilteredData(filtered);
//     setSearchTerm(event.target.value);
//   };


//   const handleRate = (value) => {
//     setRating(value);
    
//   };
//   const handleFavorite = () => {
//     setIsFavorite(!isFavorite);
//     // Implement any logic you need when the user toggles favorite
//   };

//   return (
//     <>
//       <div className="templateContainer">
//         <div className="searchInput_Container">
//           <input
//             id="searchInput"
//             type="text"
//             placeholder="Search something Sweet..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//           <img className="sea1" src={image.searchs} alt="search" />
//         </div>
//         <div className="template_Container">
//           {filteredData.map((val) => (
//             <div className="template" key={val.id}>
//               <Link to={`/Searchdetail/${val.id}`}>
//                 <img className="sweetimg" src={val.image} alt={val.title} />
//                 <div className="tp2">
//                   <p className="title-no-shadow">{val.title}</p>
//                   <p className="price box-no-shadow">₹{val.price}</p>
//                 </div>
//               </Link>
//               <  StarRating className="star" totalStars={5} initialRating={rating} onRate={handleRate}  isFavorite={isFavorite} onFavorite={handleFavorite}
//               />
              
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Searchs;









