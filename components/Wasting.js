import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Wasting.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import call from '../public/images/icons/call.png'


const Wasting = (props) => {
    return (
        <>
            <section className={`${styles[props.wasting]} secTion`}>
                <Container>
                    <Row className={styles.wastingRow}>
                        <Col lg={6}>
                            <div className='py-0 py-lg-0'>

                                {props.subtitle ?
                                    <h3 className='font-18 fw-400 font-prime txt-second'>{props.subtitle}</h3>
                                    :
                                    ''
                                }

                                {props.title ?
                                    <h2 className='font-36 fw-700 font-prime txt-prime my-3'>{props.title}</h2>
                                    :
                                    ''
                                }

                                {props.text ?
                                    <p className='font-14 fw-300 font-prime txt-second'>{props.text}</p>
                                    :
                                    ''
                                }

                            </div>

                            {props.foldDiscuss ?
                                <div className='bttns mt-4'>
                                    <Link className='btns btnPrime' href="#">
                                        {props.foldDiscuss}
                                    </Link>
                                    <Link className='btons btns btnSecond' href="tel:+1 (408) 689-7746">
                                        <Image className='img-fluid call' src={call} alt='Amazon_Square' />
                                        {props.foldnumber}
                                    </Link>
                                </div>
                                :
                                ''
                            }
                        </Col>

                        <Col lg={6}>
                            <div className={styles.wastingImg}>
                                <Image className='img-fluid'
                                    src={props.imagfold}
                                    alt='Amazon_Square'
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    )
}

export default Wasting