import React from 'react';
import s from "../UserMenu/UserMenu.module.scss";
import {Link} from "react-router-dom";
import {AiOutlineLogin} from "react-icons/ai";
import ProfileModal from "../Modal/ProfileModal";

const UserMenu = () => {
    return (
        <ul className={s.ul}>
            <li className={s.itemLogIn}>
                <Link to="/register">
                    <AiOutlineLogin />
                </Link>
            </li>
            <li className={s.itemProfile}>
                <ProfileModal name="Scoffs" role="Администратор" />
            </li>
        </ul>
    );
};

export default UserMenu;