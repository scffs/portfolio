import React from 'react'

import s from './Skill.module.scss'

const Skill = ({time, skill, knowledge}) => {
    return (
        <li className={s.block}>
            <div className={s.info}>
                <p className={s.time}>{time}</p>
                <p className={s.skill}>{skill}</p>
            </div>
            <ul className={s.knowledge}>
                {
                    knowledge.map((item, id) =>(
                        <li key={id}>{item}</li>
                    ))
                }
            </ul>
        </li>
    );
};

export default Skill