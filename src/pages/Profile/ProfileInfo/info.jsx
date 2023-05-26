import React from 'react';

import { BriefcaseIcon, CodeBracketIcon } from '@heroicons/react/24/outline/index.js';

export const projects = [
    { name: 'Social-network', link: 'https://github.com/scffs/social-network' },
    { name: 'Portfolio', link: 'https://github.com/scffsz/portfolio' },
    { name: 'Tree view', link: 'https://github.com/scffs/tree-view' },
    { name: 'Simple SPA', link: 'https://github.com/scffs/simple-spa' },
];
export const basics = [
    { title: 'Age', text: '18' },
    { title: 'City', text: 'Tomsk' },
    { title: <CodeBracketIcon title='Specialty' />, text: 'Frontend' },
    { title: <BriefcaseIcon title='Job' />, text: 'Master service' },
];

export const activity = [
    { title: 'ReactJS', text: 'Contributor' },
    { title: 'Mozilla', text: 'Contributor' },
    { title: 'MDN', text: 'Contributor' },
    { title: 'VKTesters', text: 'Tester' },
    { title: 'Habr', text: 'Author' },
];