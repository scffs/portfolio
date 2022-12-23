import React from 'react';
import Article from '../../components/Article/Article';
import styles from './Articles.module.scss'
const Articles = () => {
    return (
        <div className={styles.container}>
            <Article />
        </div>
    );
};

export default Articles;