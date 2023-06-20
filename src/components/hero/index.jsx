import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../styled-app'
import { useTranslation } from 'react-i18next'
import Button from '../../common/button'

const Hero = () => {
    const {t} = useTranslation()
    return (
        <>
            <div height={window.innerHeight} className={styles.hero_section}>
                <WrapperContainer>
                    <div className={styles.hero_wrapp}>
                        <h2>{t("Hero.0")}</h2>
                        <p>{t("Hero.1")}</p>
                        {/* <Button className={styles.hero_btn}>{t("Hero.2")}</Button> */}
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default Hero