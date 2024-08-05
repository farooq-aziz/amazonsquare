import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/OneStop.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import logo from '../public/images/logo-dark.png'
import icon1 from '../public/images/icons/layout.png'
import icon2 from '../public/images/icons/flask.png'
import icon3 from '../public/images/icons/traffic.png'


const OneStop = () => {
    return (
        <>
            <section className={`${styles.oneStop} secTion`}>
                <Container>
                    <Row className='justify-content-center align-items-center text-center'>
                        <Col lg={12}>
                            <div className={styles.oneStopHead}>
                                <Image className='img-fluid'
                                    src={logo}
                                    alt='Amazon_Square'
                                />
                                <h2 className='font-36 fw-500 font-second txt-second my-4'>ONE-STOP-SHOP FOR AMAZON MARKETING, <br /> SEO & OPTIMISATION</h2>
                                <p className='font-16 fw-300 font-second txt-second mb-5'>Are you an Amazon seller looking for holistic ways to expand your reach – to scale and grow your business efficiently? Amazon Pro Hub can help. We are Amazon optimization consultants that can enable you with fast and efficient spike in your Amazon product ranking and profitability. Our Amazon SEO experts can get you started with just two things – 1: an Amazon seller account – 2: a product with a potential market. If this sounds like you, Amazon Pro Hub can help boost your rankings like never before. Take a peek into our detailed process and understand how we can turn your Amazon store into Multi-Million making machine.</p>
                            </div>
                            <Row className={styles.oneStopRow}>
                                <Col lg={4}>
                                    <div className={`${styles.oneStopCard} bordeRight`}>
                                        <Image className='img-fluid'
                                            src={icon1}
                                            alt='Amazon_Square'
                                        />
                                        <h5 className='font-14 fw-500 font-second txt-second my-3'>
                                            Dedicated <br /> Consultants
                                        </h5>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={`${styles.oneStopCard} bordeRight`}>
                                        <Image className='img-fluid'
                                            src={icon2}
                                            alt='Amazon_Square'
                                        />
                                        <h5 className='font-14 fw-500 font-second txt-second my-3'>
                                            Industry Leading <br /> Technology
                                        </h5>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.oneStopCard}>
                                        <Image className='img-fluid'
                                            src={icon3}
                                            alt='Amazon_Square'
                                        />
                                        <h5 className='font-14 fw-500 font-second txt-second my-3'>
                                            Holistic <br /> Approach
                                        </h5>
                                    </div>
                                </Col>
                            </Row>
                            <div className={`${styles.oneBtts} bttns mt-5`}>
                                <Link className='btns homeBtn btnPrime' href="#">Get A Quote</Link>
                                <Link className='btns homeBtn btnSecond' href="#">Chat Now</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default OneStop