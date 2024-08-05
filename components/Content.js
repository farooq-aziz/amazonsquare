import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Content.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import foldImg from '../public/images/folds/content.png'
import call from '../public/images/icons/call.png'


const Content = () => {
    return (
        <>
            <section className={`${styles.content} secTion bg-fold`}>
                <Container>
                    <Row className='align-items-center justify-content-between'>
                        <Col lg={5} className='mb-5 mb-lg-0'>
                            <div className={styles.contentHead}>
                                <h2 className='font-36 fw-700 font-prime txt-second mb-3'>
                                    Choose Us For Your <br /> Amazon Content <br /> Marketing Needs
                                </h2>
                                <p className='font-16 fw-300 font-prime txt-second mb-4'>
                                    Our clients love working with us because of our professionalism, guaranteed results, and affordable Amazon marketing services. If you are still not convinced, consider the following statistics:
                                </p>
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
                        <Col lg={6}>
                            <div className={styles.contentImg}>
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

export default Content