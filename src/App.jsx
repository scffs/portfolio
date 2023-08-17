import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/index.scss';

const Layout = lazy(() => import('./components/Layout'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const Home = lazy(() => import('./pages/Home/Home'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Routes>
          <Route path='/portfolio/' element={<Home />} />
          <Route path='/portfolio/profile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  </BrowserRouter>
);

export default App;
