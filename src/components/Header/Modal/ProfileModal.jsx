import React from 'react'
import {AiOutlineLogout} from "react-icons/ai"
import logo from "../../../assets/ava.png"
import {CgProfile} from "react-icons/cg"
import styles from './ProfileModal.module.scss'
import {Link} from "react-router-dom";
const ProfileModal = ({name, role}) => {
    const[isShow, setIsShow] = React.useState(false);
    return (
        <>
            <CgProfile onClick={() => setIsShow(!isShow)} />
            {isShow ? <div className={styles.profileCard}>
                    <div className={styles.top}>
                        <div className={styles.userInfo}>
                            <Link to="/profile" className={styles.name} onClick={() => setIsShow(!isShow)}>
                                <img className={styles.logo} src={logo} alt="logo"/>
                                <span>{name}</span>
                            </Link>
                        </div>
                        <button className={styles.btn_LogOut} type="button">
                            <AiOutlineLogout />
                        </button>
                    </div>
                    <div className={styles.bottom}>
                        <p>Статус: <span className={styles.role}>{role}</span></p>
                    </div>
                </div>
                : ''}
        </>
    );
};

export default ProfileModal;