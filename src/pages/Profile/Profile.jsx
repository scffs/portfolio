import React from 'react'

import logo from '../../assets/img/ava.jpg'

import Avatar from '../../components/Avatar/Avatar'

import s from './Profile.module.scss'

import {cardItems} from './cardItems'

const Profile = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10%'
        }}>
            <Avatar width='300' height='300' borderRadius='50' src={logo} />
            <div className={s.card}>
                <div>
                    {
                        cardItems.map(item => (
                            <h3 key={item.id}
                                className={s.text}
                            >
                                {item.text} <a href={item.link} target="_blank" rel="noreferrer">{item.linkText}</a> [<a href={item.profileLink}>Profile</a>]
                            </h3>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile