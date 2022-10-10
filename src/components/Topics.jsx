import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';

const Topics = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data;
    console.log(topics);
    return (
        <div>
            <Header></Header>
        </div>
    );
};

export default Topics;