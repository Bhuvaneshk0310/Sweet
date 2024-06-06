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
      <div className="container p-5 my-5">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search something Sweet..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <img className="sea1" src={image.searchs} alt="search" />
        </div>
        <div className="container">
          <div className="row d-flex flex-row">
            {filteredData.map((val) => (
              <div className="col-md-6 col-lg-4" key={val.id}>
                <div className="template rounded border mt-5">
                  <FavoriteButton isFavorite={val.isFavorite} id={val.id} />
                  <div>
                    <Link to={`/Searchdetail/${val.id}`}>
                      <img
                        className="sweeimg img-fluid" 
                        src={val.image}
                        alt={val.title}
                      />
                      <div className="tp2">
                        <p className="title1">{val.title}</p>
                        <p className="price1">₹{val.price}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Searchs;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Searchs.css";
// import data from "./TemplateData.json";
// import * as image from "../Component/ImagesFolder/Image";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Footer from './Footer';

// function Searchs() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     setFilteredData(data);
//   }, []);

//   useEffect(() => {
//     const filtered = data.filter((val) =>
//       val.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(filtered);
//   }, [searchTerm]);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleFavorite = (id) => {
//     const item = filteredData.find((item) => item.id === id);
//     item.isFavorite = !item.isFavorite;
//     setFilteredData([...filteredData]);
//   };

//   const FavoriteButton = ({ isFavorite, id }) => {
//     const handleClick = () => {
//       handleFavorite(id);
//     };

//     return (
//       <button className='heart' onClick={handleClick}>
//         {isFavorite ? '❤️' : '🤍'}
//       </button>
//     );
//   };

//   return (
//     <div>
//       <div className="container p-3 my-3">
//         <div className="searchInput_Container mb-3">
//           <input
//             id="searchInput"
//             type="text"
//             className="form-control"
//             placeholder="Search something Sweet..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//           <img className="sea1" src={image.searchs} alt="search" />
//         </div>
//         <div className="container">
//           <div className="row mt-5">
//             {filteredData.map((val) => (
//               <div className="col-12 col-sm-6 col-md-4 mb-4 mt-5" key={val.id}>
//                 <div className="template rounded border p-3">
//                   <FavoriteButton isFavorite={val.isFavorite} id={val.id} />
//                   <Link to={`/Searchdetail/${val.id}`}>
//                     <img
//                       className="sweetimg img-fluid"
//                       src={val.image}
//                       alt={val.title}
//                     />
//                     <div className="tp2 mt-2">
//                       <p className="title1 mb-1">{val.title}</p>
//                       <p className="price1">₹{val.price}</p>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Searchs;

