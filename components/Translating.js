import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Translating.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import two from '../public/images/folds/four.png'
import icon1 from '../public/images/icons/enhance.png'
import icon2 from '../public/images/icons/boost.png'
import icon3 from '../public/images/icons/product.png'
import foldImg from '../public/images/folds/translating.png'


const Translating = () => {
    return (
        <>
            <section className={`${styles.translating} secTion`}>
                <Container>
                    <Row className={styles.transRow}>
                        <Col lg={8}>
                            <div className={styles.translatingHead}>
                                <Image className='img-fluid'
                                    src={two}
                                    alt='Amazon_Square'
                                />
                                <h2 className='font-36 fw-500 font-second txt-second my-3'>Translating Good Reviews to Sales</h2>
                                <p className='font-16 fw-300 font-second txt-second mb-4'>Sales drive your ranking, so we drive your sales up – making your ranking go off-the-charts.</p>
                            </div>
                            <div className={styles.translatingRow}>
                                <div className={`${styles.translatingCard} ${styles.card1}`}>
                                    <Image className='img-fluid'
                                        src={icon1}
                                        alt='Amazon_Square'
                                    />
                                    <h5 className='font-14 fw-500 font-second txt-second my-3'>Enhance Product Discoverability with SEO Optimization</h5>
                                </div>

                                <div className={`${styles.translatingCard} ${styles.card2}`}>
                                    <Image className='img-fluid'
                                        src={icon2}
                                        alt='Amazon_Square'
                                    />
                                    <h5 className='font-14 fw-500 font-second txt-second my-3'>Boost Customer Engagement with A+ Content</h5>
                                </div>

                                <div className={styles.translatingCard}>
                                    <Image className='img-fluid'
                                        src={icon3}
                                        alt='Amazon_Square'
                                    />
                                    <h5 className='font-14 fw-500 font-second txt-second my-3'>Monitor Product Reviews and Ratings</h5>
                                </div>
                            </div>
                            <div className='bttns mt-4'>
                                <Link className='btns homeBtn btnPrime' href="#">Get A Quote</Link>
                                <Link className='btns homeBtn btnSecond' href="#">Chat Now</Link>
                            </div>
                        </Col>
                        <div className={`${styles.translatingImg} bg-gray`}>
                            <Image className='img-fluid'
                                src={foldImg}
                                alt='Amazon_Square'
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Translating