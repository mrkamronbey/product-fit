import React from 'react'
import { Col, Row } from 'react-grid-system'
import { useTranslation } from 'react-i18next'
import styles from './style.module.css'
import { WrapperContainer } from '../../styled-app'
import { Tabs } from 'antd';
import './style.css'
import Button from '../../common/button'

import Card1 from '../../assets/card/card1.png'
import Card2 from '../../assets/card/card2.png'
import Card3 from '../../assets/card/card3.png'
import Card4 from '../../assets/card/card4.png'
import Card5 from '../../assets/card/card5.png'
import Card6 from '../../assets/card/card6.png'
import PDF from '../../assets/list.pdf'

const Cards = () => {
    const { t } = useTranslation()
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: <div className="card_item">

                <img src={Card1} alt="" />
                <p>{t("Cards.0")}</p>
            </div>,
            children: (
                <>
                    <div className='tabs_content'>
                        <div className='tabs_img'>
                            <img src={Card6} alt="" />
                            <a href={PDF} download="sertfikat"
                                className={styles.tabs_btns}>{t("Cards.8")}</a>
                        </div>
                        <div className='tabs_text'>
                            <h4>{t("Cards.5")}</h4>
                            <p>{t("Cards.6")}</p>
                            <a href={PDF} download="sertfikat" className={styles.tabs_btn}>{t("Cards.8")}</a>
                        </div>
                    </div>
                </>
            ),
        },
        {
            key: '2',
            label: <div className="card_item">
                <img src={Card2} alt="" />
                <p>{t("Cards.1")}</p>
            </div>,
            children: (
                <>
                    <div className='tabs_content'>
                        <div className='tabs_img'>
                            <img src={Card6} alt="" />
                        </div>
                        <div className='tabs_text'>
                            <h4>{t("Cards.5")}</h4>
                            <p>{t("Cards.6")}</p>
                        </div>
                    </div>
                </>
            ),
        },
        {
            key: '3',
            label: <div className="card_item">
                <img src={Card3} alt="" />
                <p>{t("Cards.2")}</p>
            </div>,
            children: (
                <>
                    <div className='tabs_content'>
                        <div className='tabs_img'>
                            <img src={Card6} alt="" />
                        </div>
                        <div className='tabs_text'>
                            <h4>{t("Cards.5")}</h4>
                            <p>{t("Cards.6")}</p>
                        </div>
                    </div>
                </>
            ),
        },
        {
            key: '4',
            label: <div className="card_item">
                <img src={Card4} alt="" />
                <p>{t("Cards.3")}</p>
            </div>,
            children: (
                <>
                    <div className='tabs_content'>
                        <div className='tabs_img'>
                            <img src={Card6} alt="" />

                        </div>
                        <div className='tabs_text'>
                            <h4>{t("Cards.5")}</h4>
                            <p>{t("Cards.6")}</p>

                        </div>
                    </div>
                </>
            ),
        },
        {
            key: '5',
            label: <div className="card_item">
                <img src={Card5} alt="" />
                <p>{t("Cards.4")}</p>
            </div>,
            children: (
                <>
                    <div className='tabs_content'>
                        <div className='tabs_img'>
                            <img src={Card6} alt="" />

                        </div>
                        <div className='tabs_text'>
                            <h4>{t("Cards.5")}</h4>
                            <p>{t("Cards.6")}</p>

                        </div>
                    </div>
                </>
            ),
        },
    ];
    return (
        <>
            <div className={styles.cards_section}>
                <WrapperContainer>

                    <Tabs
                        onChange={onChange}
                        type="card"
                        items={items}
                    />
                </WrapperContainer>
            </div>
        </>
    )
}

export default Cards