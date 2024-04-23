import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Searchs.css";
import data from "./TemplateData.json";




function Searchs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data);
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = data.filter((val) =>
      val.title.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search something Sweet..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="template_Container">
          {filteredData.map((val) => (
            <div className="template" key={val.id}>
              <Link to={`/Searchdetail/${val.id}`}>
                <img className="sweetimg" src={val.image} alt={val.title} />
                <h3>{val.title}</h3>
                <p className="price">₹{val.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Searchs;







// import React, {useState} from "react";
// import './Searchs.css';
// import data from "./TemplateData.json";

// function Searchs() {
//     const [searchTerm, setSearchTerm] = useState("");
  
//     return (
//       <>
//         <div className="templateContainer">
//           <div className="searchInput_Container">
//             <input
//               id="searchInput"
//               type="text"
//               placeholder="Search something Sweet..."
//               onChange={(event) => {
//                 setSearchTerm(event.target.value);
//               }}
//             />
//           </div>
//           <div className="template_Container">
//             {data
//               .filter((val) => {
//                 if (searchTerm === "") {
//                   return true; 
//                 } else if (
//                   val.title.toLowerCase().includes(searchTerm.toLowerCase())
//                 ) {
//                   return true; 
//                 } else {
//                   return false; 
//                 }
//               })
//               .map((val) => {
//                 return (
//                   <div className="template" key={val.id}>
//                     <img  className="sweetimg" src={val.image} alt={val.title} />
//                     <h3>{val.title}</h3>
//                     <p className="price">₹{val.price}</p>
//                   </div>
//                 );
//               })}
//           </div>
//         </div>
//       </>
//     );
//   }
  
//   export default Searchs;
  

