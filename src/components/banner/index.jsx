import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../styled-app'
import { Carousel } from 'antd';
import { useTranslation } from 'react-i18next';

import BannerImg from '../../assets/banner/bannerImg.png'

const Banner = () => {
    const { t } = useTranslation()
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <>
            <div className={styles.banner_section}>
                <WrapperContainer>
                    <div className={styles.banner_carousel_wrapp}>
                        <div className={styles.banner_item}>
                            <div className={styles.banner_item_content}>
                                <p>{t("Banner.0")}</p>
                            </div>
                            <div className={styles.banner_item_img}>
                                <img src={BannerImg} alt="" />
                            </div>
                        </div>
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default Banner