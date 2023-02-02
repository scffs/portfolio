import React from 'react'
import {useNavigate} from 'react-router-dom'

import s from './Article.module.scss'

import Author from '../Author/Author'
import Tag from './Tag/Tag'

const Article = ({id, preview, title, description, tag, tagId, authorLogo, author}) => {
    const router = useNavigate()
    return (
        <>
            <article className={s.article} onClick={() => router(`${id}`)}>
                <img className={s.img} src={preview} alt="img"/>
                <div className={s.info}>
                    <div className={s.top}>
                        <Tag tag={tagId} text={tag} />
                        <Author authorName={author} authorLogo={authorLogo} />
                    </div>
                    <h3 className={s.h3}>{title}</h3>
                    <p className={s.description}>{description}</p>
                </div>
            </article>
        </>
    );
};

export default Article