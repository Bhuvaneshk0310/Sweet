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
       
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
        <div class="container-fluid">

          <a class="navbar-brand" href="#">
            <img src={image.s} alt="" width="30" height="24" class="d-inline-block align-text-top s1" />
            <span class="navbar-brand" href="/Contact">Sweets</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav nav-item1  mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/Home">


                  <a class="nav-link active" aria-current="page" href="#"><span className="y1">Home </span></a>

                </Link> </li>
              <li class="nav-item">
                <Link to="/Menu">

                  <a class="nav-link active" aria-current="page" href="#"><span className="y1">Menu </span></a>

                </Link> </li>
              <li class="nav-item">
                <Link to="/Contact">

                  <a class="nav-link active" aria-current="page" href="#"><span className="y1">Contact </span></a>

                </Link> </li>
              <li class="nav-item">
                <Link to="/Searchs">
                  <a class="nav-link active" aria-current="page" href="#"> <span className="y1">Search </span></a>

                </Link> </li>
                

            </ul>
            <div id="cs1">
                <Link to="/Cart">

                  <div class="shopping">

                    <img src={image.cart} />
                    <span className=" count">{cartCount}</span>
                    <a className="shop1">Cart</a>
                  </div>

                </Link>
              </div>

          </div>
        </div>
      </nav>
 


    </div>
  )
}

export default Header;
