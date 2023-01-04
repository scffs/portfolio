import './Categories.scss'

import categoriesList from './categoriesList'

const Categories = ({value, onClickCategory}) => {
    return (
        <div>
            <ul className='categories'>
                {
                    categoriesList.map((category, id) =>
                        <li
                            className={value === id ? 'item active' : 'item'}
                            key={id}
                            onClick={() => (onClickCategory(id))}
                        >
                            {category}
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Categories;