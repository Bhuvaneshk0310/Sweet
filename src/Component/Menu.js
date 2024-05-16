import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as image from "../Component/ImagesFolder/Image"
import Footer from './Footer';
const Menu = () => {
  return (
    <div>
         <div class="col-md-5 col-sm-12 col-xs-12">
        <div class="product-image">
            <div id="myCarousel-2" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel-2" data-slide-to="0"></li>
                    <li data-target="#myCarousel-2" data-slide-to="1" class="active"></li>
                    <li data-target="#myCarousel-2" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="sweetimg" src={image.b1} alt="{searchItem.title}"/>
                    </div>
                    <div class="carousel-item">
                        <img class="sweetimg" src={image.home} alt="{searchItem.title}"/>
                    </div>
                    <div class="carousel-item">
                        <img class="sweetimg" src={image.home} alt="{searchItem.title}"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#myCarousel-2" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#myCarousel-2" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdncom/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      <Footer/>
    </div>
  )
}

export default Menu
