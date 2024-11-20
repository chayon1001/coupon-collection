import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';


const Register = () => {
    const navigate = useNavigate()
    const {createUser, setUser} = useContext(AuthContext);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const form = new FormData(e.target)

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

        console.log({name, photo, email, password})

        createUser(email, password)
        .then((result) => {
          
            const user = result.user;
            setUser(user);
            navigate('/')
            
          
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           
            toast.error('Register is not okay please try again !');
          });
    }
    return (
        <div className=" mt-5 rounded-lg bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">

            <h2 className='text-2xl font-semibold text-center pt-4'>Register your account</h2>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" name='photo' placeholder="photo-url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-emerald-900 text-white text-xl">Register</button>
                </div>
            </form>
            <p className='text-lg text-center pb-8'>Already have an account ? <Link className='text-red-500' to='/auth/login'>Login</Link></p>
        </div>
    );
};

export default Register;