import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Consult.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import foldImg from '../public/images/folds/consult.png'
import call from '../public/images/icons/call.png'

const Consult = () => {
    return (
        <>
            <section className={`${styles.consult} secTion`}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={7} className='mb-5 mb-lg-0'>
                            <div className={styles.consultHead}>
                                <h2 className='font-40 fw-600 font-prime text-black'>
                                    Consult <span className='fw-400'>Our</span> Professionals <br />
                                    <span className='fw-400'> for </span>
                                    <span className='txt-white'>Unbeatable Results</span>
                                </h2>
                                <p className='font-16 fw-400 font-prime text-black mb-4'>
                                    We are just a few taps away from you!
                                </p>
                            </div>
                            <div className='bttns mt-4'>
                                <Link className={`${styles.btnW} btns btnWhite`} href="#">
                                    Get A Quote
                                </Link>
                                <Link className={`${styles.btnS} btons btns btnSecond`} href="#">
                                    <Image className='img-fluid' src={call} alt='Amazon_Square' />
                                    +1 (408) 689-7746
                                </Link>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className={styles.consultImg}>
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

export default Consult