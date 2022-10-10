import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizesData = useLoaderData();
    const quizes = quizesData.data.questions;
    console.log(quizes);
    return (
        <div>
            <p>This is quiz page</p>
        </div>
    );
};

export default Quiz;