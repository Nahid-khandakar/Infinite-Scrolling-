import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-primary">


            <div className="navbar-start">
                <Link to='/' className="btn btn-ghost normal-case text-2xl text-white font-bold">Infinite Scrolling</Link>
            </div>


            <div className="navbar-end mr-4">
                <Link to="/login" className="text-md text-neutral font-bold uppercase">Log in</Link>
            </div>


        </div>
    );
};

export default Navbar;