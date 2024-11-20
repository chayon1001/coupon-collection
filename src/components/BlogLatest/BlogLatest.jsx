import React from "react";

import blogFirst from '../../assets/blog_first.jpg'
import blogSecond from '../../assets/blog_second.jpg'
import blogThird from '../../assets/blog_third.jpg'

const BlogLatest = () => {
  return (
    <div className="p-8 bg-gray-100">
    
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Blog Latest</h1>
        <div className="w-16 h-1 bg-teal-500 mt-1"></div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
        <div className="border rounded-lg bg-white shadow-md overflow-hidden">
          <div className="relative">
            <img
              src={blogFirst}
              alt="Blog 1"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-0 right-0 bg-teal-500 text-white text-sm p-2">
              <span>+</span>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">
              Stay Updated with the Latest Trends
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Discover what's happening in the world of fashion, lifestyle, and
              technology...
            </p>
            <div className="text-gray-500 text-sm mt-4 flex items-center">
              <span className="mr-2">📅</span>
              <span>Nov 20, 2024</span>
            </div>
          </div>
        </div>

      
        <div className="border rounded-lg bg-white shadow-md overflow-hidden">
          <div className="relative">
            <img
              src={blogSecond}
              alt="Blog 2"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-0 right-0 bg-teal-500 text-white text-sm p-2">
              <span>+</span>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">
              Exploring Urban Landscapes
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              A deep dive into the most captivating skylines around the globe...
            </p>
            <div className="text-gray-500 text-sm mt-4 flex items-center">
              <span className="mr-2">📅</span>
              <span>Nov 20, 2024</span>
            </div>
          </div>
        </div>

        
        <div className="border rounded-lg bg-white shadow-md overflow-hidden">
          <div className="relative">
            <img
              src={blogThird}
              alt="Blog 3"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-0 right-0 bg-teal-500 text-white text-sm p-2">
              <span>+</span>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">
              Unveiling the Modern Shopping Experience
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Take a closer look at how shopping has transformed in the digital
              era...
            </p>
            <div className="text-gray-500 text-sm mt-4 flex items-center">
              <span className="mr-2">📅</span>
              <span>Nov 20, 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLatest;
