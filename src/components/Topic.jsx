import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div className='rounded m-4 shadow-lg'>
            <img className='bg-gray-600 rounded-lg' src={logo} alt="" />
            <div className='flex py-4 justify-around'>
                <div>
                    <p className='text-2xl'>{name}</p>
                    <p>Total Questions: {total}</p>
                </div>
                <Link to={`/topics/${id}`}><button className='mt-3 bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-900 '>Start Quiz</button></Link>
            </div>
        </div>
    );
};

export default Topic;