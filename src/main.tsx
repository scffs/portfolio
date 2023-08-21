import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import '@vkontakte/vkui/dist/cssm/styles/themes.css';
import './normalize.css';

const AppWrapper = lazy(() => import('./AppWrapper'));

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
  <Suspense>
    <AppWrapper />
  </Suspense>,
);
