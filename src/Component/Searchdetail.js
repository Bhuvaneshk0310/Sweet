import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "./TemplateData.json";
import "./Searchdetail.css";

const Searchdetail = () => {
    const { id } = useParams();
    const valueId = parseInt(id);
    const [searchItem, setSearchItem] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const item = data.find(item => item.id === valueId);
        setSearchItem(item);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("./TemplateData.json" + valueId);
            const jsonData = await response.json();
            setSearchItem(jsonData.data);
            console.log(jsonData.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData(); // Call fetchData inside useEffect

}, []); // Empty dependency array


    return (
        <div>
            <p>This is Detail page id-{valueId}</p>
            <div id="card">
                {searchItem && (
                    <div key={searchItem.id}>
                        <img className="sweetimg" src={searchItem.background} alt={searchItem.title} />
                        <h3>{searchItem.title}</h3>
                        <p className="price">₹{searchItem.price}</p>
                        <button className='shopcart'>Add to Cart</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Searchdetail;


// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import data from "./TemplateData.json"; // Import data from JSON file

// function Searchs() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState([]);
//   const { id } = useParams(); // Access the id parameter from the URL

//   useEffect(() => {
//     // Set initial filtered data to all data
//     setFilteredData(data);
//   }, []);

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value.toLowerCase();
//     // Filter data based on search term
//     const filtered = data.filter((val) =>
//       val.title.toLowerCase().includes(searchTerm)
//     );
//     // Update filtered data state
//     setFilteredData(filtered);
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
//         </div>
//         <div className="template_Container">
//           {/* Map over filtered data to display search results */}
//           {filteredData.map((val) => (
//             <div className="template" key={val.id}>
//               <Link to={`/Searchdetail/${val.id}`}>
//                 <img className="sweetimg" src={val.image} alt={val.title} />
//                 <h3>{val.title}</h3>
//                 <p className="price">₹{val.price}</p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Searchs;
