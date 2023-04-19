import React from 'react';

import { UserCircleIcon } from '@heroicons/react/20/solid/index.js';

import s from './Author.module.scss';

/**
 * @param {string} authorLogo
 * @param {string} author
 */

const Author = ({authorLogo, author}) => (
  <div className={s.author}>
    <span className={s.authorName}>{author || 'Аноним'}</span>
    {authorLogo
        ? <img className={s.authorLogo}
           src={authorLogo}
           alt='author logo'
        />
        : <UserCircleIcon size="2em"/>
    }
  </div>
);

export default Author;