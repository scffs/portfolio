import React from 'react'
import s from './Header.module.scss'
import {AiOutlineLogin} from "react-icons/ai"
import ProfileModal from "./ProfileModal"
import menu from "./MenuItem"
import {Link} from "react-router-dom";

const Header = () => (
    <header className={s.header}>
       <div className="container">
           <nav>
               <ul className={s.menu}>
                   <li className={s.itemProfile}>
                        <ProfileModal name="Scoffs" role="Администратор" />
                   </li>
                   {
                       menu.map(item => (
                           <li key={item.id}>
                               <Link to={item.src}>{item.title}</Link>
                           </li>
                       ))
                   }
                   <li className={s.itemLogIn}>
                       <Link to="/register">
                           <AiOutlineLogin />
                       </Link>
                   </li>
               </ul>
           </nav>
       </div>
    </header>
);
export default Header;