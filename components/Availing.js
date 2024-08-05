import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Availing.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import foldImg from '../public/images/folds/availing.png'
import call from '../public/images/icons/call.png'


const Availing = () => {
    return (
        <>
            <section className={`${styles.availing} secTion`}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={4}>
                            <div className={styles.availingImg}>
                                <Image className='img-fluid'
                                    src={foldImg}
                                    alt='Amazon_Square'
                                />
                            </div>
                        </Col>
                        <Col lg={8} className='ps-lg-5'>
                            <div className={styles.availingTxt}>
                                <h3 className='font-22 fw-400 font-prime txt-second'>
                                    Reach More Customers by Availing Our
                                </h3>
                                <h2 className='font-36 fw-500 font-prime txt-prime'>
                                    Amazon Online Marketing Services
                                </h2>
                                <p className='font-16 fw-300 font-prime txt-second'>
                                    We use our highly trained teams and knowledge to make your business shine. We understand the algorithm system of Amazon, which allows us to be considerate of your individual goals concerning Amazon sales and revenue generation. Our team of experts assists clients with custom strategies that aim to maximize your approach on Amazon.
                                </p>
                                <div className={styles.avilList}>
                                    <ul>
                                        <li>Generate customer retention</li>
                                        <li>Higher-level communication</li>
                                        <li>Have better conversion rates</li>
                                    </ul>
                                    <ul>
                                        <li>Improve return on investment</li>
                                        <li>Interest potential customers</li>
                                        <li>Manage brand awareness</li>
                                    </ul>
                                </div>
                                <div className='bttns mt-3'>
                                    <Link className={`${styles.btnL} btons btns btnPrime`} href="#">
                                        Get a Quote
                                    </Link>
                                    <Link className={`${styles.btnW} btons btns btnSecond`} href="#">
                                        <Image className='img-fluid call' src={call} alt='Amazon_Square' />
                                        +1 (408) 689-7746
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Availing