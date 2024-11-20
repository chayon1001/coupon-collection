import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../components/Home/Home";
import Brands from "../components/Brands/Brands";
import BrandDetails from "../components/BrandDetails/BrandDetails";
import BrandOnSale from "../components/BrandOnSale/BrandOnSale";
import DailyOffers from "../components/DailyOffers/DailyOffers";
import MyProfile from "../pages/MyProfile/MyProfile";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:'/brand/:id',
            element:<BrandDetails></BrandDetails>
        },
        
      ]

      
    },
    {
        path: "/brands",
        element:<Brands></Brands>
    },
    {
        path: "/my-profile",
        element: <MyProfile></MyProfile>
    },
    {
        path:'/dailyOffers',
        element: <DailyOffers></DailyOffers>
    }
  ]);