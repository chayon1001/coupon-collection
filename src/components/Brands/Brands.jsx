import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Brands = () => {

    const navigate = useNavigate();

    const data = useLoaderData();
    console.log(data)

    const [searchTerm, setSearchTerm] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); 


    const filteredBrands = data.filter((brand) =>
        brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleViewCoupons = (brandId) => {
        if (isLoggedIn) {
            navigate(`/brand-details/${brandId}`);
        } 
        // else {
        //     navigate("/login");
        // }
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">

            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">All Brands</h1>
                <div className="w-20 h-1 bg-teal-500 mt-2"></div>
            </div>


            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search brands"
                    className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
            </div>


            <div className="space-y-6">
                {
                    filteredBrands.map((brand) => (
                        <div
                            key={brand._id}
                            className="bg-white border rounded-lg shadow-md p-6 flex flex-col items-center" >
                            <img
                                src={brand.brand_logo}

                                className="w-32 h-32 mb-4" />


                            <h2 className="text-xl font-bold text-gray-800 text-center">
                                {brand.brand_name}
                            </h2>

                            <div className="flex items-center text-yellow-500 text-sm mt-1">
                               
                                {[...Array(5)].map((_,index) => (
                                    <FaStar
                                        key={index}
                                        className={index < Math.floor(brand.rating) ? "text-yellow-500" : "text-gray-300"}/>
                                ))}
                               
                                <span className="ml-2 text-gray-600">{brand.rating}</span>
                            </div>
                            <p className="text-gray-600 text-center mt-2">{brand.description}</p>

                         
                            {
                                brand.isSaleOn && (
                                    <div className="mt-2 text-teal-500 text-sm animate-bounce">
                                        Sale is on!
                                    </div>
                                )
                            }


                            <button
                                onClick={() => handleViewCoupons(brand._id)}
                                className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow  mt-4"
  >
                                View Coupons
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Brands;