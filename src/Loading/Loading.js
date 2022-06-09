import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen bg-base-100'>

            <div className=" flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
            </div>

        </div>
    );
};

export default Loading;