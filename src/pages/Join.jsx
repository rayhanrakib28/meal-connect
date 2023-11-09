import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import JoinCard from './JoinCard';
import Swal from 'sweetalert2';

const Join = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const volunteerEmail = user?.email;
    const volunteerImage = user?.photoURL;
    const volunteerName = user?.displayName;
    const [team, setTeam] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const url = 'https://meal-connect-server.vercel.app/api/v1/members';
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                setTeam(res.data)
                setIsLoading(false)
            })
    }, [])

    const handleJoin = e => {
        e.preventDefault();
        const userJoin = { volunteerEmail, volunteerImage, volunteerName };
        fetch('https://meal-connect-server.vercel.app/api/v1/members', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userJoin)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data?.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully Joined',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    window.location.reload();
                } else {
                    console.log('Already Joined');
                }
            })
    }

    return (
        <div className='min-h-screen container mx-auto p-6'>
            <Helmet>
                <title>MealConnect | Join</title>
            </Helmet>
            <div className="hero h-96" style={{ backgroundImage: 'url(https://i.ibb.co/56wKk9n/impact.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md flex flex-col items-center">
                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Join As Volunteer</h1>
                        <p className="hidden lg:block mb-5 px-4"><Fade cascade damping={1e-1}>When you volunteer with us, you become part of a community that is passionate about helping others.</Fade></p>
                        <p className="block lg:hidden mb-5"><Fade delay={1e3}>When you volunteer with us, you become part of a community that is passionate about helping others.</Fade></p>
                        <button onClick={handleJoin} className="btn bg-[#FF6C22] border-none text-white hover:bg-white hover:text-[#FF6C22]">Join Now</button>
                    </div>
                </div>
            </div>
            <div className='mt-10 text-center'>
                <h1 className='font-bold text-[#2e355a] text-2xl lg:text-4xl'>Meet Our Volunteers</h1>
                <p className='font-light text-[#50577A] my-4'>Directly contribute to reducing food waste and ensuring that nutritious meals reach those who need them most.</p>
                {
                    isLoading ? (<div className='w-full flex justify-center items-center justify-items-center'><img className='w-80' src="https://i.ibb.co/80Bnt31/loading.gif" alt="" /></div>)
                        :
                        (<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  justify-items-center my-10'>
                            {
                                team?.map(user => <JoinCard key={user._id} user={user}></JoinCard> )
                            }
                        </div>)
                }

            </div>
        </div>
    );
};

export default Join;