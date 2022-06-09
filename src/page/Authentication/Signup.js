import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Loading/Loading';


const Signup = () => {

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    // if loading
    if (loading || updating) {
        return <Loading></Loading>
    }


    //if any error
    let errorElement;
    if (error || updateError) {
        errorElement = <p className='text-red-600'>Error: {error?.message}</p>
    }


    const handleSingUp = async (event) => {
        event.preventDefault();

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        //console.log(name, email, password)
        if (!error) {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name });
            event.target.reset()
        }

    }

    return (
        <div className="mt-20 flex flex-col items-center justify-center bg-base-100">

            <div className="flex flex-col bg-primary shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                <div className="font-medium self-center text-xl sm:text-2xl uppercase text-white">Sing Up</div>


                <div className="mt-6">

                    <form onSubmit={handleSingUp}>


                        {/* name input */}
                        <div className="flex flex-col mb-6">
                            <label for="email" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Name:</label>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>

                                <input type="text" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg w-full py-2 focus:outline-none" placeholder="Name" required />
                            </div>
                        </div>


                        {/* email input */}
                        <div className="flex flex-col mb-6">
                            <label for="email" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Email Address:</label>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>

                                <input type="email" name="email" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg w-full py-2 focus:outline-none" placeholder="Email Address" required />
                            </div>
                        </div>

                        {/* password input */}
                        <div className="flex flex-col mb-6">
                            <label for="password" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Password:</label>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <span>
                                        <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>
                                </div>

                                <input type="password" name="password" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg w-full py-2 focus:outline-none" placeholder="Password" required />
                            </div>
                        </div>

                        {errorElement}

                        <div className="flex w-full">
                            <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base  hover:text-warning rounded py-2 w-full transition duration-150 ease-in">
                                <span className="mr-2 uppercase">Sing Up</span>
                                <span>
                                    <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    );
};

export default Signup;