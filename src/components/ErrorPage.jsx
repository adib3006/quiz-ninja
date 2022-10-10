import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='flex flex-col items-center justify-center min-h-[600px]'>
            <h1 className='text-6xl text-gray-500'>Error Found</h1>
            <h1 className='text-6xl text-red-500'>{error.status}</h1>
            <p className='text-4xl text-gray-500'>{error.statusText}</p>
        </div>
    );
};

export default ErrorPage;