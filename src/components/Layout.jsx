import React, {Suspense} from 'react';

import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import {Outlet} from 'react-router-dom';

const Layout = () => (
    <div style={
        {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            margin: '0 auto',
            maxWidth: '1300px',
            padding: '0 10px'
        }
    }>
        <Header />
        <main style={{flex: '1 0 auto'}}>
            <Suspense>
                <Outlet />
            </Suspense>
        </main>
        <Footer />
    </div>
);

export default Layout;