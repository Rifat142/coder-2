import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Roots from "./Roots/Roots";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";


import AuthProvider from "./Authprovider/Authprovider";
import PrivateRoutes from "./Roots/PrivateRoutes";
import ErrorPage from "./pages/ErrorPage";
import ContestDetails from "./pages/ContestDetails";
import AllProducts from "./pages/All-products/AllProducts";
import OrderPage from "./pages/OrderPage";

import Cart from "./pages/Mycart/Cart";
import AddedItem from "./pages/AddedItem/AddedItem";
import AddItem from "./pages/AddedItem/AddItem";
import UpdateProduct from "./pages/UpdateProduct";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserData from "./pages/user/UserData";
import Register2 from "./pages/Registerpage/Register2";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/about-us",
        element: <PrivateRoutes><AboutUs></AboutUs></PrivateRoutes>,
      },
      
     
      {
        path: "/contest-details/:id",
        element: <PrivateRoutes> <ContestDetails></ContestDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://12-server-psi.vercel.app/contests/${params.id}`)
       
      },
      {
        path:'/all-products',
        element: <AllProducts></AllProducts>,
        loader:()=>fetch(`https://12-server-psi.vercel.app/contests`)
        
      },
      {
        path:'/order-page/:id',
        element:<PrivateRoutes><OrderPage></OrderPage></PrivateRoutes>,
        loader: ({params}) => fetch(`https://12-server-psi.vercel.app/contests/${params.id}`)
      },
      {
        path : '/cart',
        element:<PrivateRoutes><Cart></Cart></PrivateRoutes>,
      },
      {
        path:'/added-items',
        element:<PrivateRoutes><AddedItem></AddedItem></PrivateRoutes>
      },
      {
        path:'/add-item',
        element:<PrivateRoutes><AddItem></AddItem></PrivateRoutes>
      },
      {
        path:'/update/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`https://12-server-psi.vercel.app/codntest/${params.id}`)
      },

      {path:'/reg',
        element:<Register2></Register2>

      },




      // dashboard section here 

      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/users',
        element:<UserData></UserData>
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
