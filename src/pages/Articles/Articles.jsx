import React, {useEffect, useState} from 'react';

import Article from '../../components/Article/Article'
import Categories from '../../components/UI/Categories/Categories'

import s from './Articles.module.scss'
import '../../styles/container.scss'
import ArticlesSkeleton from "./ArticlesSkeleton"

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
        <div className='container'>
            <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
            <div className={s.articleList}>
                {
                    isLoading ? [new Array(4).map( (_, idx) => <ArticlesSkeleton key={idx} />)]
                        : articles.map(post =>(<Article key={post.id} {...post} />
                        ))
                }
            </div>
        </div>
    );
};

export default Articles;