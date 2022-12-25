import React from 'react'
import s from './Header.module.scss'
import Menu from "./Menu/Menu";
import UserMenu from "./UserMenu/UserMenu";

const Header = () => (
    <header className={s.header}>
        <div className="container">
            <nav className={s.nav}>
                <Menu />
                <UserMenu />
            </nav>
        </div>
    </header>
)
export default Header;