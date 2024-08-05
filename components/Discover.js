import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Discover.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import icon1 from '../public/images/testimonial/wonder-img.png'
import icon2 from '../public/images/testimonial/testmnl-star.png'
import icon3 from '../public/images/testimonial/wonder-arrow.png'


const Discover = () => {

    let discover = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
    };

    return (
        <>
            <section className={`${styles.discover} bg-second secTion`}>
                <Container>
                    <Slider {...discover} className='discover'>
                        <div>
                            <Row className='align-items-center'>
                                <Col lg={6}>
                                    <div className={styles.discoverTxt}>
                                        <h2 className='font-36 fw-500 font-second txt-white mb-3'>
                                            Discover How Businesses Have Leveraged Expert SEO Services From Amazon Pro Hub To Drive Exceptional Sales!
                                        </h2>
                                        <p className='font-16 fw-300 font-second txt-white mb-4'>
                                            Creating Brilliant Amazon SEO Services is what we do best!
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.wonder}>
                                        <Image className='img-fluid'
                                            src={icon1}
                                            alt='Amazon_Square'
                                        />
                                        <h3 className='font-26 fw-500 font-second txt-prime mb-3'>
                                            SEO services from Amazon Pro Hub really worked wonder for our online store!
                                        </h3>
                                        <p className='font-16 fw-300 font-second txt-white mb-2'>
                                            Amazon Pro Hub SEO Services gave us a glimpse into what our customers want, which is huge for driving sales. They are a perfect platform to help you figure out what longtail phrases to feature in your ad campaigns, guaranteeing that you are getting your products in front of the right customers.
                                        </p>
                                        <p className='font-16 fw-300 font-second txt-prime mb-2'>
                                            - Ryan Kortan
                                        </p>
                                        <Image className='img-fluid mb-3'
                                            src={icon2}
                                            alt='Amazon_Square'
                                        />
                                        <Image className='img-fluid'
                                            src={icon3}
                                            alt='Amazon_Square'
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className='align-items-center'>
                                <Col lg={6}>
                                    <div className={styles.discoverTxt}>
                                        <h2 className='font-36 fw-500 font-second txt-white mb-3'>
                                            Discover How Businesses Have Leveraged Expert SEO Services From Amazon Pro Hub To Drive Exceptional Sales!
                                        </h2>
                                        <p className='font-16 fw-300 font-second txt-white mb-4'>
                                            Creating Brilliant Amazon SEO Services is what we do best!
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.wonder}>
                                        <Image className='img-fluid'
                                            src={icon1}
                                            alt='Amazon_Square'
                                        />
                                        <h3 className='font-26 fw-500 font-second txt-prime mb-3'>
                                            SEO services from Amazon Pro Hub really worked wonder for our online store!
                                        </h3>
                                        <p className='font-16 fw-300 font-second txt-white mb-2'>
                                            Amazon Pro Hub SEO Services gave us a glimpse into what our customers want, which is huge for driving sales. They are a perfect platform to help you figure out what longtail phrases to feature in your ad campaigns, guaranteeing that you are getting your products in front of the right customers.
                                        </p>
                                        <p className='font-16 fw-300 font-second txt-prime mb-2'>
                                            - Ryan Kortan
                                        </p>
                                        <Image className='img-fluid mb-3'
                                            src={icon2}
                                            alt='Amazon_Square'
                                        />
                                        <Image className='img-fluid'
                                            src={icon3}
                                            alt='Amazon_Square'
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className='align-items-center'>
                                <Col lg={6}>
                                    <div className={styles.discoverTxt}>
                                        <h2 className='font-36 fw-500 font-second txt-white mb-3'>
                                            Discover How Businesses Have Leveraged Expert SEO Services From Amazon Pro Hub To Drive Exceptional Sales!
                                        </h2>
                                        <p className='font-16 fw-300 font-second txt-white mb-4'>
                                            Creating Brilliant Amazon SEO Services is what we do best!
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.wonder}>
                                        <Image className='img-fluid'
                                            src={icon1}
                                            alt='Amazon_Square'
                                        />
                                        <h3 className='font-26 fw-500 font-second txt-prime mb-3'>
                                            SEO services from Amazon Pro Hub really worked wonder for our online store!
                                        </h3>
                                        <p className='font-16 fw-300 font-second txt-white mb-2'>
                                            Amazon Pro Hub SEO Services gave us a glimpse into what our customers want, which is huge for driving sales. They are a perfect platform to help you figure out what longtail phrases to feature in your ad campaigns, guaranteeing that you are getting your products in front of the right customers.
                                        </p>
                                        <p className='font-16 fw-300 font-second txt-prime mb-2'>
                                            - Ryan Kortan
                                        </p>
                                        <Image className='img-fluid mb-3'
                                            src={icon2}
                                            alt='Amazon_Square'
                                        />
                                        <Image className='img-fluid'
                                            src={icon3}
                                            alt='Amazon_Square'
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </section>
        </>
    )
}

export default Discover