import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Should.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import call from '../public/images/icons/call.png'


const Enhance = (props) => {
    return (
        <>
            <section className={`${styles.should} secTion`}>
                <Container>
                    <Row className={styles.shouldRow}>
                        <Col lg={12}>
                            <div className='text-center'>

                                {props.maintitle0 ?

                                    <h4 className='font-14 fw-500 font-prime text-black'>
                                        {props.maintitle0}
                                    </h4>
                                    :
                                    ''
                                }

                                {props.titlemin ?

                                    <h4 className='font-14 fw-500 font-prime txt-prime'>
                                        {props.titlemin}
                                    </h4>
                                    :
                                    ''
                                }

                                {props.maintitle ?

                                    <h2 className='font-36 fw-700 font-prime text-black'>
                                        {props.maintitle}
                                    </h2>
                                    :
                                    ''
                                }

                                {props.maintitle1 ?

                                    <h2 className='font-36 fw-700 font-prime txt-prime mb-0 mb-lg-4'>
                                        {props.maintitle1}
                                    </h2>
                                    :
                                    ''
                                }

                                {props.maintitle2 ?

                                    <h4 className='font-14 fw-500 font-prime text-black mb-0 mb-lg-5'>
                                        {props.maintitle2}
                                    </h4>
                                    :
                                    ''
                                }

                            </div>
                        </Col>
                        <Col lg={6} className={`${styles[props.alignclass]}`}>
                            <div className={styles.shouldImg}>
                                <Image className='img-fluid'
                                    src={props.imagfold}
                                    alt='Amazon_Square'
                                />
                            </div>
                        </Col>
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

                                {props.subtext ?
                                    <p className='font-14 fw-300 font-prime text-black mb-3'>{props.subtext}</p>
                                    :
                                    ''
                                }

                                {props.subtitle1 ?
                                    <h3 className='font-18 fw-500 font-prime text-black mb-4'>{props.subtitle1}</h3>
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
                                    <p className='font-14 fw-300 font-prime text-black mb-2'>{props.text}</p>
                                    :
                                    ''
                                }

                                {props.text1 ?
                                    <p className={`font-12 fw-600 font-prime text-black mb-2 ${styles.bgText}`}>
                                        <span className={styles.span1}>"</span>
                                        {props.text1}
                                        <span className={styles.span2}>"</span>
                                    </p>
                                    :
                                    ''
                                }

                                {props.text2 ?
                                    <p className='font-14 fw-300 font-prime text-black mb-2'>{props.text2}</p>
                                    :
                                    ''
                                }

                                {props.text3 ?
                                    <p className='font-14 fw-300 font-prime text-black mb-2'>{props.text3}</p>
                                    :
                                    ''
                                }

                                {props.mintitle ?
                                    <h3 className='font-18 fw-600 font-prime text-black'>{props.mintitle}</h3>
                                    :
                                    ''
                                }

                                {props.mintext ?
                                    <p className='font-14 fw-300 font-prime text-black mb-3'>{props.mintext}</p>
                                    :
                                    ''
                                }

                                {props.mintitle1 ?
                                    <h3 className='font-18 fw-600 font-prime text-black'>{props.mintitle1}</h3>
                                    :
                                    ''
                                }

                                {props.mintext1 ?
                                    <p className='font-14 fw-300 font-prime text-black mb-3'>{props.mintext1}</p>
                                    :
                                    ''
                                }

                                {props.mintitle2 ?
                                    <h3 className='font-18 fw-600 font-prime text-black'>{props.mintitle2}</h3>
                                    :
                                    ''
                                }

                                {props.mintext2 ?
                                    <p className='font-14 fw-300 font-prime text-black mb-3'>{props.mintext2}</p>
                                    :
                                    ''
                                }

                                {props.mintextbef ?
                                    <p className='font-14 fw-400 font-prime text-black'>{props.mintextbef}</p>
                                    :
                                    ''
                                }

                                {props.text4 ?
                                    <p className={`font-12 fw-600 font-prime text-black mb-2 ${styles.bgText}`}>
                                        <span className={styles.span1}>"</span>
                                        {props.text4}
                                        <span className={styles.span2}>"</span>
                                    </p>
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
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Enhance