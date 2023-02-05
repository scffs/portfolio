import React from 'react'

const Person = () => {
    return (
        <>
            <pre>
              <span className='const'>const</span> <span className='title'>person</span> <span className='blue'>=</span> <span>{"{"}</span>
          </pre>
            <pre> <span> </span>
                      <span className='text'>name</span><span>:</span><span className='link'> 'Semyon'</span><span>,</span>
            </pre>
            <pre> <span> </span>
                       <span className='text'>lastName</span><span>:</span><span className='link'> 'Okulov'</span><span>,</span>
            </pre>
            <pre> <span> </span>
                       <span className='text'>age</span><span>:</span><span className='link'> 'between 0 and 48'</span><span>,</span>
            </pre>
            <pre> <span> </span>
                       <span className='text'>gender</span><span>:</span><span className='link'> 'the only one'</span><span>,</span>
            </pre>
            <pre> <span> </span>
                <span className='text'>hobbies</span><span>:</span> [
                <span className='link'>'Programming'</span>,{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='link'>'Learning English'</span>{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='link'>'Math'</span>,<span className='link'>'Gym'</span>,{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='link'>'VK Testers & Crowd'</span>,{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='link'>'Watching LoL'</span>]<span></span>
            </pre>
            <span>{"}"}</span>
        </>
    );
};

export default Person