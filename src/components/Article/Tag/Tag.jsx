import React from 'react'

import s from './Tag.module.scss'

const Tag = ({tag, text}) => (
    <span className={`${tag === 1 ?
        s.tagStudy : tag === 3 ?
            s.tagNote : s.tagProgramming}`
    }>
            {text}
        </span>
);

export default Tag;