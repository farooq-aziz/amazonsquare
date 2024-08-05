import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/FormFold.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import call from '../public/images/icons/call.png'


const FormFold = (props) => {
    return (
        <>
            <section className={`${styles[props.formFold]} secTion`}>
                <Container>
                    <Row className={styles.formFoldRow}>
                        <Col lg={6}>
                            <div className={styles.formFoldTxt}>

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

                                {props.text ?
                                    <p className='font-14 fw-300 font-prime text-black mb-3'>{props.text}</p>
                                    :
                                    ''
                                }

                                {props.subtext ?
                                    <p className='font-14 fw-300 font-prime text-black mb-3'>{props.subtext}</p>
                                    :
                                    ''
                                }

                                {props.foldDiscuss ?
                                    <div className='bttns mt-4'>
                                        <Link className={`${styles.btnP} btns btnPrime`} href="#">
                                            {props.foldDiscuss}
                                        </Link>
                                        <Link className={`${styles.btnW} btons btns btnSecond`} href="tel:+1 (408) 689-7746">
                                        <Image className='img-fluid call' src={call} alt='Amazon_Square' />
                                            {props.foldnumber}
                                        </Link>
                                    </div>
                                    :
                                    ''
                                }

                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.formFoldForm}>
                                <form className='ms-auto'>
                                    <div className='mb-5 text-center'>
                                        <h3 className='font-30 fw-600 font-prime text-black'>
                                            CONTACT <span className='txt-prime'>FORM</span>
                                        </h3>
                                        <p className='font-12 fw-300 font-prime text-black'>
                                            Contact our Amazon experts today and get your products
                                            listed on the first page of Amazon.
                                        </p>
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" id="name"
                                            placeholder="Full Name" required />
                                    </div>
                                    <div>
                                        <input type="email" className="form-control" id="email" placeholder="Email Address" required />
                                    </div>
                                    <div>
                                        <input type="tel" className="form-control" id="phone"
                                            placeholder="Phone Number" required />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" id="message"
                                            placeholder="Enter Message" required />
                                    </div>
                                    <div>
                                        <button className='btns btnSecond mt-3' type="submit">
                                            Get A Free Consulation
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FormFold