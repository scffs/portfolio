import React from 'react'
import styles from './Header.module.scss'
import {AiOutlineLogin} from "react-icons/ai"
import ProfileModal from "./ProfileModal"
import {Link} from "react-router-dom";

const Header = () => (
    <header className={styles.header}>
       <div className="container">
           <nav>
               <ul className={styles.Menu}>
                   <li className={styles.ItemProfile}>
                        <ProfileModal name="Scoffs" role="Администратор" />
                   </li>
                   <li>
                       <Link to="/">Главная</Link>
                   </li>
                   <li>
                       <Link to="/news">Новости</Link>
                   </li>
                   <li>
                       <Link to="/help">Помощь</Link>
                   </li>
                   <li className={styles.ItemLogIn}>
                       <button className={styles.ItemLogIn}>
                           <AiOutlineLogin />
                       </button>
                   </li>
               </ul>
           </nav>
       </div>
    </header>
);
export default Header;