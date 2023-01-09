import React, {useEffect, useState} from 'react';

import Article from '../../components/Article/Article'
import Categories from '../../components/UI/Categories/Categories'
import ArticlesSkeleton from './ArticlesSkeleton'

import s from './Articles.module.scss'

const Articles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://63a7f65f7989ad3286f7dd81.mockapi.io/articles?tagId=${categoryId ? categoryId : ''}`)
            .then((res) => res.json())
            .then((arr) => {
                setArticles(arr)
                setIsLoading(false)
            })
    }, [categoryId])
    return (
        <>
            <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
            <div className={s.articleList}>
                {
                    isLoading
                        ? [new Array(6)].map( (_, idx) => <ArticlesSkeleton width={window.innerWidth - 20} height={window.innerHeight - 300} key={idx} />)
                        : articles.map(post =>(<Article key={post.id} {...post} /> ))
                }
            </div>
        </>
    );
};

export default Articles;