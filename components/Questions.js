import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Questions.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import icon1 from '../public/images/icons/call-icon.png'
import icon2 from '../public/images/icons/email-icon.png'

const Questions = () => {
    return (
        <>
            <section className='bg-prime secTion'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} className='mb-5 mb-lg-0'>
                            <div>
                                <h2 className='font-40 fw-600 font-prime txt-white'>
                                    GOT A Questions?
                                </h2>
                                <p className='font-16 fw-400 font-prime txt-white'>
                                    Feel free to hit us up with any questions you may have. Call us any time or drop us a message to have your query attended by an expert Amazon consultant.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.consultImg}>
                                <Link href='tel:+1 (408) 689-7746'>
                                    <Image className='img-fluid'
                                        src={icon1}
                                        alt='Amazon_Square'
                                    />
                                    +1 (408) 689-7746
                                </Link>
                                <Link href='#'>
                                    <Image className='img-fluid'
                                        src={icon2}
                                        alt='Amazon_Square'
                                    />
                                    Live Chat
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Questions