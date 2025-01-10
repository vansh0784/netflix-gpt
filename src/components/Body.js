import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Browse from './Browse';
import AccountCreate from './AccountCreate';
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
        },
        {
          path:"/AccountCreate",
          element:<AccountCreate/>
        }
      ])
  return (
    <RouterProvider router={routes}>

    </RouterProvider>
  )
}

export default Body