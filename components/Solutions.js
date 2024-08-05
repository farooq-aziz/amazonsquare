import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Solutions.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import call from '../public/images/icons/call.png'


const Solutions = (props) => {
    return (
        <>
            <section className={`${styles[props.solutions]} ${styles[props.alignclass]} bg-prime`}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={5}>
                            <div className={styles.solutionsImg}>
                                <Image className='img-fluid'
                                    src={props.imagfold}
                                    alt='Amazon_Square'
                                />
                            </div>
                        </Col>
                        <Col lg={7} className='mt-5 mt-lg-0'>
                            <div className={styles.solutionsTxt}>

                                {props.subtitle ?
                                    <h3 className='font-16 fw-500 font-prime text-black mb-2'>{props.subtitle}</h3>
                                    :
                                    ''
                                }

                                {props.title ?
                                    props.title
                                    :
                                    ''
                                }

                                {props.text ?
                                    <p className='font-16 fw-500 font-prime text-black mb-4'>{props.text}</p>
                                    :
                                    ''
                                }

                                {props.textName ?
                                    <h5 className='font-18 fw-500 font-prime text-white'>{props.textName}</h5>
                                    :
                                    ''
                                }

                                {props.subtext ?
                                    <p className='font-14 fw-500 font-prime text-black mb-4'>{props.subtext}</p>
                                    :
                                    ''
                                }

                            </div>

                            {props.foldDiscuss ?
                                <div className='bttns mt-4'>
                                    <Link className={`${styles.btnW} btns btnWhite`} href="#">
                                        {props.foldDiscuss}
                                    </Link>
                                    <Link className={`${styles.btnS} btons btns btnSecond`} href="tel:+1 (408) 689-7746">
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

export default Solutions