import React from 'react'
const Avatar = ({width, height, borderRadius, src}) => {
    return (
        <img style={{
            width: `${width}px`,
            height:`${height}px`,
            borderRadius: `${borderRadius}px`
        }}
            src={src}
            alt="ava"
        />
    );
};

export default Avatar;