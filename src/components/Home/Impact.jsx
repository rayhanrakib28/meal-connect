import React from 'react';

const Impact = () => {
    return (
        <div className='mt-16'>
            <div class="relative overflow-hidden">
                <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div class="max-w-2xl text-center mx-auto">
                        <h1 className='text-4xl md:text-5xl lg:text-6xl text-[#2e355a] mb-4 font-bold'>Our Impact</h1>
                        <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">Making a Difference, One Meal at a Time</p>
                    </div>

                    <div class="mt-10 relative max-w-5xl mx-auto">
                        <div class="w-full object-cover h-96 sm:h-[480px] bg-[url('https://i.ibb.co/56wKk9n/impact.jpg')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

                        <div class="absolute inset-0 w-full h-full">
                            <div class="flex flex-col justify-center items-center w-full h-full">
                                <a class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50" href='#'>
                                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                                    Play the overview
                                </a>
                            </div>
                        </div>

                        <div class="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-[#FF6C22] to-white p-px rounded-lg">
                            <div class="bg-white w-48 h-48 rounded-lg"></div>
                        </div>

                        <div class="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-[#2e355a] to-[#50577A] p-px rounded-full">
                            <div class="bg-white w-48 h-48 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impact;