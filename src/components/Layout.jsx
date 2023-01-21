import React from 'react';

import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({children}) => {
    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                margin: '0 auto',
                maxWidth: '1200px',
                padding: '0 10px'
            }
        }>
            <Header />
            <main style={{flex: '1 0 auto'}}>{children}</main>
            <Footer style={{flex: '0 0 auto'}} />
        </div>
    );
};

export default Layout