import React from 'react'

import s from './Header.module.scss'

import Menu from './Menu/Menu';
import UserMenu from './UserMenu/UserMenu';

const Header = () => (
    <header className={s.header}>
        <nav className={s.nav}>
            <Menu />
            <UserMenu />
        </nav>
    </header>
)
export default Header;