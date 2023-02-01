import React from 'react'

import Project from './Project'
import {cardItems} from '../cardItems'
import s from './Projects.module.scss'

const Projects = () => {
    return (
        <div className={s.card}>
            <pre style={{fontSize: '1.5rem'}}>
                <span className='const'>const</span> <span className='title'>memberOf</span> <span className='blue'>=</span> <span>{"{"}</span>
            </pre>
            {
                cardItems.map(({text, link, linkText, id}) => (
                    <Project key={id} text={text} linkText={linkText} link={link} id={id}/>
                ))
            }
            <span style={{fontSize: '1.5rem'}}>{'}'}</span>
        </div>
    );
};

export default Projects