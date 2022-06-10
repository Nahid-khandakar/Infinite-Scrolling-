import SkeletonLoading from '../SkeletonLoading/SkeletonLoading';

const Usercard = ({ user, loading }) => {
    console.log(loading)

    return (

        <>
            {
                loading ?

                    <SkeletonLoading></SkeletonLoading>
                    :
                    <div className='px-5'>
                        <div className="max-w-2xl">
                            <div className="max-w-sm bg-primary rounded-lg py-5 ">
                                <div className="text-center items-center pb-10">
                                    <img src={user.picture.medium} className="mb-3 w-24 h-24 rounded-full shadow-lg mx-auto" alt="random user" />
                                    <h3 className="mb-1 text-xl font-medium text-gray-900">{user?.name?.first + " " + user?.name?.last}</h3>
                                    <h3 className="text-md text-gray-900">{user?.location?.country}</h3>
                                    <h3 className="text-md text-gray-900">{user?.email}</h3>
                                    <h3 className="text-md text-gray-900">{user?.phone}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Usercard;