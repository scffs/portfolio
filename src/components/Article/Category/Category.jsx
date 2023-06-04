import React, { memo } from 'react';

import './Category.scss';

const Category = memo(({ id, tag }) =>
    <span className={`tag tag-${id + 1}`}>{tag}</span>
);

export default Category;