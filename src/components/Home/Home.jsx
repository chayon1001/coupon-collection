import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import TopBrands from '../TopBrands/TopBrands';
import BrandOnSale from '../BrandOnSale/BrandOnSale';
import DailyOffers from '../DailyOffers/DailyOffers';
import BlogLatest from '../BlogLatest/BlogLatest';


import 'aos/dist/aos.css';
import AOS from 'aos';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div className='mt-3'>
            <div  data-aos='fade-up'>
                <Banner></Banner>

            </div>

            <div data-aos="fade-left">
                <TopBrands />
            </div>
            <div data-aos="fade-right">
                <BrandOnSale />
            </div>
            <div data-aos="zoom-in">
                <DailyOffers />
            </div>
            <div data-aos="fade-up">
                <BlogLatest />
            </div>
        </div>
    );
};

export default Home;