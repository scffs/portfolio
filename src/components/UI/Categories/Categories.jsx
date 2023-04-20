import React, { memo } from 'react';

import { categoriesList } from './categoriesList';

import './Categories.scss';

/**
 * @param {string} value
 * @param {function} onClickCategory
 */

const Categories = ({ value, onClickCategory }) => (
    <ul className="categories">
        {categoriesList.map((category) => (
            <li
                className={`item ${value === category ? 'active' : ''}`}
                key={category}
                onClick={() => onClickCategory(category)}
            >
                {category}
            </li>
        ))}
    </ul>
);

export default memo(Categories);
