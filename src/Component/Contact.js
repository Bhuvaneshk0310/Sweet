import React from 'react'
import './Contact.css'
import * as image from "../Component/ImagesFolder/Image"
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <div class="f22 ">

<div class="container p-4">


  <div class="pb-5 pt-2">
  <div class="container">
    <div class="row gy-3 align-items-center">
      <div class="col-12 col-sm-6">
        <div class="footer-logo-wrapper text-center text-sm-start">
          <a href="/Home">
        <img className="fs1 mb-5" src={image.s} alt="s" width="50" height="50"/></a>
        <a class="navf-brand mt-3" href="/Home">Sweets</a>
           
          
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="social-media-wrapper">
          <ul class="m-0 list-unstyled d-flex justify-content-center justify-content-sm-end gap-2">
            <li>
              <a href="#!" class="btn btn-dark bsb-btn-circle bsb-btn-circle-sm link-opacity-75-hover link-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#!" class="btn btn-dark bsb-btn-circle bsb-btn-circle-sm link-opacity-75-hover link-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#!" class="btn btn-dark bsb-btn-circle bsb-btn-circle-sm link-opacity-75-hover link-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#!" class="btn btn-dark bsb-btn-circle bsb-btn-circle-sm link-opacity-75-hover link-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#!" class="btn btn-dark bsb-btn-circle  link-opacity-75-hover link-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reddit" viewBox="0 0 16 16">
                  <path d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z" />
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#!" class="btn btn-dark bsb-btn-circle  link-opacity-75-hover link-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  <section class="">
    <form action="">

      <div class="row d-flex justify-content-center">

        <div class="col-auto">
          <p class="pt-2">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>

        <div class="col-md-5 col-12">

          <div data-mdb-input-init class="form-outline mb-4">
            <input type="email" id="form5Example24" class="form-control" />
            <label class="form-label" for="form5Example24">Email address</label>
          </div>
        </div>

        <div class="col-auto">

          <button data-mdb-ripple-init type="submit" class="btn btn-outline-dark mb-4">
            Subscribe
          </button>
        </div>

      </div>
    </form>
  </section>

  <section class="mb-4">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
      repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum
      harum corrupti dicta, aliquam sequi voluptate quas.
    </p>
  </section>

  

    <div class="row">

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a class="text-body" href="#!">Link 1</a>
          </li>
          <li>
            <a class="text-body" href="#!">Link 2</a>
          </li>
          <li>
            <a class="text-body" href="#!">Link 3</a>
          </li>
          <li>
            <a class="text-body" href="#!">Link 4</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a class="text-body" href="#!">Link 1</a>
          </li>
          <li>
            <a class="text-body" href="#!">Link 2</a>
          </li>
          <li>
            <a class="text-body" href="#!">Link 3</a>
          </li>
          <li>
            <a class="text-body" href="#!">Link 4</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a class="text-body" href="#!">Link 1</a>
          </li>
          <li>
            <a class="text-body" href="#!">Link 2</a>
          </li>
          <li>
            <a class="text-body" href="#!">Link 3</a>
          </li>
          <li>
            <a class="text-body" href="#!">Link 4</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a class="text-body" href="#!">Link 1</a>
          </li>
          <li>
            <a class="text-body" href="#!">Link 2</a>
          </li>
          <li>
            <a class="text-body" href="#!">Link 3</a>
          </li>
          <li>
            <a class="text-body" href="#!">Link 4</a>
          </li>
        </ul>
      </div>

    </div>



</div>

</div>
<div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
  © 2024 Copyright:
  <a className="text-reset fw-bold" href="https://mdbootstrap.com/">www.Sweets.com</a>

  
</div>



    </div>
  )
}

export default Contact
