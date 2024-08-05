import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Partners.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import icon1 from '../public/images/icons/logo1.png'
import icon2 from '../public/images/icons/logo2.png'
import icon3 from '../public/images/icons/logo3.png'
import icon4 from '../public/images/icons/logo4.png'
import icon5 from '../public/images/icons/logo5.png'


const Partners = () => {

    let partnrslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <section className={`${styles.partners} bg-partnr py-5`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Slider {...partnrslider} className='partners'>
                                <div className={styles.partSlide}>
                                    <Image className='img-fluid'
                                        src={icon1}
                                        alt='Amazon_Square'
                                    />
                                </div>
                                <div className={styles.partSlide}>
                                    <Image className='img-fluid'
                                        src={icon2}
                                        alt='Amazon_Square'
                                    />
                                </div>
                                <div className={styles.partnSlide}>
                                    <Image className='img-fluid'
                                        src={icon3}
                                        alt='Amazon_Square'
                                    />
                                </div>
                                <div className={styles.partSlide}>
                                    <Image className='img-fluid'
                                        src={icon4}
                                        alt='Amazon_Square'
                                    />
                                </div>
                                <div className={styles.partSlide}>
                                    <Image className='img-fluid'
                                        src={icon5}
                                        alt='Amazon_Square'
                                    />
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Partners