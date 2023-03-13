import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './styles/index.scss';

import Layout from './components/Layout.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Home from './pages/Home/Home.jsx';
import Articles from './pages/Articles/Articles.jsx';
import Profile from './pages/Profile/Profile.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/portfoliovite/',
                element: <Home />,
            },
            {
                path: '/portfoliovite/news',
                element: <Articles />,
            },
            {
                path: '/portfoliovite/profile',
                element: <Profile />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);