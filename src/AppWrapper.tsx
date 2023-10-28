import { lazy } from 'react';
import { AdaptivityProvider } from '@vkontakte/vkui';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';

import Suspense from './components/Suspense';

import { router } from './routes';

const App = lazy(() => import('./App'));
const NotFound = lazy(() => import('./components/NotFound'));

const AppWrapper = () => (
  <AdaptivityProvider>
    <RouterProvider router={router} notFound={<NotFound />}>
      <Suspense id='app' mode='screen'>
        <App />
      </Suspense>
    </RouterProvider>
  </AdaptivityProvider>
);

export default AppWrapper;
