import React from 'react'

import './Avatar.scss'

/**
 * @param {string | number} width
 * @param {string | number} height
 * @param {string} borderRadius
 * @param {string} src
 * @param {boolean} isHexagon
*/

const Avatar = ({width, height, borderRadius, src, isHexagon}) => (
    <>
        {
            isHexagon ?
                <div className='hexagon'>
                    <img style={{
                        position: 'absolute',
                        width: `${width}px`,
                        height:`${height}px`,
                        zIndex: '1',
                        clipPath: 'polygon(63.9% 0.53%, 99.69% 37.79%, 86.94% 85.7%, 37.07% 98.8%, 0.8% 62.37%, 15.30% 12.46%)',
                        borderRadius: '100%',
                        left: '-62px',
                        transform: 'rotate(15deg)',
                        top: '0',
                    }}
                         src={src}
                         alt='ava'
                         className='image'
                    />
                </div>
                :
                <img style={{
                    width: `${width}`,
                    height:`${height}`,
                    borderRadius: `${borderRadius}`,
                }}
                     src={src}
                     alt="ava"
                />
        }
    </>
);

export default Avatar