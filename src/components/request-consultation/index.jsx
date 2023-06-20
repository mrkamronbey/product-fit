import React, { useRef } from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../styled-app'
import { Col, Row } from 'react-grid-system'
import { useTranslation } from 'react-i18next'
import { RequestPost } from '../../redux/request'
import { useDispatch, useSelector } from 'react-redux'

import './style.css'

const RequestConsultation = () => {
    const { t } = useTranslation()
    const name = useRef()
    const number = useRef()
    const dispatch = useDispatch()

    const HandlePost = async (e) => {
        e.preventDefault()
        const body = {
            name: name.current.value,
            number: number.current.value
        };

        await dispatch(RequestPost(body))
        window.location.reload()
    }


    return (
        <>
            <div id='applications' className={styles.request_consultation_section}>
                <WrapperContainer>
                    <Row className={styles.request_row}>
                        <Col className={styles.request_col} lg={6} md={12} sm={12}>
                            <h4>{t("Form.0")}</h4>
                        </Col>
                        <Col className={styles.request_col} lg={6} md={12} sm={12}>
                            <form onSubmit={HandlePost} className='request_form'>

                                <div>
                                    <input ref={name} type="name" placeholder={t("Form.2")} required />
                                    <i class='bx bxs-check-circle'></i>
                                    {/* <i class='bx bxs-x-circle'></i> */}
                                </div>
                                <div>
                                    <input ref={number}  type="tel" placeholder={t("Form.3")} required />
                                    <i class='bx bxs-check-circle'></i>
                                    {/* <i class='bx bxs-x-circle'></i> */}
                                </div>
                                <button className={styles.application_btn} type='submit'>{t("CardOrder.9")}</button>
                            </form>
                        </Col>
                    </Row>
                </WrapperContainer>
            </div>
        </>
    )
}

export default RequestConsultation