import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

const Quiz = () => {
    const quizesData = useLoaderData();
    const quizes = quizesData.data.questions;
    console.log(quizes);
    return (
        <div>
            <p className='text-4xl text-center p-10'>This is quiz page</p>
            <div className='flex flex-col items-center'>
                {
                    quizes.map(quiz => <QuizCard key={quiz.id} quiz={quiz}></QuizCard>)
                }
            </div>
        </div>
    );
};

export default Quiz;