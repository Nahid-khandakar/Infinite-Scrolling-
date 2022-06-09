import React, { useEffect, useState } from 'react';
import Usercard from '../Usercard/Usercard';


const Home = () => {

    const [users, setUsers] = useState([])


    const url = "https://randomuser.me/api/?results=10"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data.results))
    }, [])


    return (
        <div>
            <h1 className='text-center py-5 text-2xl font-bold'>Random User </h1>

            <div>

                {
                    users?.map((user, index) => <Usercard
                        key={index}
                        user={user}
                    ></Usercard>)
                }

            </div>


        </div>
    );
};

export default Home;