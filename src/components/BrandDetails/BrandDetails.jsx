import React from "react";
import { useParams, useLoaderData, Navigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";


const BrandDetails = () => {
    const { id } = useParams();
    const brands = useLoaderData();
    

    const brand = brands.find((brand) => brand._id === id);



    return (
        <div className="container mx-auto p-4">


            <div className="flex items-center space-x-4 mb-6">
                <img
                    src={brand.brand_logo}

                    className="w-16 h-16  rounded-xl" />
                <div>
                    <h1 className="text-2xl font-bold">{brand.brand_name}</h1>
                    <p className="text-gray-600">Rating: {brand.rating}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    brand.coupons.map((coupon) => (
                        <div
                            key={coupon.coupon_code}
                            className="border rounded-lg shadow p-4 flex flex-col">
                            <h3 className="font-bold text-lg">{coupon.coupon_code}</h3>
                            <p className="text-gray-600 mb-2">{coupon.description}</p>
                            <p className="text-sm text-gray-500">Expires: {coupon.expiry_date}</p>
                            <p className="text-sm text-gray-500">Condition: {coupon.condition}</p>
                            <p className="text-sm text-gray-500">Type: {coupon.coupon_type}</p>

                            
                            <div className="flex items-center space-x-2 mt-4">
                                <CopyToClipboard
                                    text={coupon.coupon_code}
                                    onCopy={() => toast.success("Coupon code copied!")} >
                                    <button className="bg-emerald-900 text-white px-4 py-2 rounded-xl ">
                                        Copy Code
                                    </button>
                                </CopyToClipboard>
                                <button
                                    onClick={() => window.open(brand.shop_Link, "_blank")}
                                    className="bg-green-500 text-white px-4 py-2 rounded-xl" >
                                    Use Now
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default BrandDetails;