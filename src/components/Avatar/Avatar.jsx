import React from 'react'
const Avatar = ({width, height, borderRadius, src}) => {
    return (
        <img style={{
            width: `${width}`,
            height:`${height}`,
            borderRadius: `${borderRadius}`,

        }}
            src={src}
            alt="ava"
        />
    );
};

export default Avatar;