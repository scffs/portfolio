import React from 'react';
import {Link} from 'react-router-dom';
import s from './Article.module.scss'

const Article = ({id, preview, title, description}) => {
    return (
        <>
            <Link to={'/article/' + id}>
                <article className={s.article}>
                    <img className={s.img} src={preview} alt='img'/>
                    <div>
                        <span>Учёба</span>
                        <h3 className={s.h3}>{title}</h3>
                        <p className={s.description}>{description}</p>
                    </div>
                </article>
            </Link>
        </>
    );
};

export default Article;