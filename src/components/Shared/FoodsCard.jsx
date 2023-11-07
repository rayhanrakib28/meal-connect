import { useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const FoodsCard = () => {
    const [loading, setLoading] = useState(true);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>   
            <div className='w-80 lg:w-96 bg-white shadow-md rounded-lg'>
                <div className="relative">
                    <img className='rounded-t-lg' src="https://harity.templatekit.co/wp-content/uploads/sites/49/elementor/thumbs/volunteers-packing-boxes-for-refugees-2021-09-03-13-43-09-utc-e1657202519125-pt5tcmq0t40t3uhbc5pyem9nxk84drvsuzx4h1clqw.jpg" alt="" />
                    <span className="bg-green-600 text-white font-semibold text-sm absolute -bottom-2.5 left-4 px-2 rounded-md">Available</span>
                </div>
                <div className="px-3 mt-4">
                    {/* {
                        loading ? <Skeleton count={4} /> : <h2 className="text-xl font-semibold pt-2">Frozen Fish Fillets</h2>
                    } */}
                    <h2 className="text-xl font-semibold pt-2">Frozen Fish Fillets</h2>
                    <div className="flex items-center py-4 gap-4">
                        <img className="w-8 rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                        <p className=" text-[#2e355a] ">Donator Name</p>
                    </div>
                    <span className="flex items-center gap-6 text-sm font-medium"><img className="w-6" src="https://i.ibb.co/GMLKtQg/product.png" /> Food Quantity: 33</span>
                    <span className="flex items-center gap-6 py-2 text-sm font-medium"><img className="w-6" src="https://i.ibb.co/t4dvNX0/location.png" /> Pickup Location: 456 Oak Avenue, Townsville</span>
                    <span className="flex items-center gap-6 text-sm font-medium"><img className="w-6" src="https://i.ibb.co/0ZFprsk/deadline.png" /> Expired Date/Time: 20/12/2012, 03:00:00</span>
                </div>
                <button className="bg-[#FF6C22] hover:bg-[#FF6C11] font-bold text-white py-4 rounded-b-md w-full mt-4">View Details</button>
            </div>
        </div>
    );
};

export default FoodsCard;