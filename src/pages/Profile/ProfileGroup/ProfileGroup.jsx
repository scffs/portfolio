import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.scss";

const ProfileGroup = ({ title, items }) => {
    return (
        <div className={s.profileGroup}>
            <span className={s.title}>{title}</span>
            {items.map((item, id) => (
                <div className={s.profileGroupItem} key={id}>
                    <span>{item.title} - </span>
                    {item.href ? (
                        <a className={s.name} href={item.href}>
                            {item.text}
                        </a>
                    ) : (
                        <span className={s.name}>{item.text}</span>
                    )}
                    {item.comment && <span className={s.comment}>// {item.comment}</span>}
                </div>
            ))}
        </div>
    );
};

export default ProfileGroup;