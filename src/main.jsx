import React, {lazy} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './styles/index.scss';

import Layout from './components/Layout.jsx';
const Profile = lazy(() => import('./pages/Profile/Profile.jsx'));
const Articles = lazy(() => import('./pages/Articles/Articles.jsx'));
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/portfolio/',
                element: <Home />,
            },
            {
                path: '/portfolio/news',
                element: <Articles />,
            },
            {
                path: '/portfolio/profile',
                element: <Profile />,
            },
            {
                path: '/portfolio/*',
                element: <NotFound />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);