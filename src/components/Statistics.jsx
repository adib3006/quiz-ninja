import React, { useContext } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { TopicsContext } from './../Root';

const Statistics = () => {
    const data = useContext(TopicsContext);
    return (
        <div className='flex flex-col items-center'>
            <p className='text-5xl text-gray-500 m-5'>Topic Wise Question Data</p>
            <div className='m-4 rounded shadow-2xl'>
                    <BarChart width={600} height={400} data={data}>
                        <Bar dataKey="total" fill="#8884d8" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip/>
                    </BarChart>
            </div>
        </div>
    );
};

export default Statistics;