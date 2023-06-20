import React, { useState } from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../styled-app'
import { Col, Row } from 'react-grid-system'
import { useTranslation } from 'react-i18next'
// import Button from '../../common/button'
import { Carousel } from 'antd';
import './style.css'
import { Button, Modal } from 'antd';


import Team1 from '../../assets/team/team1.png'
import Team2 from '../../assets/team/team2.png'
import Team3 from '../../assets/team/team3.png'
import Team4 from '../../assets/team/team4.png'
import Team5 from '../../assets/team/team5.png'
import Team6 from '../../assets/team/team6.png'

const ProjectTeam = () => {
    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState();
    console.log(id)
    const showModal = (e) => {
        setIsModalOpen(true);
        setId(e.currentTarget.id)
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const items = [
        {
            id: 1,
            title: t("Team.1"),
            description: t("Team.2"),
            description_all: t("Team.3"),
            img: Team1
        },
        {
            id: 2,
            title: t("Team.4"),
            description: t("Team.5"),
            description_all: t("Team.6"),
            img: Team2
        },
        {
            id: 3,
            title: t("Team.7"),
            description: t("Team.8"),
            description_all: t("Team.9"),
            img: Team3
        },
        {
            id: 4,
            title: t("Team.10"),
            description: t("Team.11"),
            description_all: t("Team.12"),
            img: Team4
        },
        {
            id: 5,
            title: t("Team.13"),
            description: t("Team.14"),
            description_all: t("Team.15"),
            img: Team5
        },
        {
            id: 6,
            title: t("Team.16"),
            description: t("Team.17"),
            description_all: t("Team.18"),
            img: Team6
        },
    ]

    return (
        <>
            <div className={styles.team_section}>
                <WrapperContainer>
                    <h2 className={styles.team_title}>{t("Team.0")}</h2>

                    <Row className={styles.team_row}>
                        {
                            items.map(elem => (
                                <Col className={styles.team_col} lg={4} md={6} sm={12}>
                                    <div id={elem.id} onClick={showModal} className={styles.team_col_item}>
                                        <img src={elem.img} alt="" />
                                        <div className={styles.team_col_content}>
                                            <h4>{elem.title}</h4>
                                            <p>{elem.description}</p>
                                        </div>

                                    </div>

                                </Col>
                            ))
                        }
                        <Modal footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            {
                                items.map(elem => (
                                    id == elem.id ? <> <h4 className={styles.modal_titles}>{elem.title}</h4>
                                        <p className={styles.modal_text}>{elem.description}</p>
                                        <p className={styles.modal_text}>{elem.description_all}</p>
                                    </> : null
                                ))
                            }
                        </Modal>
                    </Row>


                    <div className={styles.team_slider_wrap}>
                        <Carousel autoplay>

                            {
                                items.map(elem => (
                                    <div id={elem.id} onClick={showModal} className={styles.team_carou_item}>
                                        <div className={styles.team_col_item}>
                                            <img src={elem.img} alt="" />
                                            <div className={styles.team_col_content}>
                                                <h4>{elem.title}</h4>
                                                <p>{elem.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* <Modal footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                {
                                    items.map(elem => (
                                        id == elem.id ? <> <h4 className={styles.modal_titles}>{elem.title}</h4>
                                            <p className={styles.modal_text}>{elem.description}</p>
                                            <p className={styles.modal_text}>{elem.description_all}</p>
                                        </> : null
                                    ))
                                }
                            </Modal> */}

                            {/* <div className={styles.team_carou_item}>
                                <div className={styles.team_col_item}>
                                    <img src={Team2} alt="" />
                                    <div className={styles.team_col_content}>
                                        <h4>{t("Team.4")}</h4>
                                        <p>{t("Team.5")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.team_carou_item}>
                                <div className={styles.team_col_item}>
                                    <img src={Team3} alt="" />
                                    <div className={styles.team_col_content}>
                                        <h4>{t("Team.7")}</h4>
                                        <p>{t("Team.8")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.team_carou_item}>
                                <div className={styles.team_col_item}>
                                    <img src={Team4} alt="" />
                                    <div className={styles.team_col_content}>
                                        <h4>{t("Team.10")}</h4>
                                        <p>{t("Team.11")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.team_carou_item}>
                                <div className={styles.team_col_item}>
                                    <img src={Team5} alt="" />
                                    <div className={styles.team_col_content}>
                                        <h4>{t("Team.13")}</h4>
                                        <p>{t("Team.14")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.team_carou_item}>
                                <div className={styles.team_col_item}>
                                    <img src={Team6} alt="" />
                                    <div className={styles.team_col_content}>
                                        <h4>{t("Team.16")}</h4>
                                        <p>{t("Team.17")}</p>
                                    </div>
                                </div>
                            </div> */}
                        </Carousel>
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default ProjectTeam