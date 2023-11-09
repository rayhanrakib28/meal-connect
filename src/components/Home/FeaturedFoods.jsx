import React from 'react';
import FoodsCard from './../Shared/FoodsCard';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const FeaturedFoods = () => {
    const [featured, setFeatured] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const axiosSecure = useAxiosSecure();
    const url = `/api/v1/featured/services?sort=desc&status=1`;
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                setFeatured(res.data)
                setIsLoading(false)
            })
    }, [url,axiosSecure])
    return (
        <div className='my-10'>
            <div className='text-center mb-12'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl text-[#2e355a] mb-4 font-bold'>Featured Foods</h1>
                <h3 className='text-[#50577A] text-sm md:text-base lg:text-lg font-light'>Discover Available Surplus Delights</h3>
            </div>
            {
                isLoading ? (<div className='flex justify-center items-center justify-items-center'><img className='w-60' src="https://i.ibb.co/80Bnt31/loading.gif" alt="" /></div> )
                    :
                    (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                            {
                                featured?.map(food => <FoodsCard key={food._id} food={food}></FoodsCard>)
                            }
                        </div>)
                        
            }
            <div className='container mx-auto text-center py-10'>
                <NavLink to="/available-foods"><button className="btn bg-gradient-to-tl from-[#FF8080] to-[#FF6C22] hover:from-[#FF6C22] hover:to-[#FF8080] border border-transparent text-white  font-medium focus:outline-none focus:ring-2 focus:ring-[#FF8080] focus:ring-offset-2 focus:ring-offset-white py-3 px-6">Show All</button></NavLink>
            </div>
        </div>
    );
};

export default FeaturedFoods;