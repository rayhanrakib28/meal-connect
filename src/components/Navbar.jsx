import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = e => {
        logOut()
            .then((res) => {
                toast.success('Sign Out Successfully.', {
                    style: {
                        border: '1px solid #FF6C22',
                        padding: '16px',
                        color: '#713200',
                    },
                    iconTheme: {
                        primary: '#FF6C22',
                        secondary: '#FFFAEE',
                    },
                });
        })

    }

    const navlinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-[#FF6C22] " : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/available-foods"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-[#FF6C22] " : ""
                }
            >
                available foods
            </NavLink>
        </li>
    </>
    const usernav = <>
        <li>
            <NavLink
                to="/addfood"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-[#FF6C22] " : ""
                }
            >
                add food
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/manage-foods"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-[#FF6C22] " : ""
                }
            >
                manage foods
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/requested-foods"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-[#FF6C22] " : ""
                }
            >
                requested foods
            </NavLink>
        </li>
    </>




    return (
        <div className='container mx-auto mt-2'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">

                    <div className="drawer z-20">
                        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col">
                            <div className="w-full navbar">
                                <div className="flex-none lg:hidden">
                                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                    </label>
                                </div>
                                <a href='/' className="btn bg-transparent border-none hover:bg-transparent normal-case text-xl ">MealConnect</a>
                                
                            </div>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu flex gap-4 capitalize font-bold text-[#50577A] p-4 w-80 min-h-full bg-slate-100">
                                {navlinks}
                                {usernav}
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    {
                        user ? (<ul className="flex gap-4 capitalize font-bold text-[#50577A] px-2">
                            {navlinks}
                            {usernav}
                        </ul>)
                            :
                            (<ul className="flex gap-4 capitalize font-bold text-[#50577A] px-2">
                                {navlinks}
                            </ul>)
                    }
                </div>
                <div className="navbar-end">

                    {
                        user ? (<div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user ? user.photoURL : ''} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 gap-2 shadow menu menu-sm dropdown-content text-center bg-base-100 rounded-box w-60">
                                <li className='font-bold'>{user.displayName}</li>
                                <li>{user.email}</li>
                                <button onClick={handleLogOut} className='font-bold text-center text-base'>Logout</button>
                            </ul>
                        </div>) : (<ul className='flex capitalize font-bold text-[#50577A]'>
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-bold text-[#FF6C22]" : ""
                                    }
                                >
                                    Sign In
                                </NavLink>
                            </li>
                        </ul>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;