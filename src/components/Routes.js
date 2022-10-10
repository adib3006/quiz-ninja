import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Blog from "./Blog";
import ErrorPage from "./ErrorPage";
import Quiz from "./Quiz";
import Statistics from "./Statistics";
import Topics from "./Topics";

const route = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Topics></Topics>
            },
            {
                path:'/topics',
                element:<Topics></Topics>
            },
            {
                path:'/topics/:id',
                loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element:<Quiz></Quiz>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])

export default route;