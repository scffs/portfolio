import React from 'react'

import './Tag.scss'

const Tag = ({tags}) => (
    tags.map((tag, id) =>
        <span key={id}
              className={`tag tag-${id + 1}`}>{tag}</span>
    )
)

export default Tag