import React from 'react';
import s from "./Author.module.scss";
import Logo from "../../utils/logo.png";

const Author = ({authorLogo, author, height}) => {
    return (
        <div className={s.author} style={{height}}>
            <span className={s.authorName}>{author}</span>
            <img className={s.authorLogo} src={authorLogo ? authorLogo : Logo } alt='img' />
        </div>
    );
};

export default Author;