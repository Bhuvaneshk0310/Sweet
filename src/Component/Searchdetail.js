import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "./TemplateData.json";
import "./Searchdetail.css";
import StarRating from './StarRating';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


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


                        <div class="container">
                            <div class="product-content product-wrap clearfix product-deatil">
                                <div class="row">
                                    <div class="col-md-5 col-sm-12 col-xs-12">
                                        <div class="product-image">
                                            <div id="myCarousel-2" class="carousel slide">
                                                <ol class="carousel-indicators">
                                                    <li data-target="#myCarousel-2" data-slide-to="0" class=""></li>
                                                    <li data-target="#myCarousel-2" data-slide-to="1" class="active"></li>
                                                    <li data-target="#myCarousel-2" data-slide-to="2" class=""></li>
                                                </ol>
                                                <div class="carousel-inner">

                                                    <div class="item active">
                                                        <img className="sweetimg " src={searchItem.background} alt={searchItem.title} />  </div>

                                                    {/* <div class="item">
                                                        <img className="sweetimg " src={searchItem.background} alt={searchItem.title} />    </div>

                                                    <div class="item">
                                                        <img className="sweetimg " src={searchItem.background} alt={searchItem.title} /> </div>
                                               */} </div>
                                                <a class="left carousel-control" href="#myCarousel-2" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a>
                                                <a class="right carousel-control" href="#myCarousel-2" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </a>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                                        <h2 class="name">
                                           <h1 className=''> {searchItem.title}</h1>
                                            <small>Product by <a href="javascript:void(0);">Sweet Stores</a></small>

                                            <a><StarRating totalStars={5} /></a>
                                            <a class=" fs-5 px-3">(109) Votes <a href="javascript:void(0);">109 customer reviews</a></a>
                                        </h2>
                                        <hr />
                                        <h3 class="price-container">
                                            ₹{searchItem.price}
                                            <small>*includes tax</small>
                                        </h3>
                                        <div class="certified">
                                            <ul>
                                                <li>
                                                    <a href="javascript:void(0);">Delivery time<span>7 Working Days</span></a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Certified<span>Quality Assured</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-12 col-md-6 col-lg-6">
                                                <a href="javascript:void(0);" class="btn btn-success btn-lg">Add to cart ($129.54)</a>
                                            </div>
                                            <div class="col-sm-12 col-md-6 col-lg-6">
                                                <div class="btn-group pull-right">
                                                    <button class="btn btn-white btn-default"><i class="fa fa-star"></i> Add to wishlist</button>
                                                    <button class="btn btn-white btn-default"><i class="fa fa-envelope"></i> Contact Seller</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>











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
