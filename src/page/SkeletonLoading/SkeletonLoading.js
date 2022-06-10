import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoading = () => {
    return (

        <div className='px-5'>
            <div className="max-w-2xl">
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

    );
};

export default SkeletonLoading;