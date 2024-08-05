import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Platform.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import foldImg from '../public/images/folds/platform.png'
import rebook from '../public/images/icons/reebok.png'
import arrow from '../public/images/icons/arrow.png'


const Platform = () => {
    return (
        <>
            <section className={`${styles.platform}`}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={5}>
                            <div className={`${styles.platformImg} mb-4`}>
                                <Image className='img-fluid'
                                    src={foldImg}
                                    alt='Amazon_Square'
                                />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className={`${styles.platformHead} ms-lg-5 ms-0`}>
                                <h2 className='font-36 fw-500 font-second txt-white my-4'>"Their Command Of The Amazon Platform Is Truly Second To None."</h2>
                                <p className='font-16 fw-300 font-second txt-white mb-4'>— AJ PURPURA, SR. KEY ACCTS MGR</p>
                                <Image className={`${styles.reBok} img-fluid mb-4`}
                                    src={rebook}
                                    alt='Amazon_Square'
                                />
                                <div className={styles.caseStdy}>
                                    <Link href='#' className='txt-white font-18 fw-600'>READ CASE STUDIES</Link>
                                    <Image className='img-fluid'
                                        src={arrow}
                                        alt='Amazon_Square'
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Platform