import { createBrowserRouter } from "react-router-dom";
import LandingPageLayout from "../Page/LandingPageLayout";
import React from "react";
import PageNotFound from "../Components/PageNotFound";
import HomePage from "../Page/HomePage";



export const routeLayout = createBrowserRouter([
    {
        element:<LandingPageLayout/>
        ,children:[{
            path:"/", element:<HomePage/>
        }]

    },
    {path:"*", element:<PageNotFound/>}
])