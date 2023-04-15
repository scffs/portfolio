import React from 'react';

import {socialLinks} from './socialsList.js';

const SocialLinks = () => {
    return (
        <>
          <pre>
              <span className='const'>const</span> <span className='title'>socialLinks</span> <span className='blue'>=</span> <span>{"{"}</span>
          </pre>
            {socialLinks.map(({site, link, text}, id) => {
                return (
                    <pre key={id}>&nbsp;&nbsp;
                        <span className='text'>{site}</span><span>:</span><a className='link' href={link} target='_blank' rel='noreferrer'> '{text}'</a><span>,</span>
                    </pre>
                )
            })}
            <span>{'}'}</span>
        </>
    );
};

export default SocialLinks;