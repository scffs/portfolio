import React, {lazy, Suspense} from 'react';
import {Outlet} from 'react-router-dom';
import Loading from "./Loading/Loading.jsx";

const Header = lazy(() => import('./Header/Header'));
const Footer = lazy(() => import('./Footer/Footer'));

const Layout = () => (
    <div style={
      {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        margin: '0 auto',
        maxWidth: '1300px',
        padding: '0 10px',
      }
    }>
      <Header/>
      <main style={{flex: '1 0 auto'}}>
        <Suspense fallback={<Loading />}>
          <Outlet/>
        </Suspense>
      </main>
      <Footer/>
    </div>
);

export default Layout;