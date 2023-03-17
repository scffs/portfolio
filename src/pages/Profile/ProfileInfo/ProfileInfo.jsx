import React, {lazy} from 'react';

const Avatar = lazy(() => import('../../../components/Avatar/Avatar.jsx'));

import logo from '../../../assets/img/ava.webp';

import s from './ProfileInfo.module.scss';

import {BriefcaseIcon, CodeBracketIcon} from '@heroicons/react/24/outline/index.js';

const ProfileInfo = () => {
    // TODO: Review the code
    return (
        <div className={s.profileWrapper}>
            <div className={s.profileInfoTop}>
                <Avatar
                    width='100' height='100'
                    borderRadius='80px'
                    src={logo}
                />
                <span className={s.name}>Semyon Okulov</span>
            </div>
            <div className={s.profileGroup}>
                <span className={s.title}>Basics</span>
                <div className={s.profileGroupItem}>
                    <span>Age - </span>
                    <span className={s.name}>18</span>
                </div>
                <div className={s.profileGroupItem}>
                    <span>City - </span>
                    <span className={s.name}>Tomsk</span>
                </div>
                <div className={s.profileGroupItem}>
                    <CodeBracketIcon title='Specialty' /> -
                    <span className={s.name}>Frontend</span>
                </div>
                <div className={s.profileGroupItem}>
                    <BriefcaseIcon title='Job' /> -
                    <span className={s.name}>undefined</span> <span className={s.comment}>// studying</span>
                </div>
            </div>
            <div className={s.profileGroup}>
                <span className={s.title}>Projects</span>
                <div className={s.profileGroupItem}>
                    <span>React Clock: </span>
                    <a className={s.name} href='https://github.com/scffs/react-clock'>link</a>
                </div>
                <div className={s.profileGroupItem}>
                    <span>Portfolio [Vite]: </span>
                    <a className={s.name} href='https://github.com/scffsz/portfoliovite'>link</a>
                </div>
                <div className={s.profileGroupItem}>
                    <span>Portfolio [Webpack]: </span>
                    <a className={s.name} href='https://github.com/scffsz/portfolio'>link</a>
                </div>
                <div className={s.profileGroupItem}>
                    <span>MDN Translate: </span>
                    <a className={s.name} href='https://github.com/scffs?org=mdn&year_list=1'>link</a>
                </div>
            </div>
            <div className={s.profileGroup}>
                <span className={s.title}>Activity</span>
                <div className={s.profileGroupItem}>
                    <span>ReactJS:</span>
                    <span className={s.name}>Contributor</span>
                </div>
                <div className={s.profileGroupItem}>
                    <span>Mozilla:</span>
                    <span className={s.name}>Contributor</span>
                </div>
                <div className={s.profileGroupItem}>
                    <span>MDN</span>
                    <span className={s.name}>Contributor</span>
                </div>
                <div className={s.profileGroupItem}>
                    <span>VKTesters:</span>
                    <span className={s.name}>Tester</span>
                </div>
                <div className={s.profileGroupItem}>
                    <span>Eva</span>
                    <span className={s.name}>Co-author</span>
                </div>
                <div className={s.profileGroupItem}>
                    <span>Habr:</span>
                    <span className={s.name}>Author</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;