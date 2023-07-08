import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/img/avaSmall.jpg';

import Avatar from '../../Avatar/Avatar';

import s from './Profile.module.scss';

const Profile = ({ name, role }) => {
  return (
    <div className={s.profileCard}>
      <div className={s.top}>
        <div className={s.userInfo}>
          <Link to='/portfolio/profile' className={s.name}>
            <Avatar
              width='45px'
              height='45px'
              borderRadius='50px'
              src={logo}
              isHexagon
              hexagonHeight='45'
              imageLeft='-8'
            />
            <span>{name}</span>
          </Link>
        </div>
      </div>
      <div className={s.bottom}>
        <p>Status: <span className={s.role}>{role}</span></p>
      </div>
    </div>
  );
};

export default memo(Profile);
