import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'

import {BrowserRouter} from 'react-router-dom'

import App from './App'
import Layout from './components/Layout'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Layout children={<App />} />
    </BrowserRouter>
);