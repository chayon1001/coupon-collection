import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const TopBrands = () => {
    const navigate = useNavigate()

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('./fake_data.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div className="bg-gray-150 py-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Top Brands</h2>
            <div className="overflow-hidden">
                <Marquee
                    pauseOnHover={true}
                    speed={50}
                    
                    className="space-x-24 bg-gray-200 p-5 " >
                    {
                        brands.map((brand) => (
                            <div
                                key={brand._id}
                                className="cursor-pointer flex items-center gap-3 pr-14 "
                                onClick={() => navigate(`/brand/${brand._id}`)} >
                                <img
                                    src={brand.brand_logo}
                                   
                                    className="w-8 h-8 rounded-full"/>
                                    <h3>{brand.brand_name}</h3>
                            </div>
                        ))}
                </Marquee>
            </div>
        </div>
    );
};

export default TopBrands;