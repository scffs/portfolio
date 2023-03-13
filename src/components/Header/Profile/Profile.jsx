import React from 'react';

import {Link} from 'react-router-dom';

import logo from '../../../assets/img/ava.webp';

import Avatar from '../../Avatar/Avatar';

import s from './Profile.module.scss';

/**
 * @param {string} name
 * @param {string} role
*/

const Profile = ({name, role}) => {
    return (
        <>
            <div className={s.profileCard}>
                <div className={s.top}>
                    <div className={s.userInfo}>
                        <Link
                            to='/portfoliovite/profile'
                            className={s.name}
                        >
                            <Avatar
                                width='45'
                                height='45'
                                borderRadius='50px'
                                src={logo}
                                isHexagon='yes'
                                hexagonHeight='45'
                                imageLeft='-8'
                            />
                            <span>{name}</span>
                        </Link>
                    </div>
                </div>
                <div className={s.bottom}>
                    <p>Status:<span className={s.role}> {role}</span></p>
                </div>
            </div>
        </>
    );
};

export default Profile;