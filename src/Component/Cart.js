import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import * as image from "./ImagesFolder/Image";
import '@mdi/font/css/materialdesignicons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Card } from 'react-bootstrap';
import { CartContext } from './CartContext';
import StarRating from './StarRating';

const Cart = () => {
  const { cart, updateCartItemQuantity, removeCartItem } = useContext(CartContext);
  const [quantities, setQuantities] = useState(cart.map(() => 1));

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
    updateCartItemQuantity(index, value); 
  };

  const handleRemoveItem = (index) => {
    removeCartItem(index); 
    setQuantities(quantities.filter((_, i) => i !== index)); 
  };

  const totalPrice = (price, quantity) => price * quantity;

  const handleCheckout = () => {
    const cartSummary = cart.map((item, index) => (
      `Product: ${item.title}\nPrice: ₹${item.price}\nQuantity: ${quantities[index]}\nTotal: ₹${totalPrice(item.price, quantities[index])}\n`
    )).join('\n');

    alert(`Your Checkout Items:\n\n${cartSummary} Thank you for your purchase`);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
        <div className="container-fluid">
          <img className="s1" src={image.s} alt="s" />
          <a className="navbar-brand" href="/Home">Sweets</a>
          <span className="navbar-text brand text-dark fw-bold">SECURE CHECKOUT</span>
          <div className="collapse navbar-collapse" id="Nav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Help" className="nav-link h1">Help</Link>
              </li>
              <li className="nav-item">
                <Link to="/Signin" className="nav-link h1">Sign In</Link>
              </li>
              <li className="nav-item">
                <Link to="/Login" className="nav-link h1">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className='card-body'>
          <div className="row">
            <div className="col-xl-8 ca1">
              {cart.map((item, index) => (
                <Card key={index} className="border shadow-none mt-4">
                  <Card.Body>
                    <div className="d-flex align-items-start border-bottom pb-3">
                      <div className="me-4">
                        <img src={item.image} alt={item.title} className="avatar-lg rounded" />
                      </div>
                      <div className="flex-grow-1 align-self-center overflow-hidden">
                        <div>
                          <h4 className="text-truncate font-size-18 ">
                            <a href="#" className="text-dark fw-bold cardtitle">{item.title}</a>
                          </h4>
                        
                        <h4><StarRating totalStars={5} rating={item.rating} /></h4>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <ul className="list-inline mb-0 font-size-16">
                          <li className="list-inline-item">
                            <a href="#" className="text-muted px-1" onClick={() => handleRemoveItem(index)}>
                              <i className="mdi mdi-trash-can-outline"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="text-muted px-1">
                              <i className="mdi mdi-heart-outline"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mt-3">
                            <p className="text-muted mb-2 fw-bold">Price</p>
                            <h5 className="mb-0 mt-2 fw-bold">
                              <span className="text-muted me-2">
                                <span className="font-size-16 fw-normal">₹{item.price}</span>
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="mt-3">
                            <p className="text-muted mb-2 fw-bold">Quantity</p>
                            <div className="d-inline-flex">
                              <div className='inp'>
                                <input
                                  type="number"
                                  value={quantities[index]}
                                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 1)}
                                  min="1"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mt-3">
                            <p className="text-muted mb-2 fw-bold">Total: </p>
                            <h5 id="total-price">₹{totalPrice(item.price, quantities[index])}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
              
              <div className="row my-4">
                <div className="col-sm-6">
                  <Link to="/Searchs" className="btn btn-link text-muted">
                    <i className="mdi mdi-arrow-left me-1"></i> Continue Shopping
                  </Link>
                </div> 
                <div className="col-sm-6">
                  <div className="text-sm-end mt-2 mt-sm-0">
                    <button onClick={handleCheckout} className="btn btn-success">
                      <i className="mdi mdi-cart-outline me-1"></i> Checkout
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
