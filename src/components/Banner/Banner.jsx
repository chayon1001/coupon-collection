import React from 'react';

import firstImage from '../../assets/first.jpg'

import secondImage from '../../assets/second.jpg'
import thirdImage from '../../assets/third.jpg'
import fourthImage from '../../assets/fourth.jpg'



const Banner = () => {
    return (
        <div className="carousel w-full h-[400px] ">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={firstImage}
                    className="w-full h-full  rounded-md" />
                <div className="absolute left-5 right-5 top-48 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

                <div className='absolute left-64 top-32'>
                    <h3 className='text-center text-slate-700 font-semibold text-2xl'>Only the best discounts & coupons</h3>
                    <p className='text-center my-3 text-slate-700'>Over 17 working discount & coupon codes is active for 3 users, enjoy!</p>

                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={secondImage}
                    className="w-full h-full rounded-md" />
                <div className="absolute left-5 right-5 top-48 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute left-64 top-32'>
                    <h3 className='text-center text-slate-700 font-semibold text-2xl'>Only the best discounts & coupons</h3>
                    <p className='text-center my-3 text-slate-700 '>Over 17 working discount & coupon codes is active for 3 users, enjoy!</p>

                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={thirdImage}
                    className="w-full h-full rounded-md" />
                <div className="absolute left-5 right-5 top-48 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute left-64 top-32'>
                    <h3 className='text-center text-slate-700 font-semibold text-2xl'>Only the best discounts & coupons</h3>
                    <p className='text-center my-3 text-slate-700 '>Over 17 working discount & coupon codes is active for 3 users, enjoy!</p>

                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={fourthImage}
                    className="w-full h-full rounded-md" />
                <div className="absolute left-5 right-5 top-48 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute left-64 top-32'>
                    <h3 className='text-center text-slate-700 font-semibold text-2xl'>Only the best discounts & coupons</h3>
                    <p className='text-center my-3 text-slate-700'>Over 17 working discount & coupon codes is active for 3 users, enjoy!</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;