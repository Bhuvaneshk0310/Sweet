import React, {useState} from "react";
import './Searchs.css';
import data from "./TemplateData.json";

function Searchs() {
    const [searchTerm, setSearchTerm] = useState("");
  
    return (
      <>
        <div className="templateContainer">
          <div className="searchInput_Container">
            <input
              id="searchInput"
              type="text"
              placeholder="Search something Sweet..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          <div className="template_Container">
            {data
              .filter((val) => {
                if (searchTerm === "") {
                  return true; // Explicitly return true for each element when searchTerm is empty
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return true; // Explicitly return true if title includes the searchTerm
                } else {
                  return false; // Explicitly return false otherwise
                }
              })
              .map((val) => {
                return (
                  <div className="template" key={val.id}>
                    <img  className="sweetimg" src={val.image} alt={val.title} />
                    <h3>{val.title}</h3>
                    <p className="price">₹{val.price}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
  
  export default Searchs;
  

// function Searchs() {
//   const [searchTerm, setSearchTerm] = useState("");
//   return (
//     <>
//       <div className="templateContainer">
//         <div className="searchInput_Container">
//           <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
//             setSearchTerm(event.target.value);
//           }} />
//         </div>
//         <div className="template_Container">
//           {
//             data 
//               .filter((val) => {
//                 if(searchTerm === ""){
//                   return val;
//                 }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
//                   return val;
//                 }
//               })
//               .map((val) => {
//                 return(
//                   <div className="template" key={val.id}>
//                       <img src={val.image} alt="" />
//                       <h3>{val.title}</h3>
//                       <p className="price">${val.price}</p>
//                   </div> 
//                 )
//               })
//           }
//         </div>
//       </div>
//     </>
//   )
// }

// export default Searchs;