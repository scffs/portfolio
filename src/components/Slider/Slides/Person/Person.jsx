import React from 'react';

import { personInfo } from './personalInfo.js';

const Person = () => {
  return (
    <pre>
      <span className="const">const</span> <span className="title">person</span> <span className="blue">=</span> {'{'}
      {personInfo.map((item, index) => (
        <pre key={item.key}>
          {'  '}
          <span className="text">{item.key}</span>: {item.key === 'hobbies' ? '[' : ''}
          {item.key === 'hobbies' ?
            <span className="link">{item.value}</span> :
            <span className="link">{`'${item.value}'`}</span>}
          {item.key === 'hobbies' && index !== personInfo.length - 1 ? ',' : ''}
          {item.key === 'hobbies' ? '' : <span style={{ color: 'fff' }}>,</span>}
        </pre>
      ))}
      {'  ]'}
      {'\n}'}
    </pre>
  );
};

export default Person;
