import React from 'react'

import s from './Article.module.scss'

import Author from '../Author/Author'
import Tag from './Tag/Tag'

import {Link} from 'react-router-dom'

import logo from '../../assets/img/ava.webp'

const Article = ({link, preview, title, description, tags, author}) => {
    return (
        <Link to={link} className={s.link} target='_blank' rel="noreferrer">
            <article className={s.article}>
                <img className={s.img} src={preview} alt="img"/>
                <div className={s.info}>
                    <div className={s.top}>
                        <div className={s.tags}>
                            <Tag tags={tags}/>
                        </div>
                        <Author author={author} authorLogo={logo}/>
                    </div>
                    <h3 className={s.h3}>{title}</h3>
                    <p className={s.description}>{description}</p>
                </div>
            </article>
        </Link>
    );
};

export default Article