import { lazy } from 'react';

const Contacts = lazy(() => import('./Contacts'));
const Profile = lazy(() => import('./Profile'));
const Projects = lazy(() => import('./Projects'));
const Stack = lazy(() => import('./Stack'));
const Settings = lazy(() => import('./Settings'));

export {
  Contacts, Stack, Projects, Profile, Settings,
};
