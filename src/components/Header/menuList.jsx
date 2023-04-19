import { HomeIcon, NewspaperIcon } from '@heroicons/react/24/outline/index.js';

export const menuList = [
    {
        id: 1,
        title: 'Home',
        src: '/portfolio/',
        component: <HomeIcon width='2.5em' height='2.5em' />,
    },
    {
        id: 2,
        title: 'News',
        src: '/portfolio/news',
        component: <NewspaperIcon width='2.5em' height='2.5em' />,
    }
]