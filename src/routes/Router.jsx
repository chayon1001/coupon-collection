import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../components/Home/Home";
import Brands from "../components/Brands/Brands";
import BrandDetails from "../components/BrandDetails/BrandDetails";
import BrandOnSale from "../components/BrandOnSale/BrandOnSale";
import DailyOffers from "../components/DailyOffers/DailyOffers";
import MyProfile from "../pages/MyProfile/MyProfile";
import BlogLatest from "../components/BlogLatest/BlogLatest";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorElement from "../pages/ErrorElement/ErrorElement";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('./fake_data.json')
            },
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
            {
                path: "/brand/:id",
                element: (<PrivateRoute>
                             <BrandDetails></BrandDetails>
                </PrivateRoute>),
                loader: async () => {
                    const response = await fetch("./fake_data.json");
                    return response.json();
                },
            },
            {
                path: "/brands",
                element: <Brands></Brands>,
                loader: () => fetch('./fake_data.json')
            },
            {
                path: "/my-profile",
                element: <MyProfile></MyProfile>
            },
            {
                path: '/dailyOffers',
                element: <DailyOffers></DailyOffers>
            },
            {
                path: "/blog",
                element: <BlogLatest></BlogLatest>
            }

        ]


    }

]);