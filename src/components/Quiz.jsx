import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

const Quiz = () => {
    const quizesData = useLoaderData();
    const {questions,name} = quizesData.data;
    console.log(questions);
    return (
        <div>
            <p className='text-4xl text-center p-10'>{name}</p>
            <div className='flex flex-col items-center'>
                {
                    questions.map(quiz => <QuizCard key={quiz.id} quiz={quiz}></QuizCard>)
                }
            </div>
        </div>
    );
};

export default Quiz;