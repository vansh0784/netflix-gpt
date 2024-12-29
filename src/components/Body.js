import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Browse from './Browse';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const Body = () => {
    const routes=createBrowserRouter([
        {
          path:"/",
          element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
          path:"/signup",
          element:<Signup/>
        }
      ])
  return (
    <RouterProvider router={routes}>

    </RouterProvider>
  )
}

export default Body