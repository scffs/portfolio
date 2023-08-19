import { createRoot } from 'react-dom/client';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';

import App from './App';
import NotFound from './components/NotFound';

import { router } from './routes';
import '@vkontakte/vkui/dist/vkui.css';
import './normalize.css';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
  <ConfigProvider appearance='dark'>
    <AdaptivityProvider>
      <RouterProvider router={router} notFound={<NotFound />}>
        <App />
      </RouterProvider>
    </AdaptivityProvider>
  </ConfigProvider>,
);
