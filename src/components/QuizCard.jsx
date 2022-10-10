import React from 'react';
import { toast } from 'react-toastify';

const QuizCard = ({quiz}) => {
    console.log(quiz);
    const {question,options,correctAnswer} = quiz;
    const handleAnswer = (option) => {
        console.log(option);
        if(option === correctAnswer){
            console.log('Correct answer');
            toast.success('Correct answer',{autoClose:500});
        }
        else{
            console.log('wrong answer');
            toast.error('Wrong answer',{autoClose:500});
        }
    }
    return (
        <div className='w-1/2 text-center p-6 my-4 border rounded'>
            <p className='mb-4'>{question}</p>
            <ul className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-2 grid-cols-1'>
                {
                    options.map(option=><li className='mt-3'><button onClick={()=>handleAnswer(option)} className='w-full px-4 py-2 bg-slate-200 hover:bg-slate-400'>{option}</button></li>)
                }
            </ul>
            <p>Correct answer: {correctAnswer}</p>
        </div>
    );
};

export default QuizCard;