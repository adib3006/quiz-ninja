import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "./ErrorPage";
import Quiz from "./Quiz";
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
            }
        ]
    }
])

export default route;