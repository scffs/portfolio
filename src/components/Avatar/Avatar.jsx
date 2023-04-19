import React from 'react';

import './Avatar.scss';

/**
 * @param {number} width
 * @param {number} height
 * @param {string} borderRadius
 * @param {string} src
 * @param {boolean} isHexagon
 * @param {number} hexagonHeight
 * @param {number} imageLeft
 */

const Avatar = ({width, height, borderRadius, src, isHexagon, hexagonHeight, imageLeft}) => {
    const hexagonStyle = isHexagon && {
        width: `${hexagonHeight * 0.645}px`,
        height: `${hexagonHeight}px`,
        borderRadius: `${hexagonHeight / 10}px`,
        backgroundColor: '#ccc'
    };

    const imageStyle = isHexagon ? {
        position: 'absolute',
        width: `${width}px`,
        height: `${height}px`,
        zIndex: '1',
        clipPath: 'polygon(51.35% -2.07%, 95.22% 24.72%, 95.16% 76.05%, 50.4% 102.17%, 6.34% 75.5%, 4.25% 24.35%)',
        borderRadius: '100%',
        left: `${imageLeft}px`,
    } : {
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}`,
    };

    return (
        <>
            {isHexagon
                ? <div className='hexagon' style={hexagonStyle}>
                    <img className='image' style={imageStyle}
                         src={src}
                         alt='avatar'
                    />
                </div>
                : <img className='image' style={imageStyle}
                       src={src}
                       alt='avatar'
                />}
        </>
    );
};

export default Avatar;
