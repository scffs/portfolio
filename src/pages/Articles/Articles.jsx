import React, {useEffect, useState} from 'react';

import Article from '../../components/Article/Article';
import s from './Articles.module.scss'
import '../../styles/container.scss'

import MySelect from "../../components/UI/MySelect";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [selectedSort, setSelectedSort] = useState('');

    const sortPosts = (sort) => {
        console.log(sort)
        setSelectedSort(sort)
        setArticles([...articles].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    useEffect(() => {
        fetch('https://63a7f65f7989ad3286f7dd81.mockapi.io/articles')
            .then((res) => res.json())
            .then((arr) => {
                setArticles(arr)
            })
    }, [])
    return (
        <div className='container'>
            <div className={s.sort}>
                <h3>Сортировка</h3>
                <MySelect
                    tag={selectedSort}
                    onChange={sortPosts}
                    defaultOption='Не задано'
                    options={
                        [
                            {tag:'study', name: 'Учёба'},
                            {tag:'programming', name: 'Программирование'},
                            {tag:'note', name: 'Заметки'},

                        ]
                    }
                />
            </div>
            <div className={s.articleList}>
                {
                    articles.map(post =>(
                        <Article key={post.id} {...post} />
                    ))
                }
            </div>
        </div>
    );
};

export default Articles;