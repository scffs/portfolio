import ReactDOM from 'react-dom/client';
import React, {lazy, Suspense} from 'react';

import Loading from './components/Loading/Loading.jsx';
const App = lazy(() => import('./App.jsx'));

ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={<Loading />}>
        <App />
    </Suspense>,
);