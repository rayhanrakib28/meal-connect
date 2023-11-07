import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';

const Join = () => {
    return (
        <div className='min-h-screen container mx-auto p-6'>
            <Helmet>
                <title>MealConnect | Join</title>
            </Helmet>
            <div className="hero h-96" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md flex flex-col items-center">
                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Join As Volunteer</h1>
                        <p className="hidden lg:block mb-5 px-4"><Fade cascade damping={1e-1}>When you volunteer with us, you become part of a community that is passionate about helping others.</Fade></p>
                        <p className="block lg:hidden mb-5"><Fade delay={1e3}>When you volunteer with us, you become part of a community that is passionate about helping others.</Fade></p>
                        <button className="btn bg-[#FF6C22] border-none text-white hover:bg-white hover:text-[#FF6C22]">Join Now</button>
                    </div>
                </div>
            </div>
            <div className='mt-10 text-center'>
                <h1 className='font-bold text-[#2e355a] text-2xl lg:text-4xl'>Meet Our Volunteers</h1>
                <p className='font-light text-[#50577A] my-4'>directly contribute to reducing food waste and ensuring that nutritious meals reach those who need them most.</p>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  justify-items-center my-10'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <img className='w-36 lg:w-48 rounded-full' src="https://harity.templatekit.co/wp-content/uploads/sites/49/2020/08/serious-unshaven-male-with-pleasant-appearance-ha-2021-08-31-04-22-32-utc-1-768x768.jpg" alt="" />
                        <h1 className='text-xl lg:text-2xl text-[#2e355a] font-medium'>Eugene Wells</h1>
                        <p className='text-[#50577A] font-extralight'>mail@mail.com</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Join;