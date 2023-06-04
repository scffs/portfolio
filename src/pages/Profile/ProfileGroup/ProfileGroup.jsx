import React from 'react';

import s from './ProfileGroup.module.scss';

const ProfileGroup = ({ title, items }) => {
  return (
    <>
      <h4 className={s.title}>{title}</h4>
      <ul className={s.profileGroup}>
        {items.map((item, id) => (
          <li className={s.profileGroupItem} key={id}>
            <span>{item.title} - </span>
            {item.href ? (
              <a className={s.name} href={item.href} target='_blank' rel='noreferrer'>
                {item.text}
              </a>
            ) : (
              <span className={s.name}>{item.text}</span>
            )}
            {item.comment && <span className={s.comment}>// {item.comment}</span>}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProfileGroup;