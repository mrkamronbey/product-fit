import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../styled-app'
import { Col, Row } from 'react-grid-system'
import ApplicationImg from '../../assets/card-order/application.png'
import Button from '../../common/button'
import { useTranslation } from 'react-i18next'

const Application = () => {
    const {t} = useTranslation()
    return (
        <>
            <div id="applications" className={styles.application_section}>
                <WrapperContainer>
                    <Row className={styles.application_row}>
                        <Col className={styles.application_col} lg={6} md={6} sm={12}>
                            <img src={ApplicationImg} alt="" />
                        </Col>
                        <Col className={styles.application_col} lg={6} md={6} sm={12}>
                            <Button className={styles.application_btn} type="button">{t("CardOrder.9")}</Button>
                        </Col>
                    </Row>
                </WrapperContainer>
            </div>
        </>
    )
}

export default Application