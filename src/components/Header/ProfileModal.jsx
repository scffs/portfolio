import React from 'react'
import {AiOutlineLogout} from "react-icons/ai"
import logo from "../../assets/img/ava.png"
import {CgProfile} from "react-icons/cg"
import styles from './Header.module.scss'
const ProfileModal = ({name, role}) => {
    const[isShow, setIsShow] = React.useState(false);
    return (
        <>
            <CgProfile onClick={() => setIsShow(!isShow)} />
            {isShow ? <div className={styles.profileCard}>
                    <div className={styles.profileCard_Top}>
                        <div className={styles.profileCard_UserInfo}>
                            <a href="../pages/profile" className={styles.profileCard_Name}>
                                <img className={styles.profileCard_Logo} src={logo} alt="logo"/>
                                <span>{name}</span>
                            </a>
                        </div>
                        <button className={styles.btn_LogOut} type="button">
                            <AiOutlineLogout />
                        </button>
                    </div>
                    <div className={styles.profileCard_Bottom}>
                        <p>Статус: <span className={styles.profileCard_Role}>{role}</span></p>
                    </div>
                </div>
                : ''}
        </>
    );
};

export default ProfileModal;