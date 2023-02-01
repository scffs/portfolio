import React from 'react';
import s from "./Projects.module.scss";
import {cardItems} from "../cardItems";

const Project = ({link, id, text, linkText}) => {
    return (
        <h3 key={id} className={s.text}>
                                <pre> <span> </span>
                                    <span className='text'><a href={link} target="_blank" rel="noreferrer">{linkText}</a></span>
                                    <span>:</span><span className='link'> '{text}'</span>
                                    <span>{id === cardItems.length ? '' : ','}</span>
                                </pre>
        </h3>
    );
};

export default Project;