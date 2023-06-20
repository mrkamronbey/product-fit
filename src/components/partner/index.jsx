import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../styled-app'
import Slider from "react-slick";
import './style.css'

import Slider1 from '../../assets/partner/slider1.svg'
import Slider2 from '../../assets/partner/slider2.svg'
import Slider3 from '../../assets/partner/slider3.svg'
import Slider4 from '../../assets/partner/slider4.svg'
import Slider5 from '../../assets/partner/slider5.svg'


const Partner = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className={styles.partner_section}>
                <WrapperContainer>
                    <div className="slider_boxs">
                        <Slider {...settings}>
                            <div>
                                <img src={Slider1} alt="" />
                            </div>
                            <div>
                                <img src={Slider2} alt="" />
                            </div>
                            <div>
                                <img src={Slider3} alt="" />
                            </div>
                            <div>
                                <img src={Slider4} alt="" />
                            </div>
                            <div>
                                <img src={Slider5} alt="" />
                            </div>
                            <div>
                                <img src={Slider1} alt="" />
                            </div>
                            <div>
                                <img src={Slider2} alt="" />
                            </div>
                            <div>
                                <img src={Slider3} alt="" />
                            </div>
                            <div>
                                <img src={Slider4} alt="" />
                            </div>
                            <div>
                                <img src={Slider5} alt="" />
                            </div>
                        </Slider>
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default Partner