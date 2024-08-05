import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Convinced.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import call from '../public/images/icons/call.png'


const Convinced = (props) => {
    return (
        <>
            <section className={`${styles[props.convinced]} secTion`}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <div className={`${styles.convincedHead} me-0 me-lg-5`}>

                                {props.title ?
                                    props.title
                                    :
                                    ''
                                }

                                {props.text ?
                                    <p className='font-16 fw-300 font-prime txt-white mb-4'>{props.text}</p>
                                    :
                                    ''
                                }

                                {props.foldDiscuss ?
                                    <div className='bttns mt-4'>
                                        <Link className={`${styles.btnP} btns btnPrime`} href="#">
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
                            </div>

                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.convincedImg} mb-4`}>
                                <Image className='img-fluid'
                                    src={props.imagfold}
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

export default Convinced