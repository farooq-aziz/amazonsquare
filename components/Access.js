import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Access.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import foldImg from '../public/images/folds/books.png'
import call from '../public/images/icons/call.png'

const Access = () => {
    return (
        <>
            <section className={`${styles.access} secTion pb-0`}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={12}>
                            <div className={styles.accessTxt}>
                                <h3 className='font-16 fw-400 font-prime txt-second'>
                                    Get Access to Best Amazon
                                </h3>
                                <h2 className='font-36 fw-600 font-prime txt-prime'>
                                    Amazon Author Page
                                </h2>
                                <p className='font-16 fw-300 font-prime txt-second mb-3'>
                                    Our Amazon Author Page Optimization Services can help you get noticed!
                                </p>
                                <p className='font-16 fw-300 font-prime txt-second mb-3'>
                                    The Amazon Authors Page features your profile so that people may learn more about you. As an Amazon author, keep in mind that you must be aware of how internet business is conducted as well as the tough competition you will encounter as more writers enter the market.
                                </p>
                                <p className='font-16 fw-300 font-prime txt-second mb-3'>
                                    Why Do You Need an Amazon Author Page?
                                </p>
                                <p className='font-16 fw-300 font-prime txt-second mb-3'>
                                    You have the option to advertise your readings on your Author’s Page, enhance book searches, and have an engaging and appealing design for your Amazon profile. We make it simple for you to update your Amazon Author Pages and stay up to speed on the status of your literary creations. Additionally, you may set it up in many languages to appeal to people throughout the world.
                                    Advantages of creating an Amazon Author Page
                                </p>
                                <p className='font-16 fw-300 font-prime txt-second'>
                                    Authors of all genres, racial origins, and geographical places may create their individual Amazon author profiles with the greatest service available, Amazon Square.
                                </p>
                                <div className={`${styles.bttns} bttns mt-5`}>
                                    <Link className='btons btns btnPrime' href="#">
                                        Get a Quote
                                    </Link>
                                    <Link className='btons btns btnSecond' href="#">
                                        <Image className='img-fluid call' src={call} alt='Amazon_Square' />
                                        +1 (408) 689-7746
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.accessImg}>
                                <Image className='img-fluid'
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

export default Access