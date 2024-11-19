import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../components/Home/Home";
import Brands from "../components/Brands/Brands";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        
      ]

      
    },
    {
        path: "/brands",
        element:<Brands></Brands>
    }
  ]);