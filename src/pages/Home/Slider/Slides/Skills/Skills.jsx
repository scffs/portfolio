import React from 'react';

import { skillsList } from './skillsList';

const Skills = () => {
  return (
    <>
      <pre>
        <span className='const'>const</span> <span className='title'>skills</span> <span className='blue'>=</span> <span>{'{'}</span>
      </pre>
      {skillsList.map(({ technology, knowledge }, id) => {
        return (
          <pre key={id}>&nbsp;&nbsp;
            <span className='text'>{technology}:</span><span></span><span className='link'>'{knowledge}'</span><span>,</span>
          </pre>
        );
      })}
      <pre>
        <span>{'}'}</span>&nbsp;&nbsp;<span className='comment'>{'//'} according by the priority of learning</span>
      </pre>
    </>
  );
};

export default Skills;
