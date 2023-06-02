import React, {memo} from 'react';

import s from './Search.module.scss';

const Search = ({search, setSearch}) => {
    return (
      <input
        className={s.input}
        type='text'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder='Search...'
      />
    );
};

export default memo(Search);