import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import data from "./TemplateData.json";
import StarRating from './StarRating';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './CartContext';
import "./Searchdetail.css";

const Searchdetail = () => {
    const { id } = useParams();
    const valueId = parseInt(id);
    const [searchItem, setSearchItem] = useState({});
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const item = data.find(item => item.id === valueId);
        setSearchItem(item);
    }, [valueId]);

    const handleAddToCart = () => {
        addToCart(searchItem);

    };

    return (
        <div>
             <div className="container">
            <div className="Searchd">

                {searchItem && (
                    <div key={searchItem.id}>
                        <div className="container">
                            <div className="product-content product-wrap clearfix product-deatil">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="product-image">
                                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                                <div className="carousel-indicators">
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                </div>
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <img src={searchItem.image} className="sweetimg" alt="Slide 1" />
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src={searchItem.b1} className="sweetimg" alt="Slide 2" />
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src={searchItem.background} className="sweetimg" alt="Slide 3" />
                                                    </div>
                                                </div>
                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                                        <h2 className="name">
                                            {searchItem.title}
                                            <small>Product by <a href="#">Sweet Stores</a></small>
                                            <p><StarRating totalStars={5} /></p>
                                            <a className="fs-5 px-3">(109) Votes <a href="#">109 customer reviews</a></a>
                                        </h2>
                                        <hr />
                                        <h3 className="price-container">
                                            ₹{searchItem.price}
                                            <small>*includes tax</small>
                                        </h3>
                                        <div className="certified">
                                            <ul>
                                                <li>
                                                    <a href="#">Delivery time<span>7 Working Days</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">Certified<span>Quality Assured</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6 col-lg-6">
                                                <button onClick={handleAddToCart} className="btn btn-success btn-lg">Add to cart</button>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-6">
                                                <div className="btn-group pull-right">
                                                    <button className="btn btn-white btn-default"><i className="fa fa-star"></i> Add to wishlist</button>
                                                    <button className="btn btn-white btn-default"><i className="fa fa-envelope" href="/Contact"></i> Contact Seller</button>
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
