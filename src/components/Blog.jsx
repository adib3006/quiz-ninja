import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='m-5 p-5 rounded shadow-lg text-center'>
                <p className='text-xl text-gray-600'>What is the Purpose of React Routers?</p>
                <p className='text-gray-600'>React routers allows a webpage to become SPA or single page application. It helps websites become more efficient and fast. React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.</p>
            </div>
            <div className='m-5 p-5 rounded shadow-lg text-center'>
                <p className='text-xl text-gray-600'>How does Context API works?</p>
                <p className='text-gray-600'>Context API allows all component within its provider to access the values passed via value property without props drilling. It loads data in its root component and provides necessary values accross the website. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='m-5 p-5 rounded shadow-lg text-center'>
                <p className='text-xl text-gray-600'>UseRef hook functionalities</p>
                <p className='text-gray-600'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.</p>
            </div>
        </div>
    );
};

export default Blog;