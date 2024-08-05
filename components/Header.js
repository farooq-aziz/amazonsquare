import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image'
import styles from '@/styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRegWindowClose, FaLocationArrow, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
//images
import logo from '../public/images/logo.png'
import logo2 from '../public/images/logo-dark.png'
import avtar1 from '../public/images/testimonial/avatar-1.png'
import avtar2 from '../public/images/testimonial/avatar-2.png'
import avtar3 from '../public/images/testimonial/avatar-3.png'
import call from '../public/images/icons/call.png'


const Header = () => {

    const [isActive, setIsActive] = useState(false);

    const handleMenu = () => {
        setIsActive((prev) => !prev);
    }

    const router = useRouter();
    const currentRoute = router.pathname;
    const path = currentRoute === "/amazon-marketing" ||
        currentRoute === "/amazon-author" ||
        currentRoute === "/enhanced-brand-I" ||
        currentRoute === "/smm" ||
        currentRoute === "/product-listing" ||
        currentRoute === "/product-listing-I" ||
        currentRoute === "/deep-keyword";

    const aa = currentRoute === "/amazon-book-publish";

    return (
        <>
            <header className={path ? `${styles.header} menuBlack` : aa ? `${styles.header} extra` : `${styles.header}`}>
                <Container>
                    <Navbar expand="lg" className={styles.navBar}>

                        {path ? <Link href="/">
                            <Image className={`${styles.logo} img-fluid`}
                                src={logo2}
                                alt='Amazon_Square' />
                        </Link> : <Link href="/">
                            <Image className={`${styles.logo} img-fluid`}
                                src={logo}
                                alt='Amazon_Square' />
                        </Link>}

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav" className={styles.navMenu}>

                            <ul className={styles.menu}>
                                <li className={styles.navLinks}>
                                    <Link className={currentRoute === "/"
                                        ? "active" : "menuLinks"} href="/">Home</Link>
                                </li>

                                <li className={styles.navLinks}>
                                    <Link className='menuLinks' href="#" onClick={handleMenu}>
                                        Services
                                    </Link>
                                </li>

                                <div className={isActive ? `${styles.megaList} ${styles.openMega}` : `${styles.megaList}`}>

                                    <div className={styles.megaLogo}>
                                        <Image className='img-fluid'
                                            src={logo}
                                            alt='Amazon_Square'
                                        />
                                        <FaRegWindowClose className={styles.closeMenu} onClick={handleMenu} />
                                    </div>

                                    <Row>
                                        <Col lg={5} className={`${styles.linkCol} px-3 px-md-5`}>

                                            <ul className={styles.menuList}>
                                                <li>
                                                    <Link className={`${currentRoute === "/amazon-services"
                                                        ? "active" : "menuLinks"} ${styles.megaLinks}`} href="/amazon-services" onClick={handleMenu}>
                                                        Amazon Services
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link className={`${currentRoute === "/amazon-marketing"
                                                        ? "active" : "menuLinks"} ${styles.megaLinks}`} href="/amazon-marketing" onClick={handleMenu}>
                                                        Amazon Marketing
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link className={`${currentRoute === "/amazon-author"
                                                        ? "active" : "menuLinks"} ${styles.megaLinks}`} href="/amazon-author" onClick={handleMenu}>
                                                        Amazon Author
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link className={`${currentRoute === "/amazon-book-publish"
                                                        ? "active" : "menuLinks"} ${styles.megaLinks}`} href="/amazon-book-publish" onClick={handleMenu}>
                                                        Amazon Book Publishing
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link className={`${currentRoute === "/enhanced-brand"
                                                        ? "active" : "menuLinks"} ${styles.megaLinks}`} href="/enhanced-brand" onClick={handleMenu}>
                                                        Enhanced Brand Content
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link className={`${currentRoute === "/enhanced-brand-I"
                                                        ? "active" : "menuLinks"} ${styles.megaLinks}`} href="/enhanced-brand-I" onClick={handleMenu}>
                                                        Enhanced Brand Content-I
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link className={`${currentRoute === "/smm"
                                                        ? "active" : "menuLinks"} ${styles.megaLinks}`} href="/smm" onClick={handleMenu}>
                                                        Social Media Marketing
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link className={`${currentRoute === "/product-listing"
                                                        ? "active" : "menuLinks"} ${styles.megaLinks}`} href="/product-listing" onClick={handleMenu}>
                                                        Product listing optimazation
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link className={`${currentRoute === "/product-listing-I"
                                                        ? "active" : "menuLinks"} ${styles.megaLinks}`} href="/product-listing-I" onClick={handleMenu}>
                                                        Product listing optimazation-I
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link className={`${currentRoute === "/deep-keyword"
                                                        ? "active" : "menuLinks"} ${styles.megaLinks}`} href="/deep-keyword" onClick={handleMenu}>
                                                        Deep Keyword Research
                                                    </Link>
                                                </li>
                                            </ul>

                                        </Col>
                                        <Col lg={7} className={`${styles.expCol} bg-prime px-5`}>
                                            <div className={styles.expList}>
                                                <div className={styles.megaTitle}>
                                                    <h5 className='font-30 font-prime text-white mt-4 pt-3'>Our Experts</h5>
                                                </div>

                                                <ul className={styles.border}>
                                                    <li className={styles.navlinks}>

                                                        <div className={`${styles.megaImg} mt-3`}>
                                                            <Image className='img-fluid'
                                                                src={avtar1}
                                                                alt='Amazon_Square'
                                                            />
                                                            <Image className='img-fluid'
                                                                src={avtar2}
                                                                alt='Amazon_Square'
                                                            />
                                                            <Image className='img-fluid'
                                                                src={avtar3}
                                                                alt='Amazon_Square'
                                                            />
                                                        </div>

                                                        <div className={`${styles.megaImgTxt} mt-4`}>
                                                            <p className='font-16 font-prime text-white fw-400 mb-2'>
                                                                Book a call with one of our experts
                                                            </p>
                                                            <p className='font-16 font-prime text-white fw-400 mb-3'>
                                                                Book a call with one of our experts get a customized solution by best publishing services Book Writing Experts Is waiting for you to Ask for a Professional Ghostwriter.
                                                            </p>
                                                            <form className='mt-3'>
                                                                <Row>
                                                                    <Col lg={6}>
                                                                        <div className="mb-3">
                                                                            <input type="email" className="form-control" id="email" placeholder="example@emaill.com" required />
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={6}>
                                                                        <div className="mb-3">
                                                                            <input type="tel" className="form-control" id="phone"
                                                                                placeholder="Phone Number" required />
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={6}>
                                                                        <div>
                                                                            <button className='btns homeBtn btnSecond mt-2' type="submit">
                                                                                Book A Free Call
                                                                            </button>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </form>
                                                            {/* <Link href="/" className='text-white'>Book A Free Call
                                                            <FaLocationArrow />
                                                        </Link> */}
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>

                                        <Col lg={12}>
                                            <div className={styles.social}>
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
                                        </Col>
                                    </Row>
                                </div>

                                <li className={styles.navLinks}>
                                    <Link className={currentRoute === "/kindle Vella"
                                        ? "active" : "menuLinks"} href="/kindle Vella">Kindle Vella</Link>
                                </li>

                                <li className={styles.navLinks}>
                                    <Link className={currentRoute === "/about"
                                        ? "active" : "menuLinks"} href="/about">About Us</Link>
                                </li>

                                <li className={styles.navLinks}>
                                    <Link className={currentRoute === "/contact"
                                        ? "active" : "menuLinks"} href="/contact">Contact</Link>
                                </li>

                                <li className={`${styles.headerTel}`}>
                                    <Link className={`${styles.btnT} btns btons btnTrans btnBlThm`} href="tel:+1 234 456 7890">
                                        <Image className='img-fluid call' src={call} alt='Amazon_Square' />
                                        +1 234 456 7890
                                    </Link>
                                </li>

                                <li className={`${styles.headerTel}`}>
                                    <Link className={`${styles.btnW} btns btnWhite btnBlThem`} href="#">
                                        Get A Proposal
                                    </Link>
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
        </>
    )
}

export default Header