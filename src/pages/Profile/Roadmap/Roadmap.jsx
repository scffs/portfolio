import React, { lazy, Suspense, useEffect, useRef } from 'react';

import Loading from '../../../components/Loading/Loading.jsx';
const Skill = lazy(() => import('./Skill/Skill'));

import skills from './Skill/skillsList.js';

import s from './Roadmap.module.scss';

const Roadmap = () => {
    const refComponent = useRef(null);

    useEffect(() => {
        if (refComponent.current) {
            const height = refComponent.current.getBoundingClientRect().height;
            refComponent.current.style.setProperty('--height-ref', `${height}px`);
        }
    }, []);

    return (
        <div className={s.content} ref={refComponent}>
            <h2 className={s.title}>Education & Experience</h2>
            <h3 className={s.subTitle}>For more information, look at my <a href="https://github.com/scffs" target="_blank" rel="noreferrer">GitHub</a></h3>
            <ul className={s.skillsList}>
                <Suspense fallback={<Loading/>}>
                    {skills.map(({time, skill, knowledge}, id) => (
                        <Skill
                            key={id}
                            time={time}
                            skill={skill}
                            knowledge={knowledge}
                        />
                    ))}
                </Suspense>
            </ul>
        </div>
    );
};

export default Roadmap;
