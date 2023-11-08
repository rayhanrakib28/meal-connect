import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../utils/Layout';
import Error from '../pages/Error';
import Login from './../pages/Login';
import Register from './../pages/Register';
import ManageFoods from './../pages/ManageFoods';
import AddFood from './../pages/AddFood';
import AvailableFoods from './../pages/AvailableFoods';
import RequestedFoods from './../pages/RequestedFoods';
import Join from '../pages/Join';
import PrivateRoutes from './PrivateRoutes';
import FoodDetails from './../pages/FoodDetails/FoodDetails';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/join",
                element: <PrivateRoutes><Join></Join></PrivateRoutes>
            },
            {
                path: "/manage-foods",
                element: <PrivateRoutes><ManageFoods></ManageFoods></PrivateRoutes> 
            },
            {
                path: "/addfood",
                element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes> 
            },
            {
                path: "/available-foods",
                element: <AvailableFoods></AvailableFoods>
            },
            {
                path: "/food_details/:id",
                element: <PrivateRoutes><FoodDetails></FoodDetails></PrivateRoutes>
            },
            {
                path: "/requested-foods",
                element: <PrivateRoutes><RequestedFoods></RequestedFoods></PrivateRoutes> 
            }
        ]
    }
])

export default Routes;