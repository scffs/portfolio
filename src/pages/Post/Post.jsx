import React, {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'

import s from './Post.module.scss'
import Author from '../../components/Author/Author'
const Post = () => {
    const params = useParams()
    const [article, setArticle] = useState([]);

    useEffect(() => {
        fetch('https://63a7f65f7989ad3286f7dd81.mockapi.io/articles/' + params.id)
            .then((res) => res.json())
            .then((arr) => {
                setArticle(arr)
            })
    }, [params.id])
    return (
        <div className={s.wrapper}>
            <div className={s.post}>
                <img className={s.img} src={article.preview} alt="preview"/>
                <div>
                   <div className={s.info}>
                       <h2 className={s.title}>{article.title}</h2>
                       <div className={s.authorWrapper}>
                           <Author author={article.author} authorLogo={article.authorLogo} height={35} />
                       </div>
                   </div>
                    <div className={s.text}>
                        <p>{article.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;