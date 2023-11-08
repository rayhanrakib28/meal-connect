import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import ManageFoodsTable from './ManageFoodsTable';

const ManageFoods = () => {
    const { user } = useAuth();
    const email = user?.email;
    const [manageFoods, setManageFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const axiosSecure = useAxiosSecure();
    const url = `api/v1/user/services?email=${email}`;
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                setManageFoods(res.data)
                setIsLoading(false)
        })
    }, [url, axiosSecure, email])
    return (
        <div>
            <Helmet><title>MealConnect | Manage Foods</title></Helmet>
            <div className='min-h-screen'>
                {
                    isLoading ?
                        (<div className='w-full flex justify-center items-center justify-items-center'><img className='w-80' src="https://i.ibb.co/80Bnt31/loading.gif" alt="" /></div>)
                        :
                        (<div className='container mx-auto mt-10 p-5 md:p-0'>
                            <ManageFoodsTable manageFoods={manageFoods}></ManageFoodsTable>
                        </div> )
                }
            </div>

        </div>
    );
};

export default ManageFoods;