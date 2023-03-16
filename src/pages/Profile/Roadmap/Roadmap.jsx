import React, {lazy, Suspense} from 'react';

import s from './Roadmap.module.scss';

import Loading from '../../../components/Loading/Loading.jsx';
const Skill = lazy(() => import('./Skill/Skill'));

import skills from './Skill/skillsList.js';

const Roadmap = () => {
    // TODO: adaptive height of the after element
    // const refComponent = createRef()
    // const height = refComponent.current.getBoundingClientRect().height
    return (
        <div className={s.content} /*ref={refComponent}*/>
            <h2 className={s.title}>Education & Experience</h2>
            <h3 className={s.subTitle}>For more information, look at my <a href="https://github.com/scffs" target="_blank" rel="noreferrer">GitHub</a></h3>
            <ul className={s.skillsList}>
                <Suspense fallback={<Loading />}>
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