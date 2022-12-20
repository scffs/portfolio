import React from 'react'
import styles from './Header.module.scss'
import {AiOutlineLogin} from "react-icons/ai"
import ProfileModal from "./ProfileModal"

const Header = () => (
    <header className={styles.header}>
       <div className="container">
           <nav>
               <ul className={styles.headerMenu}>
                   <li className={styles.header_ItemProfile}>
                        <ProfileModal name="Scoffs" role="Администратор" />
                   </li>
                   <li>
                       <a href="/">Главная</a>
                   </li>
                   <li>
                       <a href="/">Новости</a>
                   </li>
                   <li>
                       <a href="/">Помощь</a>
                   </li>
                   <li className={styles.header_ItemLogIn}>
                      <a href="/">
                          <AiOutlineLogin />
                      </a>
                   </li>
               </ul>
           </nav>
       </div>
    </header>
);
export default Header;