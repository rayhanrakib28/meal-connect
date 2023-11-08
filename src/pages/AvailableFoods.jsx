import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useEffect } from 'react';
import FoodsCard from '../components/Shared/FoodsCard';

const AvailableFoods = () => {
    const [asc, setAsc] = useState(true);
    const [less, setLess] = useState(true);
    const [search, setSearch] = useState('');
    const [allFoods, setAllFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    const url = `/api/v1/expire/services?sort=${asc ? 'asc' : 'desc'}&search=${search}`;
    useEffect(() => {
        setAllFoods([])
        axiosSecure.get(url)
            .then(res => {
                setAllFoods(res.data)
                setIsLoading(false)
            })
    }, [axiosSecure, url, asc, search])

    const url2 = `/api/v1/quantity/services?quantity=${less? 'asc':'desc'}&search=${search}`;
    useEffect(() => {
        setAllFoods([])
        axiosSecure.get(url2)
            .then(res => {
                setAllFoods(res.data)
                setIsLoading(false)
            })
    }, [axiosSecure, url, less, search])

    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText)
    }


    return (
        <div className='container mx-auto min-h-screen'>
            <Helmet><title>MealConnect | Available Foods</title></Helmet>
            <div className=''>
                <div class="relative overflow-hidden">
                    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
                        <div class="text-center">
                            <h1 class="text-4xl sm:text-6xl font-bold text-gray-800 ">
                                Available Foods
                            </h1>

                            <p class="mt-3 text-gray-600 ">
                                Discover a Variety of Fresh Donations
                            </p>

                            <div class="mt-7 sm:mt-12 mx-auto max-w-xl relative">

                                <form onSubmit={handleSearch}>
                                    <div class="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 ">
                                        <div class="flex-[1_0_0%]">
                                            <input type="text" name="search" class="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 outline-none" placeholder="Search Foods" />
                                        </div>
                                        <div class="flex-[0_0_auto]">
                                            <div class="grid">
                                                <button type="submit" class="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#FF6C22] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <div class="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                                    <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                        <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                        <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                    </svg>
                                </div>



                                <div class="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                                    <svg class="w-40 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" stroke-width="7" stroke-linecap="round" />
                                    </svg>
                                </div>
                            </div>


                            <div className='my-20 lg:my-40 '>
                                <div className='flex justify-between items-center container mx-auto'>
                                    <div>
                                        <button
                                            onClick={() => { setLess(!less) }}
                                            class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50">
                                            <svg class="flex-shrink-0 w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h5zm1 3V8H2l-.75 1L2 10h6zm0-5h6l.75-1L14 3H8v2z" />
                                            </svg>
                                            Quantity {less ? "(Highest)" : "(Lowest)"}
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => { setAsc(!asc) }}
                                            class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50">
                                            <svg class="flex-shrink-0 w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h5zm1 3V8H2l-.75 1L2 10h6zm0-5h6l.75-1L14 3H8v2z" />
                                            </svg>
                                            Expire Date {asc ? "(Newest Products)" : "(Oldest Products)"}
                                        </button>
                                    </div>
                                </div>
                                <div className='mt-10'>
                                    {
                                        isLoading ? (<div className='w-full flex justify-center items-center justify-items-center'><img className='w-80' src="https://i.ibb.co/80Bnt31/loading.gif" alt="" /></div>)
                                            :
                                            (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-10'>
                                                {
                                                    allFoods?.map(food => <FoodsCard key={food._id} food={food}></FoodsCard>)
                                                }
                                            </div>)
                                    }
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AvailableFoods;