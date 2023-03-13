import React, {useState} from 'react';

import s from './Header.module.scss';

import Menu from './Menu/Menu';
import Profile from './Profile/Profile';

const Header = () =>{
    const [categoryId, setCategoryId] = useState(0);

    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <Menu value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
                <Profile name='Scoffs' role='Developer' />
            </nav>
        </header>
    )
}

export default Header;