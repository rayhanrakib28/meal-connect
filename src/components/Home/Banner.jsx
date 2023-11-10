import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div class="relative min-h-screen">
                <div className='absolute -z-10 hidden md:block top-96 lg:top-40 left-0 lg:left-4 blur hover:blur-0'><img src="https://i.ibb.co/LhjjZkY/04de2e31234507-564a1d23645bf.gif" alt="" /></div>
                <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                    <div class="flex justify-center">
                        <a class="inline-flex items-center gap-x-2 bg-slate-200 border border-gray-200 text-xs text-[#50577A] p-2 px-3 rounded-full transition hover:border-gray-300" href="/available-foods">
                            Explore Discover Available Foods For You
                            <span class="flex items-center gap-x-1">
                                <span class="border-l border-gray-200 text-[#FF6C22] pl-2">Explore</span>
                                <svg class="w-2.5 h-2.5 text-[#FF6C22]" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    <div class="mt-5 max-w-3xl md:max-w-xl text-center mx-auto">
                        <h1 class="block font-bold text-[#2e355a] text-4xl md:text-5xl lg:text-6xl">
                            No One Left Hungry, No Food Goes to Waste
                        </h1>
                    </div>

                    <div class="mt-5 hidden md:block max-w-xl md:max-w-3xl text-center mx-auto">
                        <span class="text-lg text-gray-600 dark:text-gray-400"> <Fade cascade damping={1e-1}> "Be part of a caring community that ensures surplus food finds its way to those in need."</Fade> </span>
                    </div>
                    <div class="mt-5 block md:hidden max-w-xl md:max-w-3xl text-center mx-auto">
                        <span class="text-lg text-gray-600 dark:text-gray-400"> <Fade delay={1e3}> "Be part of a caring community that ensures surplus food finds its way to those in need."</Fade> </span>
                    </div>

                    <div class="mt-8 flex flex-col md:flex-row items-center gap-3 w-full justify-center">
                        <NavLink to="/manage-foods">
                            <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-[#FF8080] to-[#FF6C22] hover:from-[#FF6C22] hover:to-[#FF8080] border border-transparent text-white text-lg font-medium rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF8080] focus:ring-offset-2 focus:ring-offset-white py-3 px-6">
                                Get Started
                                <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </a>
                        </NavLink>
                        <NavLink to="/join">
                            <a class="inline-flex justify-center items-center gap-x-3 text-center hover:bg-[#FF6C22] hover:text-white hover:border-none border border-[#FF8080] text-[#FF8080] text-lg font-medium rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF8080] focus:ring-offset-2 focus:ring-offset-white py-3 px-6">
                                Join As Volunteer
                                <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </a>
                        </NavLink>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;