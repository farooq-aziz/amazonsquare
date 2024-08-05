import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Testimonial.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import quot from '../public/images/testimonial/testmnl-quots.png'
import star from '../public/images/testimonial/testmnl-star.png'
import client from '../public/images/testimonial/testmnl-img.png'


const Testimonial = () => {

    const testimonialdata =
        [
            {
                quots: quot,
                text: 'They handled my Amazon store excellently and their team is highly responsive. They not only kept us updated about the progress, but also entertained all the buyer`s queries really well. I recommend their Amazon marketing services.',
                stars: star,
                title: 'Angie Roberts',
                clients: client
            },
            {
                quots: quot,
                text: 'They handled my Amazon store excellently and their team is highly responsive. They not only kept us updated about the progress, but also entertained all the buyer`s queries really well. I recommend their Amazon marketing services.',
                stars: star,
                title: 'Angie Roberts',
                clients: client
            },
            {
                quots: quot,
                text: 'They handled my Amazon store excellently and their team is highly responsive. They not only kept us updated about the progress, but also entertained all the buyer`s queries really well. I recommend their Amazon marketing services.',
                stars: star,
                title: 'Angie Roberts',
                clients: client
            },
        ];


    let testimonial = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
    };

    return (
        <>
            <section className={`${styles.testimonial} bg-fold secTion`}>
                <Container>
                    <Row>
                        <Col lg={10} className='mx-auto'>
                            <div className={`${styles.testimonialHead} pb-0 pb-md-5`}>
                                <h2 className='font-36 fw-500 font-prime text-black mb-2'>
                                    Hear What Our Customers Have To Say About Us
                                </h2>
                                <p className='font-16 fw-300 font-prime text-black mb-5'>
                                    Out of many, here are some of our customer reviews:
                                </p>
                            </div>
                        </Col>
                        <Col lg={10} className='mx-auto'>
                            <Slider {...testimonial} className='testimonial mb-5'>
                                {testimonialdata.map((item, i) => {
                                    return (
                                        <div key={i} className={`${styles.testiSlide} mb-5 mb-lg-0`}>
                                            <Image className='img-fluid'
                                                src={item.quots}
                                                alt='Amazon_Square'
                                            />
                                            <p className='font-16 fw-300 font-prime text-black my-3'>
                                                {item.text}
                                            </p>
                                            <Image className='img-fluid'
                                                src={item.stars}
                                                alt='Amazon_Square'
                                            />
                                            <h3 className='font-20 fw-400 font-prime text-black my-3'>
                                                {item.title}
                                            </h3>
                                            <Image className='img-fluid'
                                                src={item.clients}
                                                alt='Amazon_Square'
                                            />
                                        </div>
                                    )
                                })}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Testimonial