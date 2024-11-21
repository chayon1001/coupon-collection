import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ForgetPassword = () => {
    const { forgetPassword, logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [email, setEmail] = useState(location.state?.email); 

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please provide a valid email address!');
            return;
        }

        forgetPassword(email)
            .then(() => {
                toast.success('Password reset email sent...');
                logOut()
                .then(() =>{
                    navigate('/')
                })
            })
            .catch((error) => {
                toast.error('password not reset');
            });
    };

    return (
        <div className="w-10/12 mx-auto min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-xl mb-4">Reset Your Password</h2>
            <form onSubmit={handleResetPassword} className="flex flex-col items-center space-y-4">
                <div className="">
                    <label className="text-sm mb-1 block">Email</label>
                    <input
                        type="email"
                        value={email}
                       
                        className="input input-bordered w-full p-4 "
                        required />
                </div>
                <button
                    type="submit"
                    className="btn bg-emerald-900 text-white text-xl" >
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ForgetPassword;
