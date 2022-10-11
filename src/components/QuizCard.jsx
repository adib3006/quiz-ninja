import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const QuizCard = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    const handleAnswer = (option) => {
        if (option === correctAnswer) {
            toast.success('Correct answer', { autoClose: 500 });
        }
        else {
            toast.error('Wrong answer', { autoClose: 500 });
        }
    }
    const handleShowAnswer = () => {
        toast.info(correctAnswer,{autoClose:1000});
    }
    return (
        <div className='w-2/3 text-center p-6 my-4 border rounded shadow-lg'>
            <div className='flex'>
                <p className='w-11/12 mb-4 text-xl text-gray-600'>{question}</p>
                <div onClick={handleShowAnswer} className='w-1/12'><button className='text-gray-600'><FontAwesomeIcon icon={faEye} /></button></div>
            </div>
            <ul className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-2 grid-cols-1'>
                {
                    options.map((option, index) => <li key={index} className='mt-3'><button onClick={() => handleAnswer(option)} className='w-full px-4 py-2 rounded bg-slate-200 hover:bg-slate-400'>{option}</button></li>)
                }
            </ul>
        </div>
    );
};

export default QuizCard;