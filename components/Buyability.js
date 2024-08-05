import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Buyability.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import two from '../public/images/folds/two.png'
import icon1 from '../public/images/icons/roi.png'
import icon2 from '../public/images/icons/ads.png'
import icon3 from '../public/images/icons/infromation.png'
import foldImg from '../public/images/folds/buyability.png'


const Buyability = () => {
    return (
        <>
            <section className={`${styles.buyability} secTion`}>
                <Container>
                    <Row>
                        <Col lg={8} className='mb-5 mb-lg-0'>
                            <div className={styles.buyabilityHead}>
                                <Image className='img-fluid'
                                    src={two}
                                    alt='Amazon_Square'
                                />
                                <h2 className='font-36 fw-500 font-second txt-second my-3'>Translating Buyability to Visibility <br /> with Right Keywords</h2>
                                <p className='font-16 fw-300 font-second txt-second mb-4'>Amazon’s search engine’s unique design revolves around enhancing products’ Buyability – as Amazon cares about the buyers and selling to those buyers. Amazon product rankings reflect their intention to enable the most appropriate shopping experience to their buyers – the end goal always being to list the most relevant products for the specific buyer search terms.</p>
                            </div>
                            <div className={styles.buyabilityRow}>
                                <div className={`${styles.buyabilityCard} ${styles.card1}`}>
                                    <Image className='img-fluid'
                                        src={icon1}
                                        alt='Amazon_Square'
                                    />
                                    <h5 className='font-14 fw-500 font-second txt-second my-3'>Maximize ROI with Amazon Paid Search Advertising</h5>
                                </div>
                                <div className={styles.buyabilityCard}>
                                    <Image className='img-fluid'
                                        src={icon2}
                                        alt='Amazon_Square'
                                    />
                                    <h5 className='font-14 fw-500 font-second txt-second my-3'>Reengage Customers with Amazon Display Advertising</h5>
                                </div>
                                <div className={styles.buyabilityCard}>
                                    <Image className='img-fluid'
                                        src={icon3}
                                        alt='Amazon_Square'
                                    />
                                    <h5 className='font-14 fw-500 font-second txt-second my-3'>Real-Time Reporting with Advertising Dashboard</h5>
                                </div>
                            </div>
                            <div className='bttns mt-4'>
                                <Link className='btns homeBtn btnPrime' href="#">Get A Quote</Link>
                                <Link className='btns homeBtn btnSecond' href="#">Chat Now</Link>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.buyabilityImg}>
                                <Image className='img-fluid ms-0 ms-xl-5'
                                    src={foldImg}
                                    alt='Amazon_Square'
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Buyability 