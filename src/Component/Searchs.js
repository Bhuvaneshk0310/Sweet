import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Searchs.css";
import data from "./TemplateData.json";
import * as image from "../Component/ImagesFolder/Image"



function Searchs() {
  const [searchTerm, setsearchTerm] = useState('');
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
    setsearchTerm(event.target.value);
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
          <img className="sea1" src={image.searchs} alt="search" />
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

