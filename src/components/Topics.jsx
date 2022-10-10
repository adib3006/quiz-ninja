import React, { useContext } from 'react';
import Header from './Header';
import Topic from './Topic';
import { TopicsContext } from './../Root';

const Topics = () => {
    const topics = useContext(TopicsContext);
    return (
        <div>
            <Header></Header>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 md:grid-cols-2 sm:row-gap-6 sm:grid-cols-1'>
                    {
                        topics.map(topic=><Topic key={topic.id} topic={topic}></Topic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Topics;