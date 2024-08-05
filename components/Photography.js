import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Photography.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import two from '../public/images/folds/three.png'
import icon1 from '../public/images/icons/layout.png'
import icon2 from '../public/images/icons/flask.png'
import icon3 from '../public/images/icons/traffic.png'
import foldImg from '../public/images/folds/photography.png'


const Photography = () => {
    return (
        <>
            <section className={`${styles.photography} bg-second secTion`}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={4} className='mb-5 mb-lg-0'>
                            <div className={styles.photographyImg}>
                                <Image
                                    src={foldImg}
                                    alt='Amazon_Square'
                                />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className={styles.photographyHead}>
                                <Image className='img-fluid'
                                    src={two}
                                    alt='Amazon_Square'
                                />
                                <h2 className='font-36 fw-500 font-second txt-prime my-3'>Know Product Photography <br /> That Sells</h2>
                                <p className='font-16 fw-300 font-second txt-white mb-4'>Lift your products higher up in the Amazon Search Engine. Increase your CTR and conversion rate with Product Image Optimization Tips.</p>
                            </div>
                            <div className={styles.photographyRow}>
                                <div className={`${styles.photographyCard}`}>
                                    <Image className='img-fluid'
                                        src={icon1}
                                        alt='Amazon_Square'
                                    />
                                    <h5 className='font-14 fw-500 font-second txt-white my-3'>Customize Layouts for Optimal Conversion</h5>
                                </div>
                                <div className={styles.photographyCard}>
                                    <Image className='img-fluid'
                                        src={icon2}
                                        alt='Amazon_Square'
                                    />
                                    <h5 className='font-14 fw-500 font-second txt-white my-3'>Promote Seasonal Items and Showcase New Products</h5>
                                </div>
                                <div className={styles.photographyCard}>
                                    <Image className='img-fluid'
                                        src={icon3}
                                        alt='Amazon_Square'
                                    />
                                    <h5 className='font-14 fw-500 font-second txt-white my-3'>Drive Brand Store Traffic with Amazon Display Advertising</h5>
                                </div>
                            </div>
                            <div className={`${styles.bttns} bttns mt-4`}>
                                <Link className={`${styles.btnY} btns homeBtn btnPrime`} href="#">Get A Quote</Link>
                                <Link className={`${styles.btnW} btns homeBtn btnWhite`} href="#">Chat Now</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Photography