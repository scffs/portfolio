import React from 'react';
import article from './articleList'
import {Link} from 'react-router-dom';
import img from '../../assets/articles/1.jpg'
import styles from './Article.module.scss'
import logo from "../../assets/ava.png"

const Article = () => {
    return (
        <>
            {
                article.map(item => (
                    <Link to={'/article/' + item.id}>
                        <article className={styles.article} key={item.id}>
                            <img className={styles.img} src={img} alt='img'/>
                            <div className="post-info">
                                <Link className={styles.postAuthor} to={'/profile'}>
                                    <img className={styles.logo} src={logo} alt="logo"/>
                                    <span>{item.author}</span>
                                </Link>
                                <h3 className={styles.h3}>{item.title}</h3>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        </article>
                    </Link>
                ))
            }
        </>
    );
};

export default Article;