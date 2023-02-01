import React from 'react'

import logo from '../../assets/img/ava.webp'

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
                    <pre style={{fontSize: '1.5rem'}}>
                        <span className='const'>const</span> <span className='title'>memberOf</span> <span className='blue'>=</span> <span>{"{"}</span>
                    </pre>
                    {
                        cardItems.map(({text, link, linkText, id}) => (
                            <h3 key={id} className={s.text}>
                                <pre> <span> </span>
                                    <span className='text'><a href={link} target="_blank" rel="noreferrer">{linkText}</a></span>
                                    <span>:</span><span className='link'> '{text}'</span>
                                    <span>{id === cardItems.length ? '' : ','}</span>
                                </pre>
                            </h3>
                        ))
                    }
                    <span style={{fontSize: '1.5rem'}}>{'}'}</span>
                </div>
            </div>
        </div>
    );
};

export default Profile