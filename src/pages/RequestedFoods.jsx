import React from 'react';
import { Helmet } from 'react-helmet';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import { useEffect } from 'react';
import RequestedFoodsRow from './RequestedFoodsRow';

const RequestedFoods = () => {
    const { user } = useAuth();
    const [requestedFoods, setRequestedFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const url = `https://meal-connect-server.vercel.app/api/v1/requested?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setRequestedFoods(data);
                setIsLoading(false);
            })
    }, [url])
    return (
        <div className='container mx-auto px-5 mt-20'>
            <Helmet><title>MealConnect | Requested Foods</title></Helmet>

            <div className='min-h-screen'>
                {
                    isLoading ? (<div className='w-full flex justify-center items-center justify-items-center'><img className='w-80' src="https://i.ibb.co/80Bnt31/loading.gif" alt="" /></div>)
                        :
                        (
                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-left text-gray-500">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Donor name
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Status
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Expire Date
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Donate
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Cancel
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            requestedFoods.map(requested => <RequestedFoodsRow key={requested._id} requested={requested}></RequestedFoodsRow>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        )
                }


            </div>

        </div>
    );
};

export default RequestedFoods;