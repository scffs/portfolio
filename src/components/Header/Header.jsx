import React, {lazy, memo, useState} from 'react';

const Menu = lazy(() => import('./Menu/Menu'));
const Profile = lazy(() => import('./Profile/Profile'));

import s from './Header.module.scss';

const Header = () =>{
  const [categoryId, setCategoryId] = useState(0);

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Menu value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
        <Profile name="Scoffs" role="Developer"/>
      </nav>
    </header>
  )
}

export default memo(Header);