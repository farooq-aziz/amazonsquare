import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Runner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import call from '../public/images/icons/call.png'

const Runner = (props) => {
    return (
        <>
            <section className={`${styles[props.runner]} secTion bg-second`}>
                <Container>
                    <Row className='align-items-start justify-content-between text-center'>
                        <Col lg={10} className='mx-auto'>
                            <div className={`${styles.runnerHead} mb-5`}>

                                {props.title ?
                                    <h2 className='font-36 fw-500 font-prime txt-white'>{props.title}</h2>
                                    :
                                    ''
                                }

                                {props.text ?
                                    <p className='font-16 fw-300 font-prime txt-white mb-0 mb-lg-4'>{props.text}</p>
                                    :
                                    ''
                                }

                            </div>
                        </Col>
                        <Col lg={4} className={styles.runnerCol}>
                            <div className={`${styles.runnerCard}`}>

                                {props.cardCount1 ?
                                    <h5 className='font-60 fw-700 font-prime txt-prime mb-3'>{props.cardCount1}</h5>
                                    :
                                    ''
                                }

                                {props.cardHead1 ?
                                    <h3 className='font-20 fw-600 font-prime txt-white mb-3'>{props.cardHead1}</h3>
                                    :
                                    ''
                                }

                                {props.cardText1 ?
                                    <p className='font-14 fw-300 font-prime txt-white'>{props.cardText1}</p>
                                    :
                                    ''
                                }

                            </div>
                        </Col>
                        <Col lg={4} className={styles.runnerCol}>
                            <div className={`${styles.runnerCard} ${styles.runerCard}`}>

                                {props.cardCount2 ?
                                    <h5 className='font-60 fw-700 font-prime txt-prime mb-3'>{props.cardCount2}</h5>
                                    :
                                    ''
                                }

                                {props.cardHead2 ?
                                    <h3 className='font-20 fw-600 font-prime txt-white mb-3'>{props.cardHead2}</h3>
                                    :
                                    ''
                                }

                                {props.cardText2 ?
                                    <p className='font-14 fw-300 font-prime txt-white'>{props.cardText2}</p>
                                    :
                                    ''
                                }

                            </div>
                        </Col>
                        <Col lg={4} className={styles.runnerCol}>
                            <div className={`${styles.runnerCard}`}>

                                {props.cardCount3 ?
                                    <h5 className='font-60 fw-700 font-prime txt-prime mb-3'>{props.cardCount3}</h5>
                                    :
                                    ''
                                }

                                {props.cardHead3 ?
                                    <h3 className='font-20 fw-600 font-prime txt-white mb-3'>{props.cardHead3}</h3>
                                    :
                                    ''
                                }

                                {props.cardText3 ?
                                    <p className='font-14 fw-300 font-prime txt-white'>{props.cardText3}</p>
                                    :
                                    ''
                                }

                            </div>
                        </Col>
                        <Col lg={12}>

                            {props.foldDiscuss ?
                                <div className={`${styles.bttns} mt-5`}>
                                    <Link className={`${styles.btnL} btns btnPrime`} href="#">
                                        {props.foldDiscuss}
                                    </Link>
                                    <Link className={`${styles.btnW} btons btns btnWhite`} href="tel:+1 (408) 689-7746">
                                        <Image className='img-fluid' src={call} alt='Amazon_Square' />
                                        {props.foldnumber}
                                    </Link>
                                </div>
                                :
                                ''
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Runner