import { lazy, Suspense } from 'react';
import { render } from 'preact';

import '@vkontakte/vkui/dist/cssm/styles/themes.css';
import './normalize.css';

const AppWrapper = lazy(() => import('./AppWrapper'));

const domNode = document.getElementById('root');
const App = (
  <Suspense>
    <AppWrapper />
  </Suspense>
);

render(App, domNode);
