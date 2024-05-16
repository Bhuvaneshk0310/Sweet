import React from 'react'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
const Contact = () => {
  return (
    <div>
      
      <div class="container-fluid contact text-center  ">
       
        <div class="row pt-5 pb-5">
          <div class="col-3  ">
            <h2 className='mb-5'>Get to Know Us</h2>
            <p className='mb-4 fs-4'>About Us</p>
            <p className='mb-4 fs-4'>Careers</p>
            <p className='mb-4 fs-4'>Press Releases</p>
            <p className='mb-4 fs-4'>Sweets Store</p>
          </div>
          <div class="col-3  ">
            <h2 className='mb-5'>Connect with Us</h2>
            <p className='mb-4 fs-4'>Facebook</p>
            <p className='mb-4 fs-4'>Twitter</p>
            <p className='mb-4 fs-4'>Instagram</p>
            <p className='mb-4 fs-4'>Whatapp</p>
            <p className='mb-4 fs-4'>Google</p>
            </div>
          <div class="col-3  ">
            <h2 className='mb-5'>Make Money with Us</h2>
            <p className='mb-4 fs-4'>Sell on Sweets</p>
            <p className='mb-4 fs-4'>Protect and Build Your Brand</p>
            <p className='mb-4 fs-4'>Sweets Global Selling</p>
            <p className='mb-4 fs-4'>Become an Affiliate</p>
            <p className='mb-4 fs-4'>Fulfilment by Sweets</p>
            <p className='mb-4 fs-4'>Advertise Your Products</p>
            <p className='mb-4 fs-4'>Sweets Pay on Merchants</p>
          </div>
          <div class="col-3  ">
            <h2 className='mb-5'>Let Us Help You</h2>
            <p className='mb-4 fs-4'>COVID-19 and Sweets</p>
            <p className='mb-4 fs-4'>Your Account</p>
            <p className='mb-4 fs-4'>Returns Centre</p>
            <p className='mb-4 fs-4'>100% Purchase Protection</p>
            <p className='mb-4 fs-4'>Help</p>
          </div>
        </div>
      </div>
     <Footer/>

    </div>
  )
}

export default Contact
