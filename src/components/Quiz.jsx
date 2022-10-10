import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';
//import Result from './Result';

const Quiz = () => {
    const quizesData = useLoaderData();
    const { questions, name, total } = quizesData.data;
    const [count, setCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);

    console.log(total, count, correctCount, wrongCount);
    return (
        <div>
            <p className='text-4xl text-center p-10'>{name}</p>
            <div className='flex'>
                <div className='w-3/4 flex flex-col items-end'>
                    {
                        questions.map(quiz => <QuizCard
                            key={quiz.id}
                            quiz={quiz}

                            setCount={setCount}

                            setCorrectCount={setCorrectCount}

                            setWrongCount={setWrongCount}
                        ></QuizCard>)
                    }
                </div>
                <div className='w-1/5'>
                    {/* {
                        total === count && <Result 
                        count={count} 
                        correctCount={correctCount} 
                        wrongCount={wrongCount}
                        setCount={setCount}
                        setCorrectCount={setCorrectCount}
                        setWrongCount={setWrongCount}></Result>
                    } */}
                </div>
            </div>
        </div>
    );
};

export default Quiz;