import React from 'react'

import s from './Footer.module.scss'

import logos from './socialLogos'
const Footer = () => (
    <footer className={s.footer}>
        <ul className={s.socials}>
            {
                logos.map((logo, id) =>(
                    <li key={id}>
                        <a href={logo.url} target="_blank" rel="noreferrer">
                            <img src={logo.path} alt={logo.path} />
                        </a>
                    </li>
                ))
            }
        </ul>
        <p>Copyright © 2023. Semyon Okulov. All rights reserved</p>
    </footer>
);

export default Footer