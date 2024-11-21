import React, { useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { AuthContext } from '../../Provider/AuthProvider';

const MyProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='w-10/12 mx-auto mt-8'>
           
            <div
                className="relative h-20 flex items-center justify-center "  >
                <div className="bg-black bg-opacity-50 w-full h-full absolute rounded-lg"></div>
                <h1 className="relative text-4xl font-bold text-white z-10">
                    Welcome, {user?.displayName}!
                </h1>
            </div>

           
            <div className="flex justify-center mt-8">
                <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex flex-col items-center p-6">
                        <img
                            className="w-24 h-24 rounded-full border-4 border-emerald-500"
                            src={user?.photoURL} />
                        <h2 className="mt-4 text-xl font-semibold text-gray-800">
                            {user?.displayName}
                        </h2>
                        <p className="text-gray-600 mt-2">{user?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;