import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Loading/Loading'

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>
    }

    //if any error
    let errorElement;
    if (error) {
        errorElement = <p className='text-red-600'>Error: {error?.message + ' Refresh page'}</p>
    }

    const handleLogIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value

        if (!error) {
            signInWithEmailAndPassword(email, password)
            event.target.reset()
        }


    }

    return (

        <div className="mt-20 flex flex-col items-center justify-center bg-base-100">

            <div className="flex flex-col bg-primary shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                <div className="font-medium self-center text-xl sm:text-2xl uppercase text-white">Login</div>


                <div className="mt-6">

                    <form onSubmit={handleLogIn}>


                        <div className="flex flex-col mb-6">
                            <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Email Address:</label>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>

                                <input type="email" name="email" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
                            </div>
                        </div>

                        <div className="flex flex-col mb-6">
                            <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Password:</label>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <span>
                                        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>
                                </div>

                                <input type="password" name="password" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" />
                            </div>
                        </div>

                        {errorElement}

                        <div className="flex w-full">
                            <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base  hover:text-warning rounded py-2 w-full transition duration-150 ease-in">
                                <span className="mr-2 uppercase">Login</span>
                                <span>
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                    </form>


                </div>


                <div className="flex justify-center items-center mt-6">
                    <Link to="/signup" className="inline-flex items-center font-bold text-white hover:text-warning text-xs text-center">
                        <span>
                            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </span>
                        <span className="ml-2">You don't have an account?</span>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default Login;