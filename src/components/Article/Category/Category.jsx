import React from 'react'

import './Category.scss'

/**
 * @param {array} tags
*/

const Category = ({tags}) => (
    tags.map((tag, id) =>
        <span key={id} className={`tag tag-${id + 1}`}>{tag}</span>
    )
)

export default Category