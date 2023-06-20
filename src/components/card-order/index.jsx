import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../styled-app'
import { Col, Row } from 'react-grid-system'
import Button from '../../common/button'
import CardOrder1 from '../../assets/card-order/card-order1.png'
import CardOrder2 from '../../assets/card-order/card-order2.png'
import CardOrder3 from '../../assets/card-order/card-order3.png'
import CardOrder4 from '../../assets/card-order/card-order4.png'
import CardOrder5 from '../../assets/card-order/card-order5.png'
import CardOrder6 from '../../assets/card-order/card-order6.png'
import CardOrder7 from '../../assets/card-order/card-order7.png'
import CardOrder8 from '../../assets/card-order/card-order8.png'
import { useTranslation } from 'react-i18next'

const CardOrder = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.card_order_section}>
                <WrapperContainer>
                    <Row className={styles.card_order_row}>
                        <Col className={styles.card_order_col} lg={3} md={6} sm={12}>
                            <div className={styles.card_order}>
                                <div className={styles.card_order_wrapper}>
                                    <div className={styles.card_order_img_box}>
                                        <img src={CardOrder1} alt="" />
                                    </div>
                                    <div className={styles.card_order_content}>
                                        <h4>{t("CardOrder.0")}</h4>
                                        <a href='#applications' className={styles.card_order_btn}>{t("CardOrder.8")}</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className={styles.card_order_col} lg={3} md={6} sm={12}>
                            <div className={styles.card_order}>
                                <div className={styles.card_order_wrapper}>
                                    <div className={styles.card_order_img_box}>
                                        <img src={CardOrder2} alt="" />
                                    </div>
                                    <div className={styles.card_order_content}>
                                        <h4>{t("CardOrder.1")}</h4>
                                        <a href='#applications' className={styles.card_order_btn}>{t("CardOrder.8")}</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className={styles.card_order_col} lg={3} md={6} sm={12}>
                            <div className={styles.card_order}>
                                <div className={styles.card_order_wrapper}>
                                    <div className={styles.card_order_img_box}>
                                        <img src={CardOrder3} alt="" />
                                    </div>
                                    <div className={styles.card_order_content}>
                                        <h4>{t("CardOrder.2")}</h4>
                                        <a href='#applications' className={styles.card_order_btn}>{t("CardOrder.8")}</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className={styles.card_order_col} lg={3} md={6} sm={12}>
                            <div className={styles.card_order}>
                                <div className={styles.card_order_wrapper}>
                                    <div className={styles.card_order_img_box}>
                                        <img src={CardOrder4} alt="" />
                                    </div>
                                    <div className={styles.card_order_content}>
                                        <h4>{t("CardOrder.3")}</h4>
                                        <a href='#applications' className={styles.card_order_btn}>{t("CardOrder.8")}</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className={styles.card_order_col} lg={3} md={6} sm={12}>
                            <div className={styles.card_order}>
                                <div className={styles.card_order_wrapper}>
                                    <div className={styles.card_order_img_box}>
                                        <img src={CardOrder5} alt="" />
                                    </div>
                                    <div className={styles.card_order_content}>
                                        <h4>{t("CardOrder.4")}</h4>
                                        <a href='#applications' className={styles.card_order_btn}>{t("CardOrder.8")}</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className={styles.card_order_col} lg={3} md={6} sm={12}>
                            <div className={styles.card_order}>
                                <div className={styles.card_order_wrapper}>
                                    <div className={styles.card_order_img_box}>
                                        <img src={CardOrder6} alt="" />
                                    </div>
                                    <div className={styles.card_order_content}>
                                        <h4>{t("CardOrder.5")}</h4>
                                        <a href='#applications' className={styles.card_order_btn}>{t("CardOrder.8")}</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className={styles.card_order_col} lg={3} md={6} sm={12}>
                            <div className={styles.card_order}>
                                <div className={styles.card_order_wrapper}>
                                    <div className={styles.card_order_img_box}>
                                        <img src={CardOrder7} alt="" />
                                    </div>
                                    <div className={styles.card_order_content}>
                                        <h4>{t("CardOrder.6")}</h4>
                                        <a href='#applications' className={styles.card_order_btn}>{t("CardOrder.8")}</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className={styles.card_order_col} lg={3} md={6} sm={12}>
                            <div className={styles.card_order}>
                                <div className={styles.card_order_wrapper}>
                                    <div className={styles.card_order_img_box}>
                                        <img src={CardOrder8} alt="" />
                                    </div>
                                    <div className={styles.card_order_content}>
                                        <h4>{t("CardOrder.7")}</h4>
                                        <a href='#applications' className={styles.card_order_btn}>{t("CardOrder.8")}</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </WrapperContainer>
            </div>
        </>
    )
}

export default CardOrder