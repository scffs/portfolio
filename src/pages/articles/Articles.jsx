import React, {useState} from 'react';
import Article from '../../components/Article/Article';
import styles from './Articles.module.scss'
const Articles = () => {
    const [posts, setPosts] = useState([
        {
            id: 0,
            title: 'Как я стал одним из лучших',
            description: 'В этой статье я расскажу как стать одним из лучших студентов года',
            text: 'text',
            author: 'Scoffs',
            img: "../../assets/articles/1.jpg",
            logo: "../../assets/ava.png"
        },
        {
            id: 1,
            title: 'Как программировать по 12 часов в день и не сойти с ума',
            description: 'Спойлер: никак',
            text: 'text',
            author: 'Scoffs',
            img: "../../assets/articles/1.jpg",
            logo: "../../assets/ava.png"
        },
        {
            id: 2,
            title: 'Как я стал одним из лучших 3',
            description: 'В этой статье я расскажу как стать одним из лучших студентов года',
            text: 'text',
            author: 'Scoffs',
            img: "../../assets/articles/1.jpg",
            logo: "../../assets/ava.png"
        },
        {
            id: 3,
            title: 'Как я стал одним из лучших 4',
            description: 'В этой статье я расскажу как стать одним из лучших студентов года',
            text: 'text',
            author: 'Scoffs',
            img: "../../assets/articles/1.jpg",
            logo: '../../assets/img/author1.jpg'
        }
    ])
    return (
        <div className={styles.container}>
            {
                posts.map(post =>(
                    <Article key={Date.now()} post={post} />
                ))
            }
        </div>
    );
};

export default Articles;