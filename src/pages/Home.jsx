import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import Banner from '../components/Home/Banner';
import FeaturedFoods from './../components/Home/FeaturedFoods';
import About from './../components/Home/About';
import { Helmet } from 'react-helmet';
import Partners from './../components/Home/Partners';
import Impact from './../components/Home/Impact';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MealConnect | Home</title>
            </Helmet>
            <div className='container mx-auto'>
                <Banner></Banner>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='container mx-auto'>
                <FeaturedFoods></FeaturedFoods>
            </div>
            <ScrollToTop className='flex justify-center items-center' smooth />
            <div data-aos="fade-up" data-aos-duration="1000" className='bg-[#FF6C22] min-h-screen my-5'>
                <About></About>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className='container mx-auto'>
                <Impact></Impact>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className='container mx-auto'>
                <Partners></Partners>
            </div>

        </div>
    );
};

export default Home;