import React from 'react';

import { BriefcaseIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export const projects = [
  { name: 'Social-network', link: 'https://github.com/scffs/social-network' },
  { name: 'Tree view', link: 'https://github.com/scffs/tree-view' },
  { name: 'Exercises MiniApp', link: 'https://github.com/ExercisesMiniApp/Frontend' },
];
export const basics = [
  { title: 'Age', text: '18' },
  { title: 'City', text: 'Tomsk' },
  { title: <CodeBracketIcon title='Specialty' />, text: 'Frontend' },
  { title: <BriefcaseIcon title='Job' />, text: 'kotbread' },
];

export const activity = [
  { title: 'ReactJS', text: 'Contributor' },
  { title: 'Mozilla', text: 'Contributor' },
  { title: 'MDN', text: 'Contributor' },
  { title: 'VKTesters', text: 'Member' },
  { title: 'Habr', text: 'Author' },
];
