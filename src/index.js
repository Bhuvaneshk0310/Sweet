import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './Component/Header';
import Home from './Component/Home';
import Error from './Component/Error';
import Cart from './Component/Cart';
import Contact from './Component/Contact';
import Searchs from './Component/Searchs';
import Signin from './Component/Signin';
import Help from './Component/Help';
import Searchdetail from './Component/Searchdetail';
import Footer from './Component/Footer';
import Menu from './Component/Menu';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [
      {
        path: "/Header",
        element: <Header />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Menu",
        element: <Menu />,
      },
      {
        path: "/Searchs",
        element: <Searchs />,
      },
      {
        path: "/Searchdetail/:id",
        element: <Searchdetail />,
      },
     {
      path:"/Footer",
      element:<Footer/>
     }
    
    ],


  },



  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/Signin",
    element: <Signin />,
  },
  {
    path: "/Help",
    element: <Help />,
  },
  

]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
