import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaDailymotion, FaHome, FaTags, FaUser } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-emerald-600" : "text-slate-900"
                                }
                            >
                                <div className="flex  gap-1 items-center">

                                    <span className="text-sm">Home</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/brands"
                                className={({ isActive }) =>
                                    isActive ? "text-emerald-600" : "text-slate-900"
                                }
                            >
                                <div className="flex gap-1 items-center">

                                    <span className="text-sm">Brands</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/my-profile"
                                className={({ isActive }) =>
                                    isActive ? "text-emerald-600" : "text-slate-900"
                                }
                            >
                                <div className="flex gap-1 items-center">

                                    <span className="text-sm">My Profile</span>
                                </div>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/dailyOffers"
                                className={({ isActive }) =>
                                    isActive ? "text-emerald-600" : "text-slate-900"
                                }
                            >
                                <div className="flex gap-1 items-center">

                                    <span className="text-sm">Daily Offers</span>
                                </div>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    isActive ? "text-emerald-600" : "text-slate-900"
                                }
                            >
                                <div className="flex gap-1 items-center">

                                    <span className="text-sm">BLog</span>
                                </div>
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">COUPON <span className='bg-emerald-900 text-white rounded-r-full p-1 px-2'>ER.</span></a>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" space-x-4 menu-horizontal px-1">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-emerald-600" : "text-slate-900"
                            }
                        >
                            <div className="flex  gap-1 items-center">

                                <span className="text-sm">Home</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/brands"
                            className={({ isActive }) =>
                                isActive ? "text-emerald-600" : "text-slate-900"
                            }
                        >
                            <div className="flex gap-1 items-center">

                                <span className="text-sm">Brands</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/my-profile"
                            className={({ isActive }) =>
                                isActive ? "text-emerald-600" : "text-slate-900"
                            }
                        >
                            <div className="flex gap-1 items-center">

                                <span className="text-sm">My Profile</span>
                            </div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/dailyOffers"
                            className={({ isActive }) =>
                                isActive ? "text-emerald-600" : "text-slate-900"
                            }
                        >
                            <div className="flex gap-1 items-center">

                                <span className="text-sm">Daily Offers</span>
                            </div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "text-emerald-600" : "text-slate-900"
                            }
                        >
                            <div className="flex gap-1 items-center">

                                <span className="text-sm">BLog</span>
                            </div>
                        </NavLink>
                    </li>



                </ul>
            </div>
            <div  className='ml-4 text-emerald-800'>

                {
                    user && user?.email

                }
            </div>

            <div className="navbar-end">

                <div className='mr-3'>

                    {user && user?.email ? <div className='flex items-center gap-2 '>
                        <img className='w-6' src={user?.photoURL} alt="" />
                        <p className=''>Hi, <span className='font-semibold text-lg '>
                            {user.displayName}</span></p>
                    </div> : " "


                    }

                </div>
                {
                    user && user?.email ? <button onClick={logOut} className="px-4 py-2 bf bg-emerald-900 rounded-lg text-white">Log-Out</button> : <Link to='/auth/login' className="px-4 py-2 bf bg-emerald-900 rounded-lg text-white" >Login
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;