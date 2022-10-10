import React from 'react';
import Lottie from "lottie-react";
import quiz from './assets/quiz.json';

const Header = () => {
    return (
        <div className='lg:flex sm:flex-col md:flex-row items-center justify-center'>
            <div className='w-2/3'>
                <p className='text-5xl text-center'>Welcome to <span className='text-sky-500'>Quiz</span> Ninja.</p>
                <p className='text-center text-2xl pt-4'>Sharpen your skills.</p>
            </div>
            <div className='w-1/3'>
                <Lottie animationData={quiz} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default Header;