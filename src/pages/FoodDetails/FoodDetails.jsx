import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import useAuth from '../../hooks/useAuth';
import {  useLocation } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const FoodDetails = () => {
    const { user } = useAuth();
    const requesterEmail = user?.email;
    const requesterName = user?.displayName;
    const requesterImage = user?.photoURL;
    const [data, setData] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get('/api/v1/all/services')
            .then(res => {
            setData(res.data)
        })
    },[])
    const location = useLocation();
    const pathname = location.pathname;
    const id = pathname.slice(pathname.lastIndexOf('/') + 1);
    const food = data.find(item => item._id == id);
    const { _id, DonorName, DonorEmail, Location, FoodImage, FoodName, FoodQuantity, ExpiredDay, Status, DonorImage, Description, Details } = food || {};
    const food_id = _id;
    const now = new Date();
    const date = now.toLocaleDateString('en-GB');
    const requestDate = date.split(',')[0];


    const handleRequest = e => {
        e.preventDefault();
        const form = e.target;
        const Notes = form.notes.value;
        const Donate = form.donate.value;
        const food = { food_id, DonorName, DonorEmail, DonorImage, requesterEmail, requesterName, Location, Notes, Donate, FoodImage, FoodName, FoodQuantity, ExpiredDay, Status, requesterImage, Description, requestDate };
        fetch('https://meal-connect-server.vercel.app/api/v1/requested', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(food)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your Food has been added',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    window.location.reload();
                } else {
                    console.log('Already Requested');
                }
            })

    }


    return (
        <div>
            <Helmet>
                <title>{`MealConnect | ${FoodName}`}</title>
            </Helmet>
            


            <div className='container mx-auto'>
                <div className="px-4 min-h-screen py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col-reverse gap-10 md:flex-row">
                        <div className="w-full md:w-1/2">
                            <div className='flex items-center gap-4 relative'> 
                                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-10 h-10 text-[#FF6C22] hover:"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>

                                </div>
                                {
                                    Status ? (<div className="badge absolute left-8 bottom-10 bg-[#FF6C22] text-white">Available</div>) : (<div className="badge absolute left-8 bottom-10 bg-[#2e355a] text-white">Not Available</div>)
                                }
                            </div>
                            <h5 className="mb-4 text-2xl md:text-4xl font-bold">
                                {FoodName}
                            </h5>
                            <p className="mb-6 text-gray-900">
                                {Details}
                            </p>
                            <span className="flex items-center gap-6 text-base font-medium text-start"><img className="w-6" src="https://i.ibb.co/GMLKtQg/product.png" /> Food Quantity: {FoodQuantity}</span>
                            <span className="flex items-center gap-6 py-2 text-base font-medium text-start"><img className="w-6" src="https://i.ibb.co/t4dvNX0/location.png" /> Pickup Location: {Location}</span>
                            <span className="flex items-center gap-6 text-base font-medium text-start"><img className="w-6" src="https://i.ibb.co/0ZFprsk/deadline.png" /> Expire Day: {ExpiredDay}</span>
                            <div className='mt-8 flex gap-6 items-center'>
                                <img className='w-16 h-16 object-cover rounded-md' src={DonorImage} alt="" />
                                <div>
                                    <p>{DonorName}</p>
                                    <p>{DonorEmail}</p>
                                </div>
                            </div>
                            {Status ? (<button className="btn text-center w-40 h-16 mt-6 bg-[#FF6C22] text-white hover:text-[#2e355a] " onClick={() => document.getElementById('request_modal').showModal()}>Request</button>):('') }
                            
                            <dialog id="request_modal" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <div className='flex gap-5 mb-4'>
                                        <img className='w-60 h-60 rounded-lg object-cover' src={FoodImage} alt="" />
                                    <div>
                                        <h3 className="font-bold text-lg mt-3">{FoodName}</h3>
                                        <p className=" text-sm">Food Id: {_id}</p>
                                    </div>
                                    </div>
                                    
                                    <div className="">
                                        <form onSubmit={handleRequest} method="dialog">
                                            <p className=" text-sm font-semibold">Donor info</p>
                                            <p className=" text-sm">Email: {DonorEmail}</p>
                                            <p className=" text-sm">Name: {DonorName}</p>
                                            <p className=" text-sm font-semibold">Your info</p>
                                            <p className=" text-sm">Name: {requesterName}</p>
                                            <p className=" text-sm">Email: {requesterEmail}</p>
                                            <p className=" text-sm font-semibold">Others info</p>
                                            <p className=" text-sm">Request Date: {requestDate}</p>
                                            <p className=" text-sm">Pickup Location: {Location}</p>
                                            <p className=" text-sm">Expired Day: {ExpiredDay}</p>
                                            <input name='notes' className='border my-2 p-2 rounded outline-none mr-2' type="text" placeholder='Additional Notes'/>
                                            <input name='donate' className='border my-2 p-2 rounded outline-none' type="number" placeholder='Donate Money'/>
                                            <input className='btn bg-[#FF6C22] text-white hover:text-[#2e355a]' type="submit" value="Request" />
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                            
                        </div>
                        <div className='w-full md:w-1/2'>
                            <a className='w-full rounded-md group relative block overflow-hidden'>
                                <img
                                    src={FoodImage}
                                    alt=""
                                    className="w-full h-full shadow-lg md:h-96 object-cover transition duration-500 group-hover:scale-105 rounded-md"
                                />
                                <p className='mt-5 text-center'>{Description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodDetails;