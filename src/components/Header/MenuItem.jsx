import {HomeIcon, NewspaperIcon} from '@heroicons/react/24/outline/index.js';

const menuList = [
    {
        id: 1,
        title: 'Home',
        src: '/portfolio',
        component: <HomeIcon width="2.5rem" height="2.5rem" />,
    },
    {
        id: 2,
        title: 'News',
        src: '/portfolio/news',
        component: <NewspaperIcon width="2.5rem" height="2.5rem" />,
    }
]
export default menuList;