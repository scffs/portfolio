import React from 'react'

import s from './Author.module.scss'
import LogoPreview from '../../utils/logo.png'

const Author = ({authorLogo, authorName}) => {
    return (
        <div className={s.author}>
            <span className={s.authorName}>{(authorName || null) ?? 'Аноним'}</span>
            <img
                className={s.authorLogo}
                src={(authorLogo || null) ?? LogoPreview}
                alt='img'
            />
        </div>
    );
};

export default Author;