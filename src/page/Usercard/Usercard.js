import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Usercard = ({ user, loading }) => {

    return (

        <>
            {
                loading ?

                    <div className='px-5'>
                        <div className="max-w-2xl mx-auto">
                            <div className='max-w-sm bg-white shadow-lg rounded-lg py-5 '>
                                <div className='text-center items-center pb-10'>
                                    <Skeleton className='mb-3 w-24 h-24 rounded-full shadow-mg mx-auto' circle={true} height={96} width={96} />
                                    <h3 className='px-10'><Skeleton /></h3>
                                    <h3 className='text-center px-14'><Skeleton /></h3>
                                    <h3 className='text-md px-8'><Skeleton /></h3>
                                    <h3 className='text-md px-16'><Skeleton /></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='px-5'>
                        <div className="max-w-2xl mx-auto">
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