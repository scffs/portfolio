import React from 'react';

import './Avatar.scss';

const Avatar = ({ width, height, borderRadius, src, isHexagon, hexagonHeight, imageLeft }) => {
  const hexagonStyle = isHexagon && {
    width: `${hexagonHeight * 0.645}px`,
    height: `${hexagonHeight}px`,
    borderRadius: `${hexagonHeight / 10}px`,
    backgroundColor: '#ccc',
  };

  const imageStyle = isHexagon ?
    {
      position: 'absolute',
      width,
      height,
      zIndex: '1',
      clipPath:
        'polygon(50.28% 5.07%, 74.87% 5.44%, 101.23% 50.34%, 74.68% 95.03%, 26.21% 95.56%, -1.16% 51.21%, 25.67% 4.71%)',
      borderRadius: '100%',
      left: `${imageLeft}px`,
    } :
    {
      width,
      height,
      borderRadius,
    };

  return (
    <>
      {isHexagon ? (
        <div className={isHexagon && 'hexagon'} style={hexagonStyle}>
          <img
            className='image'
            style={imageStyle}
            src={src}
            alt='avatar'
          />
        </div>
      ) : (
        <img className='image' style={imageStyle} src={src} alt='avatar' />
      )}
    </>
  );
};

export default Avatar;
