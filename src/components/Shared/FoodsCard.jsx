import { useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';


const FoodsCard = ({ food }) => {
    const { _id, DonorName, DonorImage, FoodImage, FoodName, FoodQuantity, ExpiredDay, Location } = food || {};


    return (
        <Link to={`/food_details/${_id}`}>
            <div className="w-80 lg:w-96 h-[550px]">
                <div className='bg-white shadow rounded-lg flex flex-col justify-between'>
                    <img className='rounded-t-lg w-full h-60 object-cover transition duration-500 group-hover:scale-105' src={FoodImage} alt="No Images Added" />
                <div className="px-3 mt-4">
                    <h2 className="text-xl text-center font-semibold pt-2">{FoodName}</h2>
                    <div className="flex items-center py-4 gap-4">
                        <img className="w-8 h-8 object-cover rounded-full" src={DonorImage} />
                        <p className=" text-[#2e355a] ">{DonorName}</p>
                    </div>
                    <span className="flex items-center gap-6 text-sm font-medium text-start"><img className="w-6" src="https://i.ibb.co/GMLKtQg/product.png" /> Food Quantity: {FoodQuantity}</span>
                    <span className="flex items-center gap-6 py-2 text-sm font-medium text-start"><img className="w-6" src="https://i.ibb.co/t4dvNX0/location.png" /> Pickup Location: {Location}</span>
                    <span className="flex items-center gap-6 text-sm font-medium text-start"><img className="w-6" src="https://i.ibb.co/0ZFprsk/deadline.png" /> Expired Day: {ExpiredDay}</span>
                </div>
                <Link to={`/food_details/${_id}`}>
                    <button className="bg-[#FF6C22] hover:bg-[#FF6C11] font-bold text-white py-4 rounded-b-md w-full mt-4">View Details</button>
                </Link>
            </div>
            </div>
            
        </Link>

    );
};

export default FoodsCard;