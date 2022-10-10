import React from 'react';

const Result = ({count,correctCount,wrongCount,setCount,setCorrectCount,setWrongCount}) => {
    const handleReset = () => {
        setCount(0);
        setCorrectCount(0);
        setWrongCount(0);
    }
    return (
        <div className='text-center'>
            <p>Total Questions: {count}</p>
            <p>Correct: {correctCount}</p>
            <p>Wrong: {wrongCount}</p>
            <button onClick={handleReset}>Reset Counter</button>
        </div>
    );
};

export default Result;