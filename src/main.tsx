import { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';

import NotFound from './components/NotFound';
import Suspense from './components/Suspense';

import { router } from './routes';
import '@vkontakte/vkui/dist/vkui.css';
import './normalize.css';

const App = lazy(() => import('./App'));

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(

  <ConfigProvider appearance='light'>
    <AdaptivityProvider>
      <RouterProvider router={router} notFound={<NotFound />}>
        <Suspense id='app'>
          <App />
          {' '}
        </Suspense>
        ,
      </RouterProvider>
    </AdaptivityProvider>
  </ConfigProvider>,

);
