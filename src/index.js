import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './Component/Header';
import Home from './Component/Home';
import Error from './Component/Error';
import Cart from './Component/Cart';
import Contact from './Component/Contact';
import Search from './Component/Search';
import Signin from './Component/Signin';
import Help from './Component/Help';





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
        path: "/Search",
        element: <Search />,
      },
     
    
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
