import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className='min-h-screen flex flex-col space-y-4 justify-center items-center'>
            <h2  className='text-3xl font-bold'>Page is not found...!</h2>
            <Link to='/' className='btn bg-emerald-900 text-white text-xl'>Back to home page</Link>
        </div>
    );
};

export default ErrorElement;