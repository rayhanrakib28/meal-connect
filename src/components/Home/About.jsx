import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 w-full text-center lg:text-start lg:grid-cols-2 justify-items-center items-center'>
                <div className='px-10 md:px-0'>
                    <span className='bg-[#ffffff70] text-white px-3 py-2 rounded-md font-semibold'>What we do</span>
                    <h2 className=' font-bold text-4xl lg:text-6xl text-white text-center lg:text-start my-10'>The mission and goals of our organization</h2>
                    <p className='text-slate-100'>Our mission is clear: to create a hunger-free and sustainable community where no edible food goes to waste. We believe that every meal shared is a step closer to this vision.</p>
                    <button className='btn hover:bg-[#FF6C22] hover:text-white mt-5'><Link to="/login">Join Now </Link></button>
                </div>
                <div className='max-w-lg px-2 md:px-0'>
                    <div className='grid grid-cols-2 gap-5 my-10'>
                        <div data-aos="zoom-in" data-aos-duration="3000" className='h-60 md:h-72 lg:h-96 w-48 md:w-56 bg-[#ffffff40] hover:bg-[#ffffff20] hover:shadow-lg shadow rounded-lg'>
                            <img className='w-24 md:w-48 pt-5 px-5' src="https://i.ibb.co/f8F7TfF/clean-energy.png" alt="" />
                            <h3 className='text-slate-100 text-xl text-start md:text-2xl px-5 mt-6'>Awareness</h3>
                            <p className='text-slate-100 text-start text-sm px-4 mt-2'>Our voice is a catalyst for policy improvements and greater awareness within our community and beyond.</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="3000" className='h-60 md:h-72 lg:h-96 w-48 md:w-56 bg-[#ffffff40] hover:bg-[#ffffff20] hover:shadow-lg shadow rounded-lg'>
                            <img className='w-24 md:w-48 pt-5 px-5' src="https://i.ibb.co/jDNWfTx/clothes.png" alt="" />
                            <h3 className='text-slate-100 text-xl text-start md:text-2xl px-5 mt-6'>Community</h3>
                            <p className='text-slate-100 text-start text-sm px-4 mt-2'>We believe in the power of community. We organize events that bring people together with a mission.</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5 my-10'>
                        <div data-aos="zoom-in" data-aos-duration="3000" className='h-60 md:h-72 lg:h-96 w-48 md:w-56 bg-[#ffffff40] hover:bg-[#ffffff20] hover:shadow-lg shadow rounded-lg'>
                            <img className='w-24 md:w-48 pt-5 px-5' src="https://i.ibb.co/wCnyyZ6/long-distance.png" alt="" />
                            <h3 className='text-slate-100 text-xl text-start md:text-2xl px-5 mt-6'>Distribution</h3>
                            <p className='text-slate-100 text-start text-sm px-4 mt-2'>Our aim is to make food assistance accessible to everyone, reducing the burden of hunger.</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="3000" className='h-60 md:h-72 lg:h-96 w-48 md:w-56 bg-[#ffffff40] hover:bg-[#ffffff20] hover:shadow-lg shadow rounded-lg'>
                            <img className='w-24 md:w-48 pt-5 px-5' src="https://i.ibb.co/fptgKg5/soup.png" alt="" />
                            <h3 className='text-slate-100 text-xl text-start md:text-2xl px-5 mt-6'>Collection</h3>
                            <p className='text-slate-100 text-start text-sm px-4 mt-2'>Our dedicated team collects surplus food from restaurants, grocery stores, and individuals who wish to contribute</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;