import React from 'react';

import s from './Footer.module.scss';

import {logos} from './socialLogos';

const Footer = () => (
    <footer className={s.footer}>
        <p>Copyright © 2023. Semyon Okulov. All rights reserved</p>
        <ul className={s.socials}>
            {
                logos.map(({url, path, alt}, id) =>(
                    <li key={id}>
                        <a href={url} target="_blank" rel="noreferrer">
                            <img className={s.logo} src={path} alt={alt} />
                        </a>
                    </li>
                ))
            }
        </ul>
    </footer>
);

export default Footer;
