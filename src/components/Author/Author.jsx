import React from 'react'

import s from './Author.module.scss'
import LogoPreview from '../../utils/logo.png'

const Author = ({authorLogo, author}) => (
    <div className={s.author}>
        <span className={s.authorName}>{author || 'Аноним'}</span>
        <img
            className={s.authorLogo}
            src={authorLogo || LogoPreview}
            alt="author logo"
        />
    </div>
);

export default Author