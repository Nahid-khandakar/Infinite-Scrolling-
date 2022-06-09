import React from 'react';

const Usercard = ({ user }) => {

    return (
        <div>
            <h1>{user.gender}</h1>
            <h1>{user.name.first}</h1>
            <img src={user.picture.medium} alt="" />
        </div>
    );
};

export default Usercard;