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
import ManageFood from './../pages/ManageFood/ManageFood';
import UpdateFood from './../pages/ManageFood/UpdateFood';

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
                path: "/manage-foods/:id",
                element: <PrivateRoutes><ManageFood></ManageFood></PrivateRoutes>
            },
            {
                path: "/addfood",
                element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>
            },
            {
                path: "/manage-foods/update/:id",
                element: <PrivateRoutes><UpdateFood></UpdateFood></PrivateRoutes>
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