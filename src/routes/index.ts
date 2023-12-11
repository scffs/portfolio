import { createHashRouter, RouteWithoutRoot } from '@vkontakte/vk-mini-apps-router';

export const PAGE_MAIN = '/';
export const PAGE_PROFILE = '/profile';
export const PAGE_CONTACTS = '/contacts';
export const PAGE_PROJECTS = '/projects';
export const PAGE_STACK = '/stack';
export const PAGE_SETTINGS = '/settings';

export const VIEW_PROFILE = 'profile';
export const VIEW_CONTACTS = 'contacts';
export const VIEW_PROJECTS = 'projects';
export const VIEW_STACK = 'stack';
export const VIEW_SETTINGS = 'settings';

const routes: RouteWithoutRoot[] = [
  {
    path: PAGE_MAIN,
    panel: VIEW_PROFILE,
    view: VIEW_PROFILE,
  },
  {
    path: PAGE_PROFILE,
    panel: VIEW_PROFILE,
    view: VIEW_PROFILE,
  },
  {
    path: PAGE_CONTACTS,
    panel: VIEW_CONTACTS,
    view: VIEW_CONTACTS,
  },
  {
    path: PAGE_PROJECTS,
    panel: VIEW_PROJECTS,
    view: VIEW_PROJECTS,
  },
  {
    path: PAGE_STACK,
    panel: VIEW_STACK,
    view: VIEW_STACK,
  },
  {
    path: PAGE_SETTINGS,
    panel: VIEW_SETTINGS,
    view: VIEW_SETTINGS,
  },
];

export const router = createHashRouter(routes);
