import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Clients.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import icon1 from '../public/images/icons/cta1.png'
import icon2 from '../public/images/icons/cta2.png'
import icon3 from '../public/images/icons/cta3.png'
import icon4 from '../public/images/icons/cta4.png'
import icon5 from '../public/images/icons/cta5.png'
import icon6 from '../public/images/icons/cta6.png'


const Clients = () => {

    let clientslider = {
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
            <section className={`${styles.clients} bg-partnr py-5`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Slider {...clientslider} className='partners'>
                                <div className={styles.clintSlide}>
                                    <Image className='img-fluid'
                                        src={icon1}
                                        alt='Amazon_Square'
                                    />
                                </div>
                                <div className={styles.clintSlide}>
                                    <Image className='img-fluid'
                                        src={icon2}
                                        alt='Amazon_Square'
                                    />
                                </div>
                                <div className={styles.clintSlide}>
                                    <Image className='img-fluid'
                                        src={icon3}
                                        alt='Amazon_Square'
                                    />
                                </div>
                                <div className={styles.clintSlide}>
                                    <Image className='img-fluid'
                                        src={icon4}
                                        alt='Amazon_Square'
                                    />
                                </div>
                                <div className={styles.clintSlide}>
                                    <Image className='img-fluid'
                                        src={icon5}
                                        alt='Amazon_Square'
                                    />
                                </div>
                                <div className={styles.clintSlide}>
                                    <Image className='img-fluid'
                                        src={icon6}
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

export default Clients