import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLocation } from 'react-router-dom';
import ManageFoodCard from './ManageFoodCard';

const ManageFood = () => {
    const { user } = useAuth();
    const { email, displayName } = user || {};
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const axiosSecure = useAxiosSecure();
    const location = useLocation();
    const pathname = location.pathname;
    const id = pathname.slice(pathname.lastIndexOf('/') + 1);
    const url = `/api/v1/requested?food=${id}`;
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                console.log(res.data);
                setData(res.data)
                setIsLoading(false)
            })
    }, [id, url, axiosSecure])
    return (
        <div className='container mx-auto px-5 md:px-0'>
            {
                isLoading ?
                    (<div className='w-full flex justify-center items-center justify-items-center'><img className='w-80' src="https://i.ibb.co/80Bnt31/loading.gif" alt="" /></div>)
                        :
                    (<div class="relative min-h-screen mt-10 overflow-x-auto shadow-md sm:rounded-lg">
                        <h1 className='text-center text-2xl md:text-4xl font-bold mb-10'>Manage Food</h1>
                        <table class="w-full text-sm text-left text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-3 py-2">
                                        Requester Image
                                    </th>
                                    <th scope="col" class="px-3 py-2">
                                        Status
                                    </th>
                                    <th scope="col" class="px-3 py-2">
                                        Requester Name
                                    </th>
                                    <th scope="col" class="px-3 py-2 ">
                                        Requester Email
                                    </th>
                                    <th scope="col" class="px-3 py-2 ">
                                        Requester Donation
                                    </th>
                                    <th scope="col" class="px-3 py-2 ">
                                        Request Date
                                    </th>
                                    <th scope="col" class="px-3 py-2">
                                        Confirm
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(details => <ManageFoodCard key={details._id} details={details}></ManageFoodCard>)
                                }
                            </tbody>
                        </table>
                    </div>)
            }
        </div>
    );
};

export default ManageFood;