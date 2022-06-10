import React, { useEffect, useState } from 'react';
import SkeletonLoading from '../SkeletonLoading/SkeletonLoading';
import Usercard from '../Usercard/Usercard';



const Home = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const url = "https://randomuser.me/api/?results=500"

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setUsers(data.results)
                    setLoading(false)
                })

        }, 1000);

    }, [loading])


    return (
        <div>
            <h1 className='text-center py-5 text-2xl font-bold'>Random User </h1>



            <div className='my-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-y-9'>

                {
                    loading ?

                        users?.map((user, index) => <SkeletonLoading></SkeletonLoading>)
                        :

                        users?.map((user, index) => <Usercard
                            key={index}
                            user={user}
                            loading={loading}
                        ></Usercard>)


                }

            </div>

        </div>
    );
};

export default Home;