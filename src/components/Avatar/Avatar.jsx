import React from 'react'

/**
 * @param {string} width
 * @param {string} height
 * @param {string} borderRadius
 * @param {string} src
*/

const Avatar = ({width, height, borderRadius, src}) => (
    <img style={{
        width: `${width}`,
        height:`${height}`,
        borderRadius: `${borderRadius}`,

    }}
         src={src}
         alt="ava"
    />
);

export default Avatar