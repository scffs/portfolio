import {
  lazy, useCallback, useEffect, useState,
} from 'react';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';

import NotFound from './components/NotFound';
import Suspense from './components/Suspense';
import ToggleTheme from './components/ToggleTheme';

import { router } from './routes';

const App = lazy(() => import('./App'));

const AppWrapper = () => {
  const [appearance, setAppearance] = useState<'light' | 'dark'>('light');

  const toggleAppearance = useCallback(() => {
    const newAppearance = appearance === 'light' ? 'dark' : 'light';
    setAppearance(newAppearance);
    localStorage.setItem('theme', newAppearance);
  }, [appearance]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setAppearance(savedTheme as 'light' | 'dark');
    }
  }, []);

  return (
    <ConfigProvider appearance={appearance}>
      <AdaptivityProvider>
        <RouterProvider router={router} notFound={<NotFound />}>
          <Suspense id='app'>
            <App />
            <ToggleTheme toggleAppearance={toggleAppearance} appearance={appearance} />
          </Suspense>
        </RouterProvider>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default AppWrapper;
