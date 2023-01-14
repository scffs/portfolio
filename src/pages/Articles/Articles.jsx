import React, {useEffect, useState} from 'react';

import Article from '../../components/Article/Article'
import Categories from '../../components/UI/Categories/Categories'
import ArticlesSkeleton from './ArticlesSkeleton'
import Search from '../../components/UI/Search/Search'

import s from './Articles.module.scss'

const Articles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)
    const [search, setSearch] = useState('')

    const articlesList = articles.filter(post => {
        return post.title.toLowerCase().includes(search.toLowerCase())
    }).map(post =>(<Article key={post.id} {...post} />))

    const width = window.innerWidth > 600 ? 600 : 330;

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
            <div className={s.articleTop}>
                <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
                <Search search={search} setSearch={setSearch} />
            </div>
            <div className={s.articleList}>
                { isLoading ? <ArticlesSkeleton width={width} /> :  articlesList }
            </div>
        </>
    );
};

export default Articles