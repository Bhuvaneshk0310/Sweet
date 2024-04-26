import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import * as image from "../Component/ImagesFolder/Image"
import 'bootstrap/dist/css/bootstrap.min.css';



const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
        <div class="container-fluid">
        <img className="s1" src={image.s} alt="s" />
          <a class="navbar-brand" href="/Home">Sweets</a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">



              <div id="Nav">

                <Link to="/Home">
                  <img className="nav1" src={image.home} alt="home" />
                  <a className="y1 " >Home </a>
                </Link>

                <Link to="/Menu">
                  <img className="nav1" src={image.menu} alt="menu" />
                  <a className="y1">Menu </a>
                </Link>
                <Link to="/Contact">
                  <img className="nav1" src={image.contact} alt="contact" />
                  <a className="y1">Contact </a>
                </Link>
                <Link to="/"></Link>

                <Link to="/Searchs">
                  <img className="nav1" src={image.search} alt="search" />
                  <a className="y1">Search </a>
                </Link>


              </div>

              <div id="cs1">
                <Link to="/Cart">

                  <div class="shopping">

                    <img src={image.cart}/>
                    <span class="quantity">0</span>
                    <a className="shop1">Cart</a>
                  </div>

                </Link>
              </div>

            </ul>





          </div>
        </div>
      </nav>



      
    </div>
  )
}

export default Header;


/**
import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import * as images from "../Images/Images";

const Header = () => {
  const [foodCategories, setFoodCategories] = useState([]);

  useEffect(() => {
    foodItemCategories();
  }, []);

  const foodItemCategories = async () => {
    const res = await fetch(
      "www.themealdb.com/api/json/v1/1/categories.php"
    );
    const jsonData = await res.json();
    setFoodCategories(jsonData.data);
    console.log(foodCategories);
  };

  return (
    <div className="header">
      <div className="navBar">
        <Link to="Home">
          <img className="logoImg" src={images.logo} alt="Logo" />
        </Link>
        <ul>
          <div>
            <Link to="Home">
              <img src={images.home} alt="Home" />
              <li>Home</li>
            </Link>
          </div>
          <div>
            <Link to="Search">
              <img src={images.search} alt="Search" />
              <li>Search</li>
            </Link>
          </div>
          <div>
            <Link to="SignIn">
              <img src={images.signIn} alt="SignIn" />
              <li>Sign In</li>
            </Link>
          </div>
          <div>
            <Link to="About">
              <img src={images.about} alt="About" />
              <li>About</li>
            </Link>
          </div>
          <div>
            <Link to="Cart">
              <img src={images.cart} alt="Cart" />
              <li>Cart</li>
            </Link>
          </div>
        </ul>
      </div>
      <div className="foodItemCategories">
        {foodCategories.map((meal) => (
          <div>
            <img src={meal.strMealThumb} alt="food" />
            <p>{meal.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;



        <div class="card">
          <h1>Cart</h1>
          <ul class="listCard">
          </ul>
          <div class="checkOut">
              <div class="total">0</div>
              <div class="closeShopping">Close</div>
          </div>
      </div>
*/