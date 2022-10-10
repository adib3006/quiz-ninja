import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import NavBar from './components/NavBar';

export const TopicsContext = createContext([]);

const Root = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data;
    console.log(topics);
    return (
        <div>
            <TopicsContext.Provider value={topics}>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </TopicsContext.Provider>
        </div>
    );
};

export default Root;