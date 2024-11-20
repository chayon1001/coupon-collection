import React from 'react';
import Banner from '../Banner/Banner';
import TopBrands from '../TopBrands/TopBrands';
import BrandOnSale from '../BrandOnSale/BrandOnSale';
import DailyOffers from '../DailyOffers/DailyOffers';
import BlogLatest from '../BlogLatest/BlogLatest';

const Home = () => {
    return (
        <div className='mt-3'>
           <Banner></Banner>

           <div>
                <TopBrands></TopBrands>


           </div>
           <div>
                <BrandOnSale></BrandOnSale>
           </div>

           <div>
                <DailyOffers></DailyOffers>
           </div>
           <div>
                <BlogLatest></BlogLatest>
           </div>
        </div>
    );
};

export default Home;