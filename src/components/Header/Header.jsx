import React from 'react'

import s from './Header.module.scss'

import Menu from './Menu/Menu'
import Profile from './Profile/Profile'

const Header = () => (
    <header className={s.header}>
        <nav className={s.nav}>
            <Menu />
            <Profile name='Scoffs' role='Developer' />
        </nav>
    </header>
)
export default Header