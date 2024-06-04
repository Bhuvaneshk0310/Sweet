import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Correct extension
import * as image from "../Component/ImagesFolder/Image";
import "./Menu.css";
import Footer from './Footer';

const Menu = () => {
  return (
    <div>
      <div id='menu'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image.b1} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={image.b2} className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src={image.b3} className="d-block w-100" alt="Slide 3" />
            </div>
            <div className="carousel-item">
              <img src={image.b4} className="d-block w-100" alt="Slide 4" />
            </div>
            <div className="carousel-item">
              <img src={image.b5} className="d-block w-100" alt="Slide 5" />
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
      <Footer />
    </div>
  );
};

export default Menu;
