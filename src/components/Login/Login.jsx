import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {
    const navigate = useNavigate()
    const {loginUser, setUser, logInWithGoogle,  forgetPassword} = useContext(AuthContext)

    const [error, setError] = useState({})

    const emailRef = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        loginUser(email, password)
        .then((result)=>{
            const user = result.user;
            setUser(user);
           navigate('/')
           toast.success('Login successful!');
           e.target.reset()

        })
        .catch((err) => {
            setError({ ...error, login: err.code})
            
          });
        
    }

    const handleGoogleLogin = ()=>{
        logInWithGoogle()
        .then((res)=>{
            setUser(res)
            navigate('/')
        })
        .catch(error=>{
            console.log("ERROR", error.message)
        })
    }

    const handleForgetPassword = ()=>{
        const email = emailRef.current.value
        if(!email){
            toast.error('please provide a valid email address!');
        }
        else{
            forgetPassword(email)
            .then(()=>{
                toast.success('Password Reset email sent, please check your email');
                navigate('/forgetPassword', { state: { email } })
                
            })
        }
    }
    return (
        <div className=" mt-5 rounded-lg bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl pb-8">

            <h2 className='text-2xl font-semibold text-center pt-4'>Login your account</h2>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                </div>
                {
                    error.login &&(
                        <label className="label text-sm text-red-600">
                            {error.login}
                    </label>
                    ) 
                }
                <label onClick={handleForgetPassword} className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <div className="form-control mt-6">
                    <button className="btn bg-emerald-900 text-white text-xl">Login</button>
                </div>
            </form>
            <p className='text-lg text-center pb-8'>Don't have an account ? <Link className='text-red-500' to='/auth/register'>Register</Link></p>

            <p onClick={handleGoogleLogin} className='btn bg-gray-400 w-3/5 mx-auto flex items-center'>Login with Google</p>
        </div>
    );
};

export default Login;