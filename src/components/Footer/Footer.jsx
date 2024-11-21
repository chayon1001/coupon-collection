import React from "react";
import { FaTwitter, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-700  text-gray-300 py-8">
            <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Newsletter Section */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
                    <p className="mb-4">Latest discounts and coupons</p>
                    <div className="flex flex-col space-y-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <button className="bg-emerald-900 text-white px-4 py-2 rounded ">Subscribe</button>
                    </div>
                </div>

                {/* FAQ Section */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-4">FAQ</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-teal-500">Duis aute irure dolor?</a></li>
                        <li><a href="#" className="hover:text-teal-500">Sunt in culpa qui officia?</a></li>
                        <li><a href="#" className="hover:text-teal-500">Cillum dolore eu fugiat?</a></li>

                        <li><a href="#" className="hover:text-teal-500">Dolor Sit Amet?</a></li>
                        <li><a href="#" className="hover:text-teal-500">Set Do Eiusmod?</a></li>
                        <li><a href="#" className="hover:text-teal-500">Excepteur sint occaecat?</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
                    <ul className="space-y-2">
                        <li>Sed ut perspiciatis unde</li>
                        <li>Omnis iste natus error</li>
                        <li>Sit voluptatem accusantium</li>
                        <li>Doloremque laudantium</li>
                        <li>Totam rem aperiam eaque</li>
                        <li>Ipsa quae ab illo inventore veritatis</li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="bg-emerald-900 text-gray-300 p-2 rounded  hover:text-white"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="#"
                            className="bg-emerald-900 text-gray-300 p-2 rounded hover:text-white"
                        >
                            <FaFacebookF size={24} />
                        </a>
                        <a
                            href="#"
                            className="bg-emerald-900 text-gray-300 p-2 rounded hover:text-white"
                        >
                            <FaGoogle size={24} />
                        </a>
                    </div>

                    <Link to='/my-profile'>
                        <div className="pt-16">
                            <a
                                href="#"
                                className="block mt-4 text-teal-500 font-bold text-3xl hover:underline" >
                                Profile &rarr;
                            </a>
                        </div>
                    </Link>
                </div>
            </div>

            <aside className="text-center mt-10">
                <p>Copyright © {new Date().getFullYear()} - All right reserved Coupon ER. Ltd</p>
            </aside>

        </footer>
    );
};

export default Footer;
