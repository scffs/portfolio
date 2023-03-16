import './Categories.scss';

import categoriesList from './categoriesList';
import {memo} from "react";

/**
 * @param {number} value
 * @param {function} onClickCategory
*/

const Categories = ({value, onClickCategory}) => {
    return (
        <div>
            <ul className='categories'>
                {
                    categoriesList.map((category, id) =>
                        <li
                            className={`item ${value === category && 'active'}`}
                            key={id}
                            onClick={() => (onClickCategory(category))}
                        >
                            {category}
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default memo(Categories);