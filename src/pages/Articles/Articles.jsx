import React, {useEffect, useState} from 'react';

import Article from '../../components/Article/Article';
import s from './Articles.module.scss'
import '../../styles/container.scss'

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
        <div className='container'>
            <div className={s.sort}>
                <h3>Сортировка</h3>
                <select name="categories" id="categories" style={{marginBottom: '25px', padding: '5px'}}>
                    <option value="0">Не выбрано</option>
                    <option value="1">Заметки</option>
                    <option value="2">Учёба</option>
                    <option value="3">Программирование</option>
                </select>
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