import React from 'react'

import {Link} from 'react-router-dom'
import {AiOutlineLogin} from 'react-icons/ai'

import ProfileModal from '../Modal/ProfileModal'
import s from '../UserMenu/UserMenu.module.scss'

const UserMenu = () => {
    return (
        <ul className={s.ul}>
            <li>
                <Link to='/register'>
                    <AiOutlineLogin aria-label='Register' />
                </Link>
            </li>
            <li className={s.itemProfile}>
                <ProfileModal name='Scoffs' role='Разработчик' />
            </li>
        </ul>
    );
};

export default UserMenu