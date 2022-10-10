import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id,name,logo,total} = topic;
    return (
        <div>
            <img className='bg-gray-600' src={logo} alt="" />
            <p>{name}</p>
            <p>Total Number of Questions: {total}</p>
            <Link to={`/topics/${id}`}><button className='bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-900 '>Start Quiz</button></Link>
        </div>
    );
};

export default Topic;