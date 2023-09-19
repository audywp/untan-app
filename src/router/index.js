import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Users from '../pages/users';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/users',
    element: <Users />,
  },
]);
