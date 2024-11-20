import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const DailyOffers = () => {
    return (
        <>
            <Navbar></Navbar>


            <div className="p-4">

                <div className="mb-6">
                    <h1 className="text-2xl font-semibold">Daily Offers</h1>
                    <div className="w-16 h-1 bg-teal-500 mt-1"></div>
                </div>


                <div className="flex flex-wrap lg:flex-nowrap gap-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 flex-grow">

                        <div className="border rounded-lg shadow-md p-4 bg-white">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Shopping"
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <h2 className="text-lg font-semibold mt-4">
                                Exclusive Shopping Deal
                            </h2>
                            <p className="text-gray-600 text-sm">
                                Get the best discounts on your favorite brands and save more.
                            </p>
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-500 text-sm">
                                    &#9733;&#9733;&#9733;&#9733;&#9734;
                                </span>
                                <span className="ml-2 text-gray-500 text-sm">(75 reviews)</span>
                            </div>
                            <a
                                href="#"
                                className="block mt-4 text-teal-500 font-medium hover:underline"
                            >
                                Buy Now &rarr;
                            </a>
                        </div>


                        <div className="border rounded-lg shadow-md p-4 bg-white">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Online Offer"
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <h2 className="text-lg font-semibold mt-4">Weekend Flash Sale</h2>
                            <p className="text-gray-600 text-sm">
                                Don’t miss out! Amazing discounts available this weekend only.
                            </p>
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-500 text-sm">
                                    &#9733;&#9733;&#9733;&#9733;&#9734;
                                </span>
                                <span className="ml-2 text-gray-500 text-sm">(83 reviews)</span>
                            </div>
                            <a
                                href="#"
                                className="block mt-4 text-teal-500 font-medium hover:underline"
                            >
                                Buy Now &rarr;
                            </a>
                        </div>


                        <div className="border rounded-lg shadow-md p-4 bg-white">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Discount Offer"
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <h2 className="text-lg font-semibold mt-4">New Season Offers</h2>
                            <p className="text-gray-600 text-sm">
                                Refresh your wardrobe with exclusive seasonal discounts.
                            </p>
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-500 text-sm">
                                    &#9733;&#9733;&#9733;&#9733;&#9734;
                                </span>
                                <span className="ml-2 text-gray-500 text-sm">(49 reviews)</span>
                            </div>
                            <a
                                href="#"
                                className="block mt-4 text-teal-500 font-medium hover:underline"
                            >
                                Buy Now &rarr;
                            </a>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/4 bg-white shadow-md p-6 rounded-lg space-y-6">

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Search Coupons</h3>

                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-600">
                                    Categories
                                </label>
                                <select className="w-full border border-gray-300 rounded-md p-2 mt-2">
                                    <option>Select a category</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-600">
                                    Shops
                                </label>
                                <select className="w-full border border-gray-300 rounded-md p-2 mt-2">
                                    <option>Select a shop</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-600">
                                    Type
                                </label>
                                <select className="w-full border border-gray-300 rounded-md p-2 mt-2">
                                    <option>Select type</option>
                                </select>
                            </div>
                            <button className="w-full mt-6 bg-emerald-900 text-white py-2 rounded-md ">
                                Search Coupons
                            </button>
                        </div>


                        <div>
                            <h3 className="text-lg font-semibold mb-4">Coupon Categories</h3>
                            <ul className="space-y-2">
                                <li className="flex justify-between">
                                    <span>Electronics</span>
                                    <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                                        5
                                    </span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Fashion</span>
                                    <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                                        8
                                    </span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Groceries</span>
                                    <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                                        3
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </>
    );
};

export default DailyOffers;