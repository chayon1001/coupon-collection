import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Navbar></Navbar>
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;