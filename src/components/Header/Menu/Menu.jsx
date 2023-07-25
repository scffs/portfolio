import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { menuList } from '../menuList';

import s from './Menu.module.scss';

const Menu = ({ value, onClickCategory }) => {
  const [isBurger, setIsBurger] = useState(false);

  const menuRef = useRef(null);

  const handleClick = useCallback(() => {
    setIsBurger(false);
  }, []);

  useEffect(() => {
    if (isBurger) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
  }, [isBurger]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsBurger(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <button
        aria-label='Menu'
        onClick={() => setIsBurger(!isBurger)}
        className={s.burger}
      >
        {isBurger ? <XMarkIcon width='2.5em' height='2.5em' /> : <Bars3Icon width='2.5em' height='2.5em' />}
      </button>
      <ul className={isBurger ? s.menu : s.hidden} ref={menuRef}>
        {menuList.map(({ title, id, src, component }) => {
          const isActive = value === id;
          return (
            <li key={id} className={`${isActive ? s.active : ''}`} onClick={handleClick}>
              <Link aria-label={title} className={s.headerLink} to={src} onClick={() => onClickCategory(id)}>
                {component}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Menu;
