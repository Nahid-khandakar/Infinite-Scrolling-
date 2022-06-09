import React, { useEffect, useState } from 'react';
import Usercard from '../Usercard/Usercard';



const Home = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)


    const url = "https://randomuser.me/api/?results=1500"

    useEffect(() => {

        setTimeout(async () => {
            const res = await fetch(url)
            const data = await res.json()
            setUsers(data.results)
        }, 1000);

    }, [loading])


    return (
        <div>
            <h1 className='text-center py-5 text-2xl font-bold'>Random User </h1>



            <div className='mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-y-9'>

                {
                    users?.map((user, index) => <Usercard
                        key={index}
                        user={user}
                        setLoading={setLoading}
                    ></Usercard>)
                }

            </div>

        </div>
    );
};

export default Home;