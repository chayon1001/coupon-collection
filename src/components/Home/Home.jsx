import React from 'react';
import Banner from '../Banner/Banner';
import TopBrands from '../TopBrands/TopBrands';

const Home = () => {
    return (
        <div className='mt-3'>
           <Banner></Banner>

           <div>
                <TopBrands></TopBrands>

                
           </div>
        </div>
    );
};

export default Home;