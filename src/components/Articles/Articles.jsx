import React, {useEffect, useState} from 'react';
import Article from '../../pages/Article/Article';
import styles from './Articles.module.scss'

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://63a7f65f7989ad3286f7dd81.mockapi.io/articles')
            .then((res) => res.json())
            .then((arr) => {
                setArticles(arr)
            })
    }, [])

    return (
        <div className={styles.container}>
            {
                articles.map(post =>(
                    <Article key={post.id} {...post} />
                ))
            }
        </div>
    );
};

export default Articles;