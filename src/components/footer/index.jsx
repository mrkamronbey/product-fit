import React from 'react'
import styles from './style.module.css';
import { WrapperContainer } from '../../styled-app'
import { Col, Row } from 'react-grid-system';
import HeaderLogo from '../../assets/header/header-logos.svg'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.footer}>
                <WrapperContainer>
                    <Row className={styles.footer_row}>
                        <Col className={styles.footer_col} lg={4} md={6} sm={12}>
                            <img src={HeaderLogo} alt="" />
                        </Col>

                        <Col className={styles.footer_col} lg={4} md={6} sm={12}>
                            <h4>{t("Footer.2")}</h4>
                            <p>
                                <a href="tel:+998903570707">
                                    <i class='bx bxs-phone'></i>
                                    <span>+998 (90) 357 07 07</span>
                                </a>
                            </p>
                            <p>
                                <a href="https://t.me/BKamilaFr">
                                    <i class='bx bxl-telegram' ></i>
                                    <span>t.me/BKamilaFr</span>
                                </a>
                            </p>
                            <p>
                                <a href="mailto:info@itfor.uz">
                                    <i class='bx bxs-envelope'></i>
                                    <span>info@itfor.uz</span>
                                </a>
                            </p>
                        </Col>
                        <Col className={styles.footer_col} lg={4} md={12} sm={12}>
                            <ul>
                                <li>{t("Footer.3")}</li>
                            </ul>
                        </Col>
                    </Row>

                    <div className={styles.footer_mini}>
                        <p>Copyright © 2023 <a href="https://supersite.uz">SuperSite Uz</a></p>
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default Footer