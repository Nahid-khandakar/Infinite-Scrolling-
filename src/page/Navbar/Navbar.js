import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Navbar = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <div className="navbar bg-primary">


            <div className="navbar-start">
                <Link to='/' className="btn btn-ghost normal-case text-2xl text-white font-bold">Infinite Scrolling</Link>
            </div>


            <div className="navbar-end mr-4">

                {
                    user ?
                        <button onClick={handleSignOut} className="text-md text-neutral font-bold uppercase">Log Out</button>
                        :
                        <Link to="/login" className="text-md text-neutral font-bold uppercase">Log in</Link>
                }

            </div>


        </div>
    );
};

export default Navbar;