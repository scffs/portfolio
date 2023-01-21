import React, {useState} from 'react'

import {CgProfile} from 'react-icons/cg'

import {Link} from 'react-router-dom'

import logo from '../../../assets/img/ava.jpg'

import styles from './ProfileModal.module.scss'
import Avatar from "../../Avatar/Avatar";

const ProfileModal = ({name, role}) => {
    const[isShow, setIsShow] = useState(false)

    return (
        <>
            <CgProfile onClick={() => setIsShow(!isShow)} />
            {isShow ?
                <div className={styles.profileCard}>
                    <div className={styles.top}>
                        <div className={styles.userInfo}>
                            <Link
                                to='/profile'
                                className={styles.name}
                                onClick={() => setIsShow(!isShow)}
                            >
                                <Avatar width='35' height='35' borderRadius='50'  src={logo}/>
                                <span>{name}</span>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <p>Статус: <span className={styles.role}>{role}</span></p>
                    </div>
                </div>
                : ''
            }
        </>
    );
};

export default ProfileModal