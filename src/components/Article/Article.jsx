import React from 'react'

import s from './Article.module.scss'

import Author from '../Author/Author'
import Tag from './Tag/Tag'

const Article = ({preview, title, description, tag, tagId, authorLogo, author}) => {
    return (
        <>
            <article className={s.article}>
                <img className={s.img} src={preview} alt="img"/>
                <div className={s.info}>
                    <div className={s.top}>
                        <Tag tag={tagId} text={tag} />
                        <Author author={author} authorLogo={authorLogo} />
                    </div>
                    <h3 className={s.h3}>{title}</h3>
                    <p className={s.description}>{description}</p>
                </div>
            </article>
        </>
    );
};

export default Article