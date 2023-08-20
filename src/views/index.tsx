import { lazy } from 'react';

const Contacts = lazy(() => import('./Contacts'));
const Profile = lazy(() => import('./Profile'));
const Projects = lazy(() => import('./Projects'));
const Stack = lazy(() => import('./Stack'));

export {
  Contacts, Stack, Projects, Profile,
};
