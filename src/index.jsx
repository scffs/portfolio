import ReactDOM from 'react-dom/client';
import React, { lazy, Suspense } from 'react';

import Loading from './components/Loading/Loading';
const App = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>,
);
