import React from 'react'
import styles from '@/styles/Rate.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const Rate = (props) => {
    return (
        <>
            <section className={`${styles[props.rate]} ${styles[props.alirate]} secTion`}>
                <div className={`${styles.divBef} mx-auto`}></div>
                <Container>
                    <Row className='align-items-start justify-content-between text-center'>
                        <Col lg={10} className='mx-auto'>
                            <div className={`${styles.rateHead} mb-0 mb-lg-5`}>

                                {props.rateTitle ?
                                    <h2 className='font-36 fw-500 font-prime txt-second mb-2'>{props.rateTitle}</h2>
                                    :
                                    ''
                                }

                                {props.rateText ?
                                    <p className='font-16 fw-300 font-prime txt-second mb-0 mb-lg-5'>{props.rateText}</p>
                                    :
                                    ''
                                }

                            </div>
                        </Col>
                        <Col lg={4} className={styles.rateCol}>
                            <div className={`${styles.rateCard}`}>

                                {props.cardCount1 ?
                                    <h5 className='font-60 fw-700 font-prime txt-prime mb-3'>{props.cardCount1}</h5>
                                    :
                                    ''
                                }

                                {props.cardHead1 ?
                                    <h3 className='font-20 fw-600 font-prime txt-second mb-3'>{props.cardHead1}</h3>
                                    :
                                    ''
                                }

                                {props.cardText1 ?
                                    <p className='font-14 fw-300 font-prime txt-second'>{props.cardText1}</p>
                                    :
                                    ''
                                }

                            </div>
                        </Col>
                        <Col lg={4} className={styles.rateCol}>
                            <div className={`${styles.rateCard} ${styles.ratCard}`}>

                                {props.cardCount2 ?
                                    <h5 className='font-60 fw-700 font-prime txt-prime mb-3'>{props.cardCount2}</h5>
                                    :
                                    ''
                                }

                                {props.cardHead2 ?
                                    <h3 className='font-20 fw-600 font-prime txt-second mb-3'>{props.cardHead2}</h3>
                                    :
                                    ''
                                }

                                {props.cardText2 ?
                                    <p className='font-14 fw-300 font-prime txt-second'>{props.cardText2}</p>
                                    :
                                    ''
                                }

                            </div>
                        </Col>
                        <Col lg={4} className={styles.rateCol}>
                            <div className={`${styles.rateCard}`}>

                                {props.cardCount3 ?
                                    <h5 className='font-60 fw-700 font-prime txt-prime mb-3'>{props.cardCount3}</h5>
                                    :
                                    ''
                                }

                                {props.cardHead3 ?
                                    <h3 className='font-20 fw-600 font-prime txt-second mb-3'>{props.cardHead3}</h3>
                                    :
                                    ''
                                }

                                {props.cardText3 ?
                                    <p className='font-14 fw-300 font-prime txt-second'>{props.cardText3}</p>
                                    :
                                    ''
                                }

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Rate