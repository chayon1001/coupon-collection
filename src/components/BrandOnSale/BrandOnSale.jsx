import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const BrandOnSale = () => {

    const [brandSell, setBrandSell] = useState([]);

    useEffect(() => {
        fetch('./fake_data.json')
            .then(res => res.json())
            .then(data => setBrandSell(data))
    }, [])

    const brandsOnSale = brandSell.filter((brand) => brand.isSaleOn);

    return (
        <div className="bg-gray-100 py-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Brands on Sale</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto px-4">
                {
                    brandsOnSale.map((brand) => (
                        <div
                            key={brand._id}
                            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
                            <img
                                src={brand.brand_logo}
                               
                                className="w-24 h-24 rounded-xl mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{brand.brand_name}</h3>
                            <p className="text-gray-500 text-sm mb-2">Category: {brand.category}</p>
                            <p className="text-gray-500 text-sm">Total Coupons: {brand.coupons.length}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default BrandOnSale;








