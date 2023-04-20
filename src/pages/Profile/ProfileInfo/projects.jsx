// import {BriefcaseIcon, CodeBracketIcon} from "@heroicons/react/24/outline/index.js";
import React from "react";
import {BriefcaseIcon, CodeBracketIcon} from "@heroicons/react/24/outline/index.js";

export const projects = [
    {
        name: 'React Clock',
        link: 'https://github.com/scffs/react-clock'
    },
    {
        name: 'Portfolio [Vite]',
        link: 'https://github.com/scffsz/portfoliovite'
    },
    {
        name: 'Portfolio [Webpack]',
        link: 'https://github.com/scffsz/portfolio'
    },
    {
        name: 'MDN Translate',
        link: 'https://github.com/scffs?org=mdn&year_list=1'
    }
];
export const basics = [
    { title: 'Age', text: '18' },
    { title: 'City', text: 'Tomsk' },
    { title: <CodeBracketIcon title="Specialty" />, text: 'Frontend' },
    { title: <BriefcaseIcon title="Job" />, text: 'undefined', comment: 'studying' },
];

export const activity = [
    { title: 'ReactJS', text: 'Contributor' },
    { title: 'Mozilla', text: 'Contributor' },
    { title: 'MDN', text: 'Contributor' },
    { title: 'VKTesters', text: 'Tester' },
    { title: 'Eva', text: 'Co-author' },
    { title: 'Habr', text: 'Author' },
];