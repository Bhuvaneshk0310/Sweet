import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
/*import * as img from "../Images/Image";*/



const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
        <div class="container-fluid">
    <a class="navbar-brand" href="/Home">Sweet</a>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
   <ul class="navbar-nav me-auto mb-2 mb-lg-0">



<div  id="Nav">

         <Link to ="/Home">
         <a className="h1">Home </a> 
          </Link>
         
         <Link to ="/about"> <a className="h1">About </a> </Link>
         <Link to="/Contact"> <a className="h1">Contact </a> </Link>
         <Link to="/"></Link>

         <Link to ="/Search">
         <a className="h1">Search </a> 
          {/*<img src={img.search} alt="Search" />*/}
          </Link>
 

   </div>
            
  <div id="cs1">
   <Link to="/Cart">

   <div class="shopping">
    
          <img src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"/>
          <span class="quantity">0</span>
          <span className="shop1">Cart</span>
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