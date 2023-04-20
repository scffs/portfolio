import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom';

import './styles/index.scss';

const Layout = lazy(() => import('./components/Layout.jsx'));
const Profile = lazy(() => import('./pages/Profile/Profile.jsx'));
const Articles = lazy(() => import('./pages/Articles/Articles.jsx'));
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'));

const App = () => (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Layout>
                <Routes>
                    <Route path="/portfolio/" element={<Home />} />
                    <Route path="/portfolio/news" element={<Articles />} />
                    <Route path="/portfolio/profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </Suspense>
    </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>,
);