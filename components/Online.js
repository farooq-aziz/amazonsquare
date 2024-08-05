import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Online.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import foldImg from '../public/images/folds/online.png'
import call from '../public/images/icons/call.png'


const Online = () => {
    return (
        <>
            <section className={`${styles.online} secTion`}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={7} className='mb-5 mb-lg-0'>
                            <div className={styles.onlineHead}>
                                <h3 className='font-20 fw-500 font-prime txt-second'>
                                    Take Your Online Sales to the Next Level with Our Professional
                                </h3>
                                <h2 className='font-36 fw-700 font-prime txt-prime my-1'>
                                    Amazon Digital Services
                                </h2>
                                <p className='font-16 fw-300 font-prime txt-second mb-4'>
                                    Do you want to come on the first-page search results of Amazon and keep existing? At AMZ Profs, we extend customers with the latest solutions. Whether it is SEO on the notable channel, quality Ad words, or other aspects, we take care of all areas comprehensively to ensure the strong growth of your brand.
                                </p>
                                <div className={styles.onlineList}>
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
                            </div>
                            <div className='bttns mt-4'>
                                <Link className='btns btnPrime' href="#">
                                    Get A Quote
                                </Link>
                                <Link className='btons btns btnSecond' href="#">
                                    <Image className='img-fluid call' src={call} alt='Amazon_Square' />
                                    +1 (408) 689-7746
                                </Link>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className={styles.onlineImg}>
                                <Image className='img-fluid ms-xxl-5'
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

export default Online