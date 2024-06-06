import React, { useContext } from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import * as image from "../Component/ImagesFolder/Image";
import { CartContext } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-md fixed-top bg-dark">
        <div className="container">
          <Link to="/Home" className="navbar-brand">
            <img src={image.s} alt="Logo" width="30" height="24" className="d-inline-block align-text-top s1" />
            Sweets
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/Home" className="nav-link y1">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Menu" className="nav-link y1">Menu</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link y1">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/Searchs" className="nav-link y1">Search</Link>
              </li>
              <li className="nav-item">
                <Link to="/Cart" className="nav-link">
                  <div className="shopping d-flex align-items-center">
                    <img src={image.cart} alt="Cart" className="cart-icon" />
                    <span className="count badge badge-pill badge-light">{cartCount}</span>
                    <a className="shop1 ml-2">Cart</a>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;



// import React, { useContext } from "react";
// import './Header.css';
// import { Link } from 'react-router-dom';
// import * as image from "../Component/ImagesFolder/Image";
// import { CartContext } from './CartContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap JS bundle
// import 'font-awesome/css/font-awesome.min.css';

// const Header = () => {
//   const { cart } = useContext(CartContext);
//   const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <div>
//       <nav className="navbar navbar-dark navbar-expand-md fixed-top">
//         <div className="container">
//           <span>
//             <img src={image.s} alt="" width="30" height="24" className="d-inline-block align-text-top s1" />
//           </span>
//           <a className="navbar-brand" href="/Home">Sweets</a>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to="/Home" className="nav-link y1">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/Menu" className="nav-link y1">Menu</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/Contact" className="nav-link y1">Contact</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/Searchs" className="nav-link y1">Search</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/Cart" className="nav-link">
//                   <div className="shopping">
//                     <img src={image.cart} alt="Cart" />
//                     <span className="count">{cartCount}</span>
//                     <a className="shop1">Cart</a>
//                   </div>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
      
//     </div>
//   );
// };

// export default Header;
