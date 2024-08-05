import React from 'react'
import styles from '@/styles/ContactFold.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const ContactFold = () => {
    return (
        <>
            <section className={`${styles.contect} secTion`}>
                <Container>
                    <Row>
                        <Col lg={5} className='mx-auto'>
                            <div className='text-center'>
                                <h2 className='font-36 fw-600 font-prime txt-white mb-4'>
                                    Contact Form
                                </h2>
                                <p className='font-16 fw-300 font-prime txt-white mb-5'>
                                    Contact our Amazon experts today and get your products listed on the first page of Amazon.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <form className='mx-auto p-lg-4'>
                        <div className={styles.contactForm}>
                            <Row>
                                <Col lg={4} className='mx-auto'>
                                    <div className="mb-5">
                                        <input type="text" className="form-control" id="name"
                                            placeholder="Full Name" required />
                                    </div>
                                </Col>
                                <Col lg={4} className='mx-auto'>
                                    <div className="mb-5">
                                        <input type="email" className="form-control" id="email" placeholder="example@emaill.com" required />
                                    </div>
                                </Col>
                                <Col lg={4} className='mx-auto'>
                                    <div className="mb-5">
                                        <input type="tel" className="form-control" id="phone"
                                            placeholder="Phone Number" required />
                                    </div>
                                </Col>
                                <Col lg={12} className='mx-auto'>
                                    <div className="mb-5">
                                        <textarea className="form-control" id="message"
                                            placeholder="Message" rows="5" required></textarea>
                                    </div>
                                </Col>
                                <Col lg={4} className='mx-auto'>
                                    <button className={`${styles.cntBtn} btns btnPrime mx-auto`} type="submit">
                                        Get a Free Consultation
                                    </button>
                                </Col>
                            </Row>
                        </div>
                    </form>
                </Container>
            </section>
        </>
    )
}

export default ContactFold