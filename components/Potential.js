import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Potential.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images

const Potential = () => {
    return (
        <>
            <section className={`${styles.potential} secTion bg-cta`}>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={8}>
                            <div className={styles.potentialHead}>
                                <h2 className='font-40 fw-500 font-second txt-second mb-0 ms-lg-5 ms-0'>Gain more Control over your Amazon growth Potential</h2>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={styles.potentialCta}>
                                <Link className='btns homeBtn btnSecond mx-auto mt-4 mt-lg-0' href="#">Get A Quote</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Potential