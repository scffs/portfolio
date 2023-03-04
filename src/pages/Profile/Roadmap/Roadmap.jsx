import React /*, {createRef}*/ from 'react'

import s from './Roadmap.module.scss'

import Skill from './Skill/Skill'

import skills from './Skill/skillsList.js'

const Roadmap = () => {
    // TODO: adaptive height of the after element
    // const refComponent = createRef()
    // const height = refComponent.current.getBoundingClientRect().height
    return (
        <div className={s.content} /*ref={refComponent}*/>
            <h2>Education & Experience</h2>
            <h3>For more information, look at my <a href="https://github.com/scffs" target="_blank" rel="noreferrer">GitHub</a></h3>
            <ul className={s.skillsList}>
                {skills.map(({time, skill, knowledge}, id) =>(
                    <Skill
                        key={id}
                        time={time}
                        skill={skill}
                        knowledge={knowledge}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Roadmap