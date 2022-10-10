import React from 'react';
import Lottie from "lottie-react";
import quiz from './assets/quiz.json';

const Header = () => {
    return (
        <div className='flex items-center'>
            <div className='w-2/3'>
                <p className='text-5xl text-center'>Welcome to Quiz Ninja.</p>
                <p className='text-center text-2xl pt-4'>Sharpen your skills.</p>
            </div>
            <div className='w-1/3'>
                <Lottie animationData={quiz} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default Header;