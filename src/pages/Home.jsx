import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import Banner from '../components/Home/Banner';
import FeaturedFoods from './../components/Home/FeaturedFoods';
import About from './../components/Home/About';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MealConnect | Home</title>
            </Helmet>
            <div className='container mx-auto'>
                <Banner></Banner>
            </div>
            <div className='container mx-auto'>
                <FeaturedFoods></FeaturedFoods>
            </div>
            <ScrollToTop className='flex justify-center items-center' smooth />
            <div className='bg-[#FF6C22] min-h-screen my-16'>
                <About></About>
            </div>

        </div>
    );
};

export default Home;