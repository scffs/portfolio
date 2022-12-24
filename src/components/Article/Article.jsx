import React from 'react';
import {Link} from 'react-router-dom';
import img from '../../assets/articles/1.jpg'
import s from './Article.module.scss'

const Article = (props) => {
    return (
        <>
            <Link to={'/article/' + props.post.id}>
                <article className={s.article} key={props.post.id}>
                    <img className={s.img} src={img} alt='img'/>
                    <div>
                        <span>Учёба</span>
                        <h3 className={s.h3}>{props.post.title}</h3>
                        <p className={s.description}>{props.post.description}</p>
                    </div>
                </article>
            </Link>
        </>
    );
};

export default Article;