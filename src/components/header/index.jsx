import React, { useEffect } from 'react'
import { WrapperContainer } from '../../styled-app'
import styles from './style.module.css'
import Button from '../../common/button'
import LanguageHeader from './header-language'
import { Dropdown, Space } from 'antd';
import './style.css'


import HeaderLogo from '../../assets/header/header-logos.svg'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t, i18n } = useTranslation()
    const handleLang = (e) => {
        const lang = e.currentTarget.id;
        i18n.changeLanguage(lang);
        window.location.reload();
    };
    function LanguValue() {
        return window.localStorage.getItem("i18nextLng");
    }
    const items = [
        {
            label: <a className={styles.drop_link} href="https://t.me/BKamilaFr">
                <i class='bx bxl-telegram'></i>
                <span>t.me/BKamilaFr</span>
            </a>,
            key: '0',
        },
        {
            label: <a className={styles.drop_link} href="mailto:info@itfor.uz">
                <i class='bx bxs-envelope'></i>
                <span>info@itfor.uz</span>
            </a>,
            key: '1',
        },
        {
            label: <a className={styles.drop_link} href="tel:+998903570707">
                <i class='bx bxs-phone'></i>
                <span> +998 (90) 357 07 07</span>
            </a>,
            key: '3',
        },
        {
            label:
                <div className={styles.lang_media_box}>
                    <div className={styles.lang_btn_wrapp}>
                        <button
                            style={
                                LanguValue() === "ru"
                                    ? { fontWeight: "bold", color: "#fff", fontSize: "22px", background: "#f05670" }
                                    : { fontWeight: "bold", color: "#f05670", fontSize: "16px", background: "trasparent" }
                            }
                            onClick={handleLang}
                            id="ru"
                        >
                            RU
                        </button>
                        <button
                            style={
                                LanguValue() === "uz"
                                    ? { fontWeight: "bold", color: "#fff", fontSize: "22px", background: "#f05670" }
                                    : { fontWeight: "bold", color: "#f05670", fontSize: "16px", background: "trasparent" }
                            }
                            onClick={handleLang}
                            id="uz"
                        >
                            UZ
                        </button>
                    </div>
                </div>,
            key: '4',
        },
    ];

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector(".header");
        const scrollTop = window.scrollY;
        scrollTop >= 60
            ? header.classList.add("is-sticky")
            : header.classList.remove("is-sticky");
    };
    return (

        <>
            <div className="header">
                <WrapperContainer>
                    <div className={styles.header_big_wrapper}>
                        <div className={styles.header_logo}>
                            <img src={HeaderLogo} alt="" />
                        </div>
                        <div className={styles.header_lang_content}>
                            <div className={styles.header_content}>
                                <a href="#">
                                    <i class='bx bxl-telegram'></i>
                                </a>
                                <a href="mailto:info@itfor.uz">
                                    <i class='bx bxs-envelope'></i>
                                </a>
                                <a className={styles.tel_link} href="tel:+998903570707">
                                    <i class='bx bxs-phone'></i>
                                    <span> +998 (90) 357 07 07</span>
                                </a>
                                {/* <Button className={styles.header_btn}>{t("Header.0")}</Button> */}
                            </div>
                            <div className={styles.header_menu}>
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                    trigger={['click']}
                                    placement="bottomRight"
                                    arrow
                                >
                                    <a>
                                        <Space><i class='bx bxs-category-alt'></i></Space>
                                    </a>
                                </Dropdown>
                            </div>
                            <LanguageHeader />
                        </div>
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default Header