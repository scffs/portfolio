import React from 'react'
import styles from './Header.module.scss'
import {AiOutlineLogin} from "react-icons/ai"
import ProfileModal from "./ProfileModal"
import menu from "./MenuItem"
import {Link} from "react-router-dom";

const Header = () => (
    <header className={styles.header}>
       <div className="container">
           <nav>
               <ul className={styles.Menu}>
                   <li className={styles.ItemProfile}>
                        <ProfileModal name="Scoffs" role="Администратор" />
                   </li>
                   {
                       menu.map(item => (
                           <li>
                               <Link to={item.src}>{item.title}</Link>
                           </li>
                       ))
                   }
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