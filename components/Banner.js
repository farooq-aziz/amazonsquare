import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Banner.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const Banner = (props) => {
    return (
        <>
            <section className={`${styles[props.banner]}`}>
                <Container>
                    <Row className={styles.bannerRow}>
                        <Col xl={6} className={`${styles[props.alignclass]} ${styles[props.sizeclass]} ${styles.flexStrech}`}>
                            <div className={styles.bannerTxt}>
                                {props.title ?
                                    props.title
                                    :
                                    ''
                                }

                                {props.subtitle ?
                                    <h2 className='font-30 fw-500 font-second txt-white'>{props.subtitle}</h2>
                                    :
                                    ''
                                }

                                {props.text ?
                                    <p className='font-14 fw-500 font-second txt-white mb-1'>{props.text}</p>
                                    :
                                    ''
                                }

                                {props.subtext ?

                                    <p className='font-14 fw-300 font-second txt-white'>{props.subtext}</p>
                                    :
                                    ''
                                }

                                {props.subtext1 ?

                                    <p className='font-14 fw-500 font-second txt-second mb-1'> {props.subtext1}</p>
                                    :
                                    ''
                                }

                                {props.subtext2 ?

                                    <p className='font-14 fw-300 font-secondary txt-secondary'> {props.subtext2}</p>
                                    :
                                    ''
                                }

                                {props.subtext3 ?

                                    <p className='font-16 fw-300 font-secondary txt-secondary'> {props.subtext3}</p>
                                    :
                                    ''
                                }

                                {props.subtext4 ?

                                    <p className='font-16 fw-300 font-secondary txt-secondary'> {props.subtext4}</p>
                                    :
                                    ''
                                }

                                {props.discuss ?
                                    <div className={`${styles.bttns} mt-3`}>
                                        {props.discuss}
                                        {props.homebannernum}
                                    </div>
                                    :
                                    ''
                                }
                            </div>
                        </Col>
                        <Col xl={6} className={`${styles.bannImg} ${styles.flexStrech} ${styles[props.alignclass]}`}>
                            <div className={styles.bannerImg}>
                                <Image className='img-fluid'
                                    src={props.imageban}
                                    alt='Amazon_Square'
                                    priority
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner