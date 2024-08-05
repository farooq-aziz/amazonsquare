import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Footer.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// images
import logo from '../public/images/logo.png'


const Footer = () => {
    return (
        <>
            <footer className={`${styles.footer} bg-second secTion`}>
                <Container fluid className='px-md-5'>
                    <Row className={`${styles.footerRow} justify-content-between`}>
                        <Col lg={4}>
                            <div className={styles.footerLogo}>
                                <Image className='img-fluid'
                                    src={logo}
                                    alt='Amazon_Square'
                                />
                                <p className='font-14 fw-500 font-prime txt-white mt-4'>AMZ Profs is a renowned Amazon Consultation company in the USA known for providing robust Amazon eCommerce solutions to skyrocket the revenues for brands.</p>
                                <div className={`${styles.socialLinks} mt-3`}>
                                    <Link href="#">
                                        <FaFacebookF />
                                    </Link>
                                    <Link href="#">
                                        <FaInstagram />
                                    </Link>
                                    <Link href="#">
                                        <FaLinkedinIn />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className={styles.footerLinks}>
                                <h3 className='font-16 fw-500 font-second txt-prime'>Services</h3>
                                <ul className='p-0 m-0 mt-3 mt-lg-4'>
                                    <li>
                                        <Link href="/ecommerce-store"
                                            className='font-14 fw-400 font-second txt-white'>
                                            Ecommerce Store Setup
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/ecommerce-marketing"
                                            className='font-14 fw-400 font-second txt-white'>
                                            Ecommerce Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/amazon-services"
                                            className='font-14 fw-400 font-second txt-white'>
                                            Amazon Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className='font-14 fw-400 font-second txt-white'>
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className={styles.footerLinks}>
                                <h3 className='font-16 fw-500 font-second txt-prime'>Platform</h3>
                                <ul className='p-0 m-0 mt-3 mt-lg-4'>
                                    <li>
                                        <Link href="/contact-us"
                                            className='font-14 fw-400 font-second txt-white'>
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions"
                                            className='font-14 fw-400 font-second txt-white'>
                                            Terms Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy"
                                            className='font-14 fw-400 font-second txt-white'>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.footerLinks}>
                                <h3 className='font-16 fw-500 font-second txt-prime'>Contact</h3>
                                <ul className='p-0 m-0 mt-3 mt-lg-4'>
                                    <li>
                                        <Link href="tel:+1 (408) 689-7746"
                                            className='font-14 fw-400 font-second txt-white'>
                                            +1 (408) 689-7746
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="mailto:sales@amzprofs.com"
                                            className='font-14 fw-400 font-second txt-white'>
                                            sales@amzprofs.com
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='font-14 fw-400 font-second txt-white'>
                                            123 E San Carlos St San Jose, CA 95112
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='font-14 fw-400 font-second txt-white'>
                                            Live Chat
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='font-14 fw-400 font-second txt-white'>
                                            Get a Quote
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer