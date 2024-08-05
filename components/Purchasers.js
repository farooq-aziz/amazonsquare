import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Purchasers.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import icon1 from '../public/images/icons/campaigns.png'
import icon2 from '../public/images/icons/expertise.png'
import icon3 from '../public/images/icons/time.png'
import call from '../public/images/icons/call.png'


const Purchasers = () => {
    return (
        <>
            <section className={`${styles.purchasers} secTion bg-second`}>
                <Container>
                    <Row className='align-items-start justify-content-between text-center'>
                        <Col lg={10} className='mx-auto'>
                            <div className={`${styles.purchasersHead}`}>
                                <h2 className='font-36 fw-500 font-prime txt-white mb-2'>
                                    Let your Products Come Across Potential Purchasers with Our Amazon Online Services
                                </h2>
                                <p className='font-16 fw-300 font-prime txt-white mb-0 mb-lg-4'>
                                    Millions of people are buying things from Amazon. As a business operator, you need the right marketing approach for the platform to outdo rivals. We use analytics to identify the highest earners and concentrate our efforts where the most money is made.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.purchasersCol}>
                            <div className={`${styles.purchasersCard} ${styles.prchsrCard}`}>
                                <Image className='img-fluid mx-auto mb-3'
                                    src={icon1}
                                    alt='Amazon_Square'
                                />
                                <h3 className='font-22 fw-600 font-prime txt-white mb-3'>
                                    Run Successful Campaigns
                                </h3>
                                <p className='font-14 fw-300 font-prime txt-white'>
                                    Our Amazon seller consultants are skilled at planning and running successful campaigns for online stores, causing a drastic increase in sales and brand awareness.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.purchasersCol}>
                            <div className={`${styles.purchasersCard} ${styles.prchsrCard}`}>
                                <Image className='img-fluid mx-auto mb-3'
                                    src={icon2}
                                    alt='Amazon_Square'
                                />
                                <h3 className='font-22 fw-600 font-prime txt-white mb-3'>
                                    Your Lack of Expertise
                                </h3>
                                <p className='font-14 fw-300 font-prime txt-white'>
                                    While Amazon is a rewarding platform for sellers, some policies can get your online store banned, When you hire Amazon professionals, they are well-aware of all the changing policies.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.purchasersCol}>
                            <div className={`${styles.purchasersCard}`}>
                                <Image className='img-fluid mx-auto mb-3'
                                    src={icon3}
                                    alt='Amazon_Square'
                                />
                                <h3 className='font-22 fw-600 font-prime txt-white mb-3'>
                                    Save Your Time
                                </h3>
                                <p className='font-14 fw-300 font-prime txt-white'>
                                    Hiring Amazon professionals to set up your online store saves your time, It benefits your business in the long run as well. From creating optimized listings to plan advertising campaigns, our team does it all for you.
                                </p>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={`${styles.bttns} mt-5 pt-xxl-5`}>
                                <Link className={`${styles.btnL} btns btnPrime`} href="#">
                                    Get A Quote
                                </Link>
                                <Link className={`${styles.btnW} btons btns btnWhite`} href="#">
                                    <Image className='img-fluid' src={call} alt='Amazon_Square' />
                                    +1 (408) 689-7746
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Purchasers