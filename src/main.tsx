import { lazy } from 'react';
import { createRoot } from 'react-dom/client';

import '@vkontakte/vkui/dist/vkui.css';
import './normalize.css';

const AppWrapper = lazy(() => import('./components/AppWrapper'));

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(<AppWrapper />);
