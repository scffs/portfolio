import React, {lazy, Suspense} from 'react';

import Loading from './Loading/Loading.jsx';
const Header = lazy(() => import('./Header/Header'));
const Footer = lazy(() => import('./Footer/Footer'));

const Layout = ({children}) => (
    <Suspense fallback={<Loading />}>
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
            <Header />
            <main style={{flex: '1 0 auto'}}>
                {children}
            </main>
            <Footer />
        </div>
    </Suspense>
);

export default Layout;