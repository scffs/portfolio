import React from 'react';

import { BriefcaseIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export const projects = [
  { name: 'Social-network', link: 'https://github.com/scffs/social-network' },
  { name: 'Tree view', link: 'https://github.com/scffs/tree-view' },
  { name: 'Exercises MiniApp', link: 'https://github.com/ExercisesMiniApp' },
  { name: 'Upload YD', link: 'https://github.com/scffs/upload-yandex-disk' },
];
export const basics = [
  { title: 'Age', text: '18' },
  { title: 'City', text: 'Tomsk' },
  { title: <CodeBracketIcon title='Specialty' />, text: 'Fullstack' },
  { title: <BriefcaseIcon title='Job' />, text: 'kotBread' },
];

export const activity = [
  { title: 'ReactJS', text: 'Contributor' },
  { title: 'Mozilla', text: 'Contributor, Moderator' },
  { title: 'MDN', text: 'Contributor' },
  { title: 'VKTesters', text: 'Member, Author' },
  { title: 'Habr', text: 'Author' },
];
