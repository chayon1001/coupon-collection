import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const MainLayOut = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Navbar></Navbar>
            </div>

            <Outlet></Outlet>
            <div className='mt-20'>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default MainLayOut;