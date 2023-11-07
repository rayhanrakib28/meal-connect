import React from 'react';
import FoodsCard from './../Shared/FoodsCard';

const FeaturedFoods = () => {
    return (
        <div className='my-10'>
            <div className='text-center mb-12'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl text-[#2e355a] mb-4 font-bold'>Featured Foods</h1>
                <h3 className='text-[#50577A] text-sm md:text-base lg:text-lg font-light'>Discover Available Surplus Delights</h3>
            </div>
                <FoodsCard></FoodsCard>
        </div>
    );
};

export default FeaturedFoods;