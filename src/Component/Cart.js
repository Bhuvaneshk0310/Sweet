import React, { useEffect, useState } from 'react';
import './Cart.css';
import * as image from "../Component/ImagesFolder/Image";
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { MdDelete, MdFavoriteBorder } from 'react-icons/md';
import { BsStarFill } from 'react-icons/bs';
import data from "./TemplateData.json";
import StarRating from './StarRating';

function Cart() {
  const { id } = useParams();
  const valueId = parseInt(id);
  const [CartItem, setCartItem] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const item = data.find(item => item.id === valueId);
      setCartItem(item);
    };
    fetchData();
  }, [valueId]);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const price = CartItem.price || 0;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark " id="navbar">
        <div className="container-fluid">
          <img className="s1" src={image.s} alt="s" />
          <a className="navbar-brand" href="/Home">Sweets</a>
          <span className='navbar-text brand'>SECURE CHECKOUT</span>
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

      <div id="c1">
        <p>This is a cart page</p>
        {CartItem && (
          <Card className="border shadow-none">
            <Card.Body>
              <div className="d-flex align-items-start border-bottom pb-3">
                <div className="me-4">
                  <Image src={CartItem.image} alt="" className="avatar-lg rounded" />
                </div>
                <div className="flex-grow-1 align-self-center overflow-hidden">
                  <div>
                    <h5 className="text-truncate font-size-18">
                      <a href="#" className="text-dark">{CartItem.title}</a>
                    </h5>
                    <p className="text-muted mb-0">
                      <StarRating totalStars={5} />
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 ms-2">
                  <ul className="list-inline mb-0 font-size-16">
                    <li className="list-inline-item">
                      <a href="#" className="text-muted px-1">
                        <MdDelete />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="text-muted px-1">
                        <MdFavoriteBorder />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <Row>
                  <Col md={4}>
                    <div className="mt-3">
                      <p className="text-muted mb-2">Price</p>
                      <h5 className="mb-0 mt-2">
                        <span className="text-muted me-2">
                          <del className="font-size-16 fw-normal">${CartItem.originalPrice}</del>
                        </span>
                        ${price}
                      </h5>
                    </div>
                  </Col>
                  <Col md={5}>
                    <div className="mt-3">
                      <p className="text-muted mb-2">Quantity</p>
                      <div className="d-inline-flex">
                        <select className="form-select form-select-sm w-xl" value={quantity} onChange={handleQuantityChange}>
                          {[...Array(8).keys()].map(num => (
                            <option key={num + 1} value={num + 1}>{num + 1}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mt-3">
                      <p className="text-muted mb-2">Total</p>
                      <h5>${price * quantity}</h5>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
}

export default Cart;

{/* 

// <div id='c1'>

//           <p>This is a cart page</p>
          

 
//     <Card className="border shadow-none">
//       <Card.Body>
//         <div className="d-flex align-items-start border-bottom pb-3">
//           <div className="me-4">
//             <Image src="https://www.bootdey.com/image/380x380/FF8C00/000000" alt="" className="avatar-lg rounded" />
//           </div>
//           <div className="flex-grow-1 align-self-center overflow-hidden">
//             <div>
//               <h5 className="text-truncate font-size-18">
//                 <a href="#" className="text-dark">Black Colour Smartphone</a>
//               </h5>
//               <p className="text-muted mb-0">
//                 <BsStarFill className="text-warning" />
//                 <BsStarFill className="text-warning" />
//                 <BsStarFill className="text-warning" />
//               </p>
//               <p className="mb-0 mt-1">Color : <span className="fw-medium">Blue</span></p>
//             </div>
//           </div>
//           <div className="flex-shrink-0 ms-2">
//             <ul className="list-inline mb-0 font-size-16">
//               <li className="list-inline-item">
//                 <a href="#" className="text-muted px-1">
//                   <MdDelete />
//                 </a>
//               </li>
//               <li className="list-inline-item">
//                 <a href="#" className="text-muted px-1">
//                   <MdFavoriteBorder />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div>
//           <Row>
//             <Col md={4}>
//               <div className="mt-3">
//                 <p className="text-muted mb-2">Price</p>
//                 <h5 className="mb-0 mt-2">
//                   <span className="text-muted me-2">
//                     <del className="font-size-16 fw-normal">$750</del>
//                   </span>
//                   $950
//                 </h5>
//               </div>
//             </Col>
//             <Col md={5}>
//               <div className="mt-3">
//                 <p className="text-muted mb-2">Quantity</p>
//                 <div className="d-inline-flex">
//                   <select className="form-select form-select-sm w-xl" value={quantity} onChange={handleQuantityChange}>
//                     {[...Array(8).keys()].map(num => (
//                       <option key={num + 1} value={num + 1}>{num + 1}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </Col>
//             <Col md={3}>
//               <div className="mt-3">
//                 <p className="text-muted mb-2">Total</p>
//                 <h5>${price * quantity}</h5>
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </Card.Body>
//     </Card>
  

//         </div>
//       </div> */}
   