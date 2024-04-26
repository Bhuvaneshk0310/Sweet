import React from 'react'
import './Cart.css';
import * as image from "../Component/ImagesFolder/Image"
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div>
      <div id="root" >
       <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
        <div class="container-fluid">
        <img className="s1" src={image.s} alt="s" />
    <a class="navbar-brand" href="/Home">Sweets</a>
   <a className='brand'>SECURE CHECKOUT</a>
    
        
   



<div  id="Nav">

       
<Link to="/Help"><a className="h1">Help </a> </Link>
<Link to="/Signin"><a className="h1">Sign In </a> </Link>
         
  {/*        <Link to="/"></Link>
         <Link to ="/Search">
         <a className="h1">Search </a> 
        <img src={img.search} alt="Search" />
          </Link>
          */}
 

   </div>   
        
   
  </div>
</nav>
<div id='c1'>

      <p>This is a cart page</p>

      </div>
    </div>
    </div>
  )
}

export default Cart
