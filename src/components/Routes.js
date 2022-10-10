import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "./ErrorPage";
import Topics from "./Topics";

const route = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
                element:<Topics></Topics>,
            },
            {
                path:'/topics',
                loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
                element:<Topics></Topics>,
            }
        ]
    }
])

export default route;