import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Should.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import call from '../public/images/icons/call.png'


const Brand = (props) => {
    return (
        <>
            <section className={`${styles[props.should]} secTion`}>
                <Container>
                    <Row className={styles.shouldRow}>
                        <Col lg={6}>
                            <div className='pt-0 pt-md-5'>

                                {props.subtitle ?
                                    <h3 className='font-18 fw-400 font-prime text-black'>{props.subtitle}</h3>
                                    :
                                    ''
                                }

                                {props.title ?
                                    <h2 className='font-36 fw-700 font-prime txt-prime my-3'>{props.title}</h2>
                                    :
                                    ''
                                }

                                {props.subtitle1 ?
                                    <h3 className='font-18 fw-500 font-prime text-black'>{props.subtitle1}</h3>
                                    :
                                    ''
                                }

                                {props.subtitle2 ?
                                    <h3 className='font-18 fw-500 font-prime text-black'>{props.subtitle2}</h3>
                                    :
                                    ''
                                }

                                {props.subtitle3 ?
                                    <h3 className='font-18 fw-300 font-prime text-black'>{props.subtitle3}</h3>
                                    :
                                    ''
                                }

                                {props.text ?
                                    <p className='font-14 fw-300 font-prime text-black'>{props.text}</p>
                                    :
                                    ''
                                }

                                {props.text1 ?
                                    <p className='font-14 fw-500 font-prime text-black'>{props.text1}</p>
                                    :
                                    ''
                                }

                                {props.subtext ?
                                    <p className='font-14 fw-300 font-prime text-black'>{props.subtext}</p>
                                    :
                                    ''
                                }

                                {props.subtext1 ?
                                    <p className='font-14 fw-300 font-prime text-black'>{props.subtext1}</p>
                                    :
                                    ''
                                }

                            </div>

                            {props.foldDiscuss ?
                                <div className='bttns mt-5'>
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
                        <Col lg={6} className={`${styles[props.alignclass]}`}>
                            <div className={styles.shouldImg}>
                                <Image className='img-fluid ms-0 ms-lg-5'
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

export default Brand