import React, {useEffect, useState} from 'react'

import {CgProfile} from 'react-icons/cg'

import {Link} from 'react-router-dom'

import logo from '../../../assets/img/ava.jpg'
import Avatar from '../../Avatar/Avatar'

import s from './ProfileModal.module.scss'

const ProfileModal = ({name, role}) => {
    const[isShow, setIsShow] = useState(false)
    //
    // useEffect(() => {
    //     if(isShow){
    //         document.addEventListener('click', function() {
    //             setIsShow(!isShow)
    //             console.log(isShow)
    //         });
    //     }
    // }, [isShow]);

    return (
        <>
            <CgProfile onClick={() => setIsShow(!isShow)} />
            <div className={`${isShow && s.profileCard} ${!isShow && s.hidden}`}>
                <div className={s.top}>
                    <div className={s.userInfo}>
                        <Link
                            to='/profile'
                            className={s.name}
                            onClick={() => setIsShow(!isShow)}
                        >
                            <Avatar width='35'
                                    height='35'
                                    borderRadius='50'
                                    src={logo}
                            />
                            <span>{name}</span>
                        </Link>
                    </div>
                </div>
                <div className={s.bottom}>
                    <p>Статус: <span className={s.role}>{role}</span></p>
                </div>
            </div>
        </>
    );
};

export default ProfileModal