import React, {lazy, Suspense} from 'react';

import s from './Article.module.scss';

import Loading from '../Loading/Loading.jsx';
const Author = lazy(() => import('../Author/Author'));
const Category = lazy(() => import('./Category/Category'));

import {Link} from 'react-router-dom';

import logo from '../../assets/img/ava.webp';

/**
 * @param {array} tags
 * @param {string} link
 * @param {string} preview
 * @param {string} description
 * @param {string} author
 * @param {string} title
*/

const Article = ({link, preview, title, description, tags, author}) => {
    return (
        <Link to={link} className={s.link} target='_blank' rel="noreferrer">
            <article className={s.article}>
                <img className={s.img} src={preview} alt="img"/>
                <div className={s.info}>
                    <div className={s.top}>
                       <Suspense fallback={<Loading />}>
                           <div className={s.tags}>
                               {tags.map((tag, id) => {
                                   return <Category key={id} id={id} tag={tag}/>
                               })}
                           </div>
                           <Author author={author} authorLogo={logo}/>
                       </Suspense>
                    </div>
                    <h3 className={s.h3}>{title}</h3>
                    <p className={s.description}>{description}</p>
                </div>
            </article>
        </Link>
    );
};

export default Article;