import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Proposal.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import foldImg from '../public/images/folds/proposal.png'

const Proposal = () => {
    return (
        <>
            <section className={`${styles.proposal} bg-fold secTion`}>
                <Container>
                    <Row className={styles.propslRow}>
                        <Col lg={6}>
                            <div className={styles.proposalTxt}>
                                <h2 className='font-36 fw-500 font-second txt-second mb-3 mb-lg-4'>
                                    Request a Proposal
                                </h2>
                                <p className='font-16 fw-300 font-second txt-second'>
                                    Amazon’s SEO cares about shoppers and selling stuff to those buyers. That’s it. This is why at Amazon Pro Hub, we concentrate on engineering Wholesome Marketing strategies that enhance CTR for your products – thus enhancing your visibility. Fill in the form and find out how we can improve your online brand’s visibility!
                                </p>
                                <Image className='img-fluid'
                                    src={foldImg}
                                    alt='Amazon_Square'
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.proposalForm}>
                                <form className='mx-auto p-lg-4'>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="name"
                                            placeholder="Full Name" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" id="email" placeholder="example@emaill.com" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="tel" className="form-control" id="phone"
                                            placeholder="Phone Number" required />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" id="message"
                                            placeholder="Message" rows="5" required></textarea>
                                    </div>
                                    <div>
                                        <button className='btns homeBtn btnSecond mt-3' type="submit">
                                            Submit
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

export default Proposal