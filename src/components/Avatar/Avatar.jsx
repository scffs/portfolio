import React from 'react';
import './Avatar.scss';

const Avatar = ({ width, height, borderRadius, src, isHexagon, hexagonHeight, imageLeft }) => {
    const hexagonStyle = isHexagon && {
        width: `${hexagonHeight * 0.645}px`,
        height: `${hexagonHeight}px`,
        borderRadius: `${hexagonHeight / 10}px`,
        backgroundColor: '#ccc'
    };

    const imageStyle = isHexagon ? {
        position: 'absolute',
        width,
        height,
        zIndex: '1',
        clipPath: 'polygon(51.35% -2.07%, 95.22% 24.72%, 95.16% 76.05%, 50.4% 102.17%, 6.34% 75.5%, 4.25% 24.35%)',
        borderRadius: '100%',
        left: `${imageLeft}px`,
    } : {
        width,
        height,
        borderRadius,
    };

    return (
        <>
            {isHexagon
                ? <div className={isHexagon ? 'hexagon' : ''} style={hexagonStyle}>
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
