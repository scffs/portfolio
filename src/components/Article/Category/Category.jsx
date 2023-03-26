import React from 'react';

import './Category.scss';

/**
 * @param {id} id
 * @param {string} tag
 */

const Category = ({id, tag}) => (
  <span className={`tag tag-${id + 1}`}>{tag}</span>
);

export default Category;