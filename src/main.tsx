import { lazy } from 'react';
import { createRoot } from 'react-dom/client';

import '@vkontakte/vkui/dist/cssm/styles/themes.css';

const AppWrapper = lazy(() => import('./AppWrapper'));

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(<AppWrapper />);
