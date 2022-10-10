import React from 'react';
import { toast } from 'react-toastify';

const QuizCard = ({quiz,setCount,setCorrectCount,setWrongCount}) => {
    const {question,options,correctAnswer} = quiz;
    const handleAnswer = (option) => {
        console.log(option);
        if(option === correctAnswer){
            toast.success('Correct answer',{autoClose:500});
            setCount(previous=>previous+1);
            setCorrectCount(previous=>previous+1);
        }
        else{
            toast.error('Wrong answer',{autoClose:500});
            setCount(previous=>previous+1);
            setWrongCount(previous=>previous+1);
        }
    }
    return (
        <div className='w-2/3 text-center p-6 my-4 border rounded shadow-lg'>
            <p className='mb-4'>{question}</p>
            <ul className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-2 grid-cols-1'>
                {
                    options.map((option,index)=><li key={index} className='mt-3'><button onClick={()=>handleAnswer(option)} className='w-full px-4 py-2 rounded bg-slate-200 hover:bg-slate-400'>{option}</button></li>)
                }
            </ul>
            <button></button>
            <p>Correct answer: {correctAnswer}</p>
        </div>
    );
};

export default QuizCard;