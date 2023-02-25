import './Categories.scss'

import categoriesList from './categoriesList'

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
                            className={value === category ? 'item active' : 'item'}
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

export default Categories