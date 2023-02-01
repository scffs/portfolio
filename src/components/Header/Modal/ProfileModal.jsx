import React, {useState} from 'react'

import {CgProfile} from 'react-icons/cg'

import {Link} from 'react-router-dom'

import logo from '../../../assets/img/ava.webp'
import Avatar from '../../Avatar/Avatar'

import s from './ProfileModal.module.scss'

const ProfileModal = ({name, role}) => {
    const[isShow, setIsShow] = useState(false)

    return (
        <>
            <CgProfile
               onMouseEnter={() => setIsShow(true)}
               onMouseLeave={() => setIsShow(false)}
               onClick={() => setIsShow(!isShow)}
            />
            <div
                className={isShow ? s.profileCard : s.hidden}
                onMouseEnter={() => setIsShow(true)}
                onMouseLeave={() => setIsShow(false)}
            >
                <div className={s.top}>
                    <div className={s.userInfo}>
                        <Link
                            to='/profile'
                            className={s.name}
                            onClick={() => setIsShow(false)}
                        >
                            <Avatar
                                width='35px'
                                height='35px'
                                borderRadius='50px'
                                src={logo}
                            />
                            <span>{name}</span>
                        </Link>
                    </div>
                </div>
                <div className={s.bottom}>
                    <p>Статус:<span className={s.role}> {role}</span></p>
                </div>
            </div>
        </>
    );
};

export default ProfileModal