import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Visitors.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import foldImg from '../public/images/folds/improve.png'
import call from '../public/images/icons/call.png'

const Visitors = () => {
    return (
        <>
            <section className={`${styles.visitors} secTion`}>
                <Container>
                    <Row className={styles.visitorsRow}>
                        <Col lg={6} className={styles.vsitrImg}>
                            <div className={styles.visitorsImg}>
                                <Image className='img-fluid'
                                    src={foldImg}
                                    alt='Amazon_Square'
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.visitorsTxt}>
                                <h3 className='font-16 fw-400 font-prime text-black'>
                                    Content that Converts Visitors into Customers
                                </h3>
                                
                                <h2 className='font-36 fw-500 font-prime txt-prime mb-3 mb-lg-4'>
                                    Improve Your Sales With Our Amazon Brand Content Service
                                </h2>

                                <p className='font-16 fw-300 font-prime text-black mb-3'>
                                    People visit Amazon to look for products when they are closest to the point of making a purchase. Our Amazon product listing writers use this customer's behavior as an advantage and combine the readiness of the buyer to make a purchase with the best content marketing strategies that enhance the conversion rate. Therefore, hiring our Amazon copywriters can prove advantageous for your business in the long run.
                                </p>
                               
                                <p className={`font-12 fw-600 font-prime text-black my-3 ${styles.bgText}`}>
                                    <span className={styles.span1}>"</span>
                                    Benefitting from Amazon A+ content offers the seller much control over the product listing's design, allowing them to create listings that include detailed descriptions and larger product images. The major difference between a normal product listing and an enhanced design is aesthetics. Amazon A+ content listings are flashier and more attention-grabbing than regular product listings. This enhanced aesthetic quality of the listing leads to increased sales.
                                    <span className={styles.span2}>"</span>
                                </p>

                                <div className='bttns mt-5'>
                                    <Link className='btns btnPrime' href="#">
                                        Get a Quote
                                    </Link>
                                    <Link className='btns btons btnSecond' href="tel:+1 (408) 689-7746">
                                        <Image className='img-fluid call' src={call} alt='Amazon_Square' />
                                        +1 (408) 689-7746
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Visitors