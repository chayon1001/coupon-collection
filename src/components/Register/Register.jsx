import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const navigate = useNavigate();
    const { createUser, setUser, updatedUserProfile } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState("");

    const [showPassword, setShowPassword] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');


        if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setPasswordError("Password must contain at least one lowercase letter.");
            return;
        }
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
            return;
        }


        setPasswordError("");

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);

                updatedUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/');
                    }).catch((error) => {
                        console.log(error)
                    });
            })
            .catch((error) => {
                toast.error('Registration failed. Please try again!');
            });
    };

    return (
        <div className=" mt-5 rounded-lg bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
            <h2 className='text-2xl font-semibold text-center pt-4'>Register your account</h2>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        name='name'
                        placeholder="your name"
                        className="input input-bordered"
                        required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input
                        type="text"
                        name='photo'
                        placeholder="photo-url"
                        className="input input-bordered"
                        required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name='email'
                        placeholder="email"
                        className="input input-bordered"
                        required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type={showPassword ? "text" :
                            "password"
                        }
                        name='password'
                        placeholder="password"
                        className="input input-bordered"
                        required />

                    {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}

                    <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-6 top-12'>
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </button>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-emerald-900 text-white text-xl">Register</button>
                </div>
            </form>
            <p className='text-lg text-center pb-8'>Already have an account? <Link className='text-red-500' to='/auth/login'>Login</Link></p>
        </div>
    );
};

export default Register;
