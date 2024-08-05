import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Banner.module.css'
//image
import bannerImg from '../public/images/banners/author.png'
import chat from '../public/images/icons/chat.png'
import call from '../public/images/icons/call.png'
import augment from '../public/images/folds/augment.png'
import game from '../public/images/folds/game.png'
import convinced from '../public/images/folds/convinced1.png'
//components
import Banner from '@/components/Banner'
import ContactFold from '@/components/ContactFold'
import Access from '@/components/Access'
import Runner from '@/components/Runner'
import Clients from '@/components/Clients'
import Traffic from '@/components/Traffic'
import Enhance from '@/components/Enhance'
import Convinced from '@/components/Convinced'
import Testimonial from '@/components/Testimonial'


export default function AmazonAuthor() {

    // ====== banner title ====== //
    const newTitle = <h1 className='font-60 fw-300 font-prime text-black mb-4 mt-5'>Be Known to <br /> Masses Around the Globe With<span className='d-block txt-prime fw-600'>Amazon Author <br /> Page Creation</span></h1>


    // ====== banner buttons ====== //
    const cta1 =
        <div className='bttns mt-3'>
            <Link className={`${styles.btnP} btons btns btnPrime`} href="#">
                <Image className={`${styles.chat} img-fluid`} src={chat} alt='Amazon_Square' />
                Live Chat
            </Link>
            <Link className={`${styles.btnS} btons btns btnSecond`} href="#">
                <Image className={`${styles.call} img-fluid`} src={call} alt='Amazon_Square' />
                +1 (408) 689-7746
            </Link>
        </div>


    // ====== convinced title ====== //
    const convTitle =
        <h2 className='font-36 fw-700 font-second txt-white mb-4'>
            HIRE AMAZON BOOK <br /> PUBLISHING EXPERTS <br /> TO EARN FAME IN DAYS
        </h2>


    // ========================================== //

    const bannertext = [
        {
            title: newTitle,
            subtext1: 'With our custom amazon book publishers and experts, your dream of becoming a famous author turns into reality. We are aware that you may always want to promote your book to a wider audience, and we help you to inch closer to your goal of becoming a publisher on Amazon.',
            discuss: cta1,
            imageban: bannerImg,
            banner: 'authorBanner'
        }
    ]


    const runnerFold = [
        {
            title: 'What Makes Us a Better Choice for Amazon Author Page Optimization?',
            cardCount1: '01',
            cardHead1: 'Continuous Profile Updates',
            cardText1: 'We at Amazon Square specialize in developing compelling Amazon Author Pages.Being professionals, we produce custom pages for writers while ensuring that your page includes and highlights all of your published works available online. We also produce a captivating author bio to draw customers to your private online bookshop.',
            cardCount2: '02',
            cardHead2: 'Biography and About Us',
            cardText2: 'After you have published a few books, the community of readers will want to learn more about your portfolio. Therefore, we assist you in creating a biography and an About Us page to inform everyone about your published works and accomplishments. Our competent content developers manage your author`s profile page. We ensure your author profile includes all the vital information about you.',
            cardCount3: '03',
            cardHead3: 'Expert Author Page',
            cardText3: 'Our Amazon-exclusive profile writing services help us stand out amongst our competitors. We employ buzz phrases to engage the readers while enticing them to return for more information. We ensure that the author`s profile has all the pertinent information, including attention-grabbing details.',
            runner: 'runner'
        }
    ]


    const trafficFold = [
        {
            title: 'Our Amazon Author Page Development Services',
            subtext: 'Augment Your Exposure to Online Search Results.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: augment,
            alignclass: 'traficSholud',
            should: 'should'
        }
    ]


    const enhanceFold = [
        {
            imagfold: game,
            title: 'Want to Up your Game as an Author?',
            subtext: 'Your Amazon Author page is your profile page, where visitors can learn more about you, check out the books you`ve authored and published, and browse the library. As an Amazon writer, you should know how things work online, and the stiff competition that persists online as more writers join this incredible platform. Amazon Square is a top-notch Amazon author page creation company leading by example. We have set the bar high with our commitment and dedication to serving our clients like you. The experts in our team manage Amazon author page designing, keeping in view the short-term and long-term goals.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            alignclass: 'traficSholud',
            should: 'should'
        }
    ]


    const convincedFold = [
        {
            title: convTitle,
            text: 'We will help the writers to overcome the hassle with our result-oriented approach. Over the years, we have assisted writers helping them to get approved on Amazon and publish their books the right way.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: convinced,
            convinced: 'convinced'
        }
    ]


    return (
        <>
            <Head>
                <title>Amazon Square</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/favicon.png" />
            </Head>

            {/* ========= Banner ========= */}

            {bannertext.map((item, i) =>
                <Banner key={i}
                    title={item.title}
                    subtext1={item.subtext1}
                    discuss={item.discuss}
                    imageban={item.imageban}
                    banner={item.banner}
                />
            )}


            {/* ========= ContactFold ========= */}

            <ContactFold />


            {/* ========= AccessFold ========= */}

            <Access />


            {/* ========= Runner ========= */}

            {runnerFold.map((item, i) =>
                <Runner key={i}
                    title={item.title}
                    cardCount1={item.cardCount1}
                    cardHead1={item.cardHead1}
                    cardText1={item.cardText1}
                    cardCount2={item.cardCount2}
                    cardHead2={item.cardHead2}
                    cardText2={item.cardText2}
                    cardCount3={item.cardCount3}
                    cardHead3={item.cardHead3}
                    cardText3={item.cardText3}
                    runner={item.runner}
                />
            )}


            {/* ========= Traffic ========= */}

            {trafficFold.map((item, i) =>
                <Traffic key={i}
                    title={item.title}
                    subtext={item.subtext}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    imagfold={item.imagfold}
                    alignclass={item.alignclass}
                    should={item.should}
                />
            )}


            {/* ========= Clients ========= */}

            <Clients />


            {/* ========= Enhance ========= */}

            {enhanceFold.map((item, i) =>
                <Enhance key={i}
                    imagfold={item.imagfold}
                    subtitle={item.subtitle}
                    title={item.title}
                    subtext={item.subtext}
                    text1={item.text1}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    alignclass={item.alignclass}
                    should={item.should}
                />
            )}


            {/* ========= Excellent ========= */}

            {convincedFold.map((item, i) =>
                <Convinced key={i}
                    title={item.title}
                    text={item.text}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    imagfold={item.imagfold}
                    convinced={item.convinced}
                />
            )}


            {/* ========= Testimonial ========= */}

            <Testimonial />
        </>
    )
}
