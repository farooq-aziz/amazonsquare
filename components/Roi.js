import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Roi.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import one from '../public/images/folds/one.png'
import icon1 from '../public/images/icons/research.png'
import icon2 from '../public/images/icons/optimization.png'
import icon3 from '../public/images/icons/shipment.png'
import icon4 from '../public/images/icons/analysis.png'
import icon5 from '../public/images/icons/copywriting.png'
import icon6 from '../public/images/icons/benefit.png'


const Roi = () => {
    return (
        <>
            <section className={`${styles.roi} secTion`}>
                <Container>
                    <Row className='mb-5'>
                        <Col lg={7}>
                            <div className={styles.roiHead}>
                                <Image className='img-fluid'
                                    src={one}
                                    alt='Amazon_Square'
                                />
                                <h2 className='font-36 fw-500 font-second txt-second my-3'>Amazon Search Engine Works Differently than Google Search Engine</h2>
                                <p className='font-16 fw-300 font-second txt-second'>To increase ROI, you have to understand the internal workings of Amazon Search Engine – how it’s design for the shopper – and how Buyability converts into Visibility.</p>
                                <div className='bttns mt-3 mb-4'>
                                    <Link className='btns homeBtn btnPrime' href="#">Get A Quote</Link>
                                    <Link className='btns homeBtn btnSecond' href="#">Chat Now</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className={styles.roiRow}>
                        <Col lg={4}>
                            <div className={styles.roiCard}>
                                <Image className='img-fluid'
                                    src={icon1}
                                    alt='Amazon_Square'
                                />
                                <h5 className='font-18 fw-500 font-second txt-second my-3'>Keyword Research & Analysis</h5>
                                <p className='font-16 fw-300 font-second txt-second'>Our deep keyword research and analysis enable us to find out the most profitable keywords for your product – best amazon keyword optimization with long-tail keywords.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.roiCard}>
                                <Image className='img-fluid'
                                    src={icon2}
                                    alt='Amazon_Square'
                                />
                                <h5 className='font-18 fw-500 font-second txt-second my-3'>On-page Optimization & Improvemen</h5>
                                <p className='font-16 fw-300 font-second txt-second'>Our deep keyword research and analysis enable us to find out the most profitable keywords for your product – best amazon keyword optimization with long-tail keywords.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.roiCard}>
                                <Image className='img-fluid'
                                    src={icon3}
                                    alt='Amazon_Square'
                                />
                                <h5 className='font-18 fw-500 font-second txt-second my-3'>Create Shipment & Fba Set-up</h5>
                                <p className='font-16 fw-300 font-second txt-second'>We have experts who can take care of all shipment, organizing and coordinating down to the process of labelling and fulfilment centres.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.roiCard}>
                                <Image className='img-fluid'
                                    src={icon4}
                                    alt='Amazon_Square'
                                />
                                <h5 className='font-18 fw-500 font-second txt-second my-3'>Competition Analysis</h5>
                                <p className='font-16 fw-300 font-second txt-second'>We tap into the profitability potential of your competing market – uncovering precise number of sales you need to push your store to the 1st page of Amazon.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.roiCard}>
                                <Image className='img-fluid'
                                    src={icon5}
                                    alt='Amazon_Square'
                                />
                                <h5 className='font-18 fw-500 font-second txt-second my-3'>Copywriting</h5>
                                <p className='font-16 fw-300 font-second txt-second'>We create copies that walk, talk and sell for you – optimised copies that are designed to immediately convert.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.roiCard}>
                                <Image className='img-fluid'
                                    src={icon6}
                                    alt='Amazon_Square'
                                />
                                <h5 className='font-18 fw-500 font-second txt-second my-3'>Benefit Driven Imagery</h5>
                                <p className='font-16 fw-300 font-second txt-second'>We offer benefit-driven imagery where we visually showcase the primary benefits of your products and let them sell themselves.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Roi