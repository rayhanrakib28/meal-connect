import React from 'react';
import { Helmet } from 'react-helmet';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import { useEffect } from 'react';
import RequestedFoodsRow from './RequestedFoodsRow';
import { Link } from 'react-router-dom';

const RequestedFoods = () => {
    const { user } = useAuth();
    const [requestedFoods, setRequestedFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const url = `https://meal-connect-server.vercel.app/api/v1/user/requested?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setRequestedFoods(data);
                setIsLoading(false);
            })
    }, [url])
    return (
        <div className='container mx-auto px-5'>
            <Helmet><title>MealConnect | Requested Foods</title></Helmet>

            <div className='min-h-screen'>
                {
                    isLoading ? (<div className='w-full flex justify-center items-center justify-items-center'><img className='w-80' src="https://i.ibb.co/80Bnt31/loading.gif" alt="" /></div>)
                        :
                        (
                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                
                                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center">
                                    <p class="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">MealConnect</p>
                                    <h1 class="mx-auto max-w-md md:max-w-lg font-display text-5xl font-medium tracking-tight text-slate-900 lg:text-6xl">
                                        <span class="inline-block">Manage
                                            <span class="relative whitespace-nowrap text-[#FF6C22]">
                                                <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#FF6C2250]" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                                                <span class="relative">Your</span></span>
                                        </span>
                                        <span class="inline-block">Food Request</span>
                                    </h1>

                                    <p class="mx-auto mt-5 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
                                        <span class="inline-block">Building Bridges of Nourishment and Community</span>
                                    </p>

                                    <div class="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
                                        <div class="relative flex flex-1 flex-col items-stretch sm:flex-none" data-headlessui-state="">
                                            <Link to="https://meal-connect.vercel.app/available-foods"><button class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right" id="headlessui-menu-button-:r4:" aria-haspopup="true" aria-expanded="false" data-headlessui-state="" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1em" height="1em" viewBox="0 0 50 50">
                                                    <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z"></path>
                                                </svg>
                                                <span class="ml-3">Get Foods</span>
                                            </button></Link>
                                        </div>
                                    </div>
                                </div>

                                
                                <table class="w-full text-sm text-left text-gray-500">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th scope="col" class="px-3 py-3">
                                                Donor name
                                            </th>
                                            <th scope="col" class="px-3 py-3">
                                                Status
                                            </th>
                                            <th scope="col" class="px-3 py-3">
                                                Expire Day
                                            </th>
                                            <th scope="col" class="px-3 py-3">
                                                Pickup Location
                                            </th>
                                            <th scope="col" class="px-3 py-3">
                                                Request Date
                                            </th>
                                            <th scope="col" class="px-3 py-3">
                                                Donate
                                            </th>
                                            <th scope="col" class="px-3 py-3">
                                                Cancel
                                            </th>
                                        </tr>
                                    </thead>
                                        {
                                            requestedFoods ? (<tbody>{
                                                requestedFoods.map(requested => <RequestedFoodsRow key={requested._id} requested={requested}></RequestedFoodsRow>)
                                        }</tbody>) : (<tbody><h2 className='text-center font-bold text-xl my-5'>No Requests Yet</h2></tbody>)
                                        }
                                </table>
                            </div>
                        )
                }


            </div>

        </div>
    );
};

export default RequestedFoods;