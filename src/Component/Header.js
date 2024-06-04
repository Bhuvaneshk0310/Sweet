import React, { useContext } from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import * as image from "../Component/ImagesFolder/Image"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './CartContext';


const Header = () => {
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
      <nav class="navbar navbar-dark navbar-expand-md fixed-top">
        <div class="container">
        <span><img src={image.s} alt="" width="30" height="24" class="d-inline-block align-text-top s1" /></span>
          <a class="navbar-brand" href="/Home">Sweets</a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarNav">
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <Link to="/Home">
                <li class="nav-item">
                  <a class="nav-link y1" >Home</a>
                </li></Link>
              <Link to="/Menu">
                <li class="nav-item">
                  <a class="nav-link y1" >Menu</a>
                </li></Link>
              <Link to="/Contact">
                <li class="nav-item">
                  <a class="nav-link y1" >Contact </a>
                </li></Link>
              <Link to="/Searchs">
                <li class="nav-item">
                  <a class="nav-link y1" >Search</a>
                </li>
              </Link>
              <Link to="/Cart">
                <li class="nav-item">
                  <div class="shopping">
                    <img src={image.cart} />
                    <span className=" count">{cartCount}</span>
                    <a class="nav-link shop1" >Cart</a>
                  </div>
                </li>
              </Link>
                      </ul>
          </div>
        </div>
      </nav>

   
 

    </div>
  )
}

export default Header;
