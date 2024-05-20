import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import * as image from "../Component/ImagesFolder/Image";
import '@mdi/font/css/materialdesignicons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional: for Bootstrap's JavaScript components
import { Card } from 'react-bootstrap';
import { CartContext } from './CartContext';
import StarRating from './StarRating';

const Cart = () => {
  const { cart, updateCartItemQuantity, removeCartItem } = useContext(CartContext);
  const [quantities, setQuantities] = useState(cart.map(item => item.quantity));

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
    updateCartItemQuantity(index, value); // Update the context with the new quantity
  };

  const handleRemoveItem = (index) => {
    removeCartItem(index); // Remove item from context
    setQuantities(quantities.filter((_, i) => i !== index)); // Update local state
  };

  const totalPrice = (price, quantity) => price * quantity;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light" id="navbar">
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
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className='card-body mt-5'>
          <div className="row">
            <div className="col-xl-8">
              {cart.map((item, index) => (
                <Card key={index} className="border shadow-none mt-4">
                  <Card.Body>
                    <div className="d-flex align-items-start border-bottom pb-3">
                      <div className="me-4">
                        <img src={item.image} alt={item.title} className="avatar-lg rounded" />
                      </div>
                      <div className="flex-grow-1 align-self-center overflow-hidden">
                        <div>
                          <h5 className="text-truncate font-size-18">
                            <a href="#" className="text-dark fw-bold">{item.title}</a>
                          </h5>
                          <p><StarRating totalStars={item.rating} /></p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;



// import { Link } from 'react-router-dom';
// import './Cart.css';
// import * as image from "../Component/ImagesFolder/Image";
// import '@mdi/font/css/materialdesignicons.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional: for Bootstrap's JavaScript components
// import { Card } from 'react-bootstrap';
// import { CartContext } from './CartContext';
// import StarRating from './StarRating';

// const Cart = () => {
//   const { cart, updateCartItemQuantity, removeCartItem } = useContext(CartContext);
//   const [quantities, setQuantities] = useState(cart.map(() => 1));

//   const handleQuantityChange = (index, value) => {
//     const newQuantities = [...quantities];
//     newQuantities[index] = value;
//     setQuantities(newQuantities);
//     updateCartItemQuantity(index, value); // Update the context with the new quantity
//   };

//   const handleRemoveItem = (index) => {
//     removeCartItem(index); // Remove item from context
//     setQuantities(quantities.filter((_, i) => i !== index)); // Update local state
//   };

//   const totalPrice = (price, quantity) => price * quantity;

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-light" id="navbar">
//         <div className="container-fluid">
//           <img className="s1" src={image.s} alt="s" />
//           <a className="navbar-brand" href="/Home">Sweets</a>
//           <span className="navbar-text brand text-dark fw-bold">SECURE CHECKOUT</span>
//           <div className="collapse navbar-collapse" id="Nav">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to="/Help" className="nav-link h1">Help</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/Signin" className="nav-link h1">Sign In</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="container">
//         <div className='card-body mt-5'>
//           <div className="row">
//             <div className="col-xl-8">
//               {cart.map((item, index) => (
//                 <Card key={index} className="border shadow-none mt-4">
//                   <Card.Body>
//                     <div className="d-flex align-items-start border-bottom pb-3">
//                       <div className="me-4">
//                         <img src={item.image} alt={item.title} className="avatar-lg rounded" />
//                       </div>
//                       <div className="flex-grow-1 align-self-center overflow-hidden">
//                         <div>
//                           <h5 className="text-truncate font-size-18">
//                             <a href="#" className="text-dark fw-bold">{item.title}</a>
//                           </h5>
//                           <p><StarRating totalStars={item.rating} /></p>
//                         </div>
//                       </div>
//                       <div className="flex-shrink-0 ms-2">
//                         <ul className="list-inline mb-0 font-size-16">
//                           <li className="list-inline-item">
//                             <a href="#" className="text-muted px-1" onClick={() => handleRemoveItem(index)}>
//                               <i className="mdi mdi-trash-can-outline"></i>
//                             </a>
//                           </li>
//                           <li className="list-inline-item">
//                             <a href="#" className="text-muted px-1">
//                               <i className="mdi mdi-heart-outline"></i>
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <div>
//                       <div className="row">
//                         <div className="col-md-4">
//                           <div className="mt-3">
//                             <p className="text-muted mb-2 fw-bold">Price</p>
//                             <h5 className="mb-0 mt-2 fw-bold">
//                               <span className="text-muted me-2">
//                                 <span className="font-size-16 fw-normal">₹{item.price}</span>
//                               </span>
//                             </h5>
//                           </div>
//                         </div>
//                         <div className="col-md-5">
//                           <div className="mt-3">
//                             <p className="text-muted mb-2 fw-bold">Quantity</p>
//                             <div className="d-inline-flex">
//                               <div className='inp'>
//                                 <input
//                                   type="number"
//                                   value={quantities[index]}
//                                   onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 1)}
//                                   min="1"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-md-3">
//                           <div className="mt-3">
//                             <p className="text-muted mb-2 fw-bold">Total: </p>
//                             <h5 id="total-price">₹{totalPrice(item.price, quantities[index])}</h5>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;



// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Cart.css';
// import * as image from "../Component/ImagesFolder/Image";
// import '@mdi/font/css/materialdesignicons.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional: for Bootstrap's JavaScript components
// import { Card } from 'react-bootstrap';
// import { CartContext } from './CartContext';
// import StarRating from './StarRating';

// const Cart = () => {
  
//   const { cart, updateCartItemQuantity } = useContext(CartContext);
//   const [quantities, setQuantities] = useState(cart.map(() => 1));

//   const handleQuantityChange = (index, value) => {
//     const newQuantities = [...quantities];
//     newQuantities[index] = value;
//     setQuantities(newQuantities);
//   };

//   // const FavoriteButton = ({ isFavorite, id }) => {
//   //   const handleClick = () => {
//   //     handleFavorite(id); // Handle favorite logic
//   //   };

//   //   return (
//   //     <div>
//   //       <button className='heart' onClick={handleClick}>
//   //         {isFavorite ? '❤️' : '🤍'}
//   //       </button>
//   //     </div>
//   //   );
//   // };


//   const totalPrice = (price, quantity) => price * quantity;

//   return (
//     <div>

//       <nav className="navbar navbar-expand-lg navbar-dark bg-light" id="navbar">
//         <div className="container-fluid">
//           <img className="s1" src={image.s} alt="s" />
//           <a className="navbar-brand" href="/Home">Sweets</a>
//           <span className="navbar-text brand text-dark">SECURE CHECKOUT</span>
//           <div className="collapse navbar-collapse" id="Nav">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to="/Help" className="nav-link h1">Help</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/Signin" className="nav-link h1">Sign In</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div class="container">
   
            
     
//             <div className='card-body mt-5' >
//             <div class="row">
//         <div class="col-xl-8">
//         {cart.map((item, index) => (
          
//           <Card key={index} className="border shadow-none mt-4 ">
//             <Card.Body>
//               <div class="d-flex align-items-start border-bottom pb-3">
//                 <div class="me-4">
//                   <img src={item.image} alt={item.title} class="avatar-lg rounded" />
//                 </div>
//                 <div class="flex-grow-1 align-self-center overflow-hidden">
//                   <div>
//                     <h5 class="text-truncate font-size-18"><a href="#" class="text-dark">{item.title}</a></h5>
//                     <p><StarRating totalStars={item.rating} /></p>
                    
//                   </div>
//                 </div>
//                 <div class="flex-shrink-0 ms-2">
//                   <ul class="list-inline mb-0 font-size-16">
//                     <li class="list-inline-item">
//                       <a href="#" class="text-muted px-1">
//                         <i class="mdi mdi-trash-can-outline"></i>
//                       </a>
//                     </li>
//                     <li class="list-inline-item">
//                       <a href="#" class="text-muted px-1">
//                         <i class="mdi mdi-heart-outline"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div>
//                 <div class="row">
//                   <div class="col-md-4">
//                     <div class="mt-3">
//                       <p class="text-muted mb-2">Price</p>
//                       <h5 class="mb-0 mt-2">
//                         <span class="text-muted me-2">
//                            <del class="font-size-17 fw-normal">{item.originalPrice}</del>
//                           <span class="font-size-18 fw-bold"> {item.price} </span>
//                         </span>
                       
//                       </h5>
//                     </div>
//                   </div>
//                   <div class="col-md-5">
//                     <div class="mt-3">
//                       <p class="text-muted mb-2">Quantity</p>
//                       <div class="d-inline-flex">
//                        <div className='inp'>
//                           <input
                          
//                             type="number"
//                             value={quantities[index]}
//                             onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 1)}
//                             min="1"
//                           /> 
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="col-md-3">
//                     <div class="mt-3">
//                       <p class="text-muted mb-2">Total: </p>
//                       <h5 id="total-price">₹{totalPrice(item.price, quantities[index])}</h5>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//       </div>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;

