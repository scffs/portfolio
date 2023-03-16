import React, {memo} from 'react';

import s from './Search.module.scss';

/**
 * @param {string} search
 * @param {function} setSearch
*/

const Search = ({search, setSearch}) => {
    return (
        <input
            className={s.input}
            type='text'
            value={search}
            onChange={(event) => setSearch(event.target.value)}
        />
    );
};

export default memo(Search);