import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Banner.module.css'
//image
import bannerImg from '../public/images/banners/publishing.png'
import chat from '../public/images/icons/chat.png'
import call from '../public/images/icons/call.png'
import publish1 from '../public/images/folds/publish1.png'
import publish2 from '../public/images/folds/publish2.png'
import publish3 from '../public/images/folds/publish3.png'
import publish4 from '../public/images/folds/publish4.png'
import convinced from '../public/images/folds/convinced1.png'
//components
import Banner from '@/components/Banner'
import ContactFold from '@/components/ContactFold'
import Runner from '@/components/Runner'
import Clients from '@/components/Clients'
import Traffic from '@/components/Traffic'
import Enhance from '@/components/Enhance'
import Convinced from '@/components/Convinced'
import Testimonial from '@/components/Testimonial'


export default function AmazonAuthor() {

    // ====== banner title ====== //
    const newTitle = <h1 className='font-60 fw-500 font-prime text-black mb-4 mt-5'>AMAZON BOOK <span className='d-block txt-white fw-300'>PUBLISHING SERVICE</span></h1>


    // ====== banner buttons ====== //
    const cta1 =
        <div className='bttns mt-3'>
            <Link className={`${styles.btnW} btons btns btnWhite`} href="#">
                <Image className={`${styles.chat} img-fluid`} src={chat} alt='Amazon_Square' />
                Live Chat
            </Link>
            <Link className={`${styles.btnB} btons btns btnBlack`} href="#">
                <Image className={`${styles.call} img-fluid`} src={call} alt='Amazon_Square' />
                +1 (408) 689-7746
            </Link>
        </div>


    // ====== convinced title ====== //
    const convTitle =
        <h2 className='font-36 fw-700 font-prime txt-white mb-4'>
           HIRE AMAZON BOOK <br /> PUBLISHING EXPERTS <br /> TO EARN FAME IN DAYS
        </h2>


    // ========================================== //

    const bannertext = [
        {
            title: newTitle,
            subtext: 'With our custom amazon book publishers and experts, your dream of becoming a famous author turns into reality. We are aware that you may always want to promote your book to a wider audience, and we help you to inch closer to your goal of becoming a publisher on Amazon.',
            discuss: cta1,
            imageban: bannerImg,
            banner: 'publishingBanner'
        }
    ]


    const bookPubFold = [
        {
            title: 'Amazon Book Publishing',
            subtext: 'We are here to make your dreams a reality! The process of publishing an eBook is challenging. Hire us to manage every step of your book publishing. Our group will finalize and publish your novel as a book on Amazon. Undoubtedly, it is difficult to publish an eBook. We can assist you with the work and support you in attaining the success you have always desired with the right direction and approach. In contrast to traditional publishing, which initially restricts your manuscript’s distribution to just one country, when you publish your book on Amazon with Amazon Profs, you may swiftly increase the distribution of your work throughout the world. Amazon publishing changed the game when access to the literary world was previously restricted to a small group of elites.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: publish1,
            should: 'should'
        }
    ]


    const quicklyFold = [
        {
            imagfold: publish2,
            subtitle: 'Get Recognized Quickly Through Our Exclusive',
            title: 'Amazon Book Publishing Services',
            text: 'Do you want to discover how to become a well-known author? You can`t seem to persuade a publisher to publish your books? Stop worrying about it now that Amazon Book Publishing services are at your fingertips, allowing you to become a well-known author quickly and effortlessly!',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            should: 'should'
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
            subtitle: 'Get Recognized Quickly Through',
            title: 'Our Exclusive Amazon Book Publishing Services',
            subtitle2: 'George Williams',
            subtitle3: 'Head of Marketing',
            imagfold: publish3,
            should: 'should'
        }
    ]


    const enhanceFold = [
        {
            imagfold: publish4,
            subtitle: 'We have Amazon as the Best',
            title: 'Online Book Publishing Platform',
            subtext: 'WSince its inception in 2007, the service has gradually grown in popularity, but the number of authors has recently surged dramatically, making it a tough and competitive platform. Because a lack of knowledge and expertise in dealing with competition can cause you to lose potential clients, using our services and allowing Amazon Market to assist you with your book publication will allow you to grow and learn.',
            text1: 'Sell On line’s highly motivated and experienced Amazon publishing experts will pave the route for your business to develop globally and instantaneously. Within minutes, your book will be the first pick of thousands! Prepare for a thrilling rollercoaster ride with Amazon book publishing!',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
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
                    subtext={item.subtext}
                    discuss={item.discuss}
                    imageban={item.imageban}
                    banner={item.banner}
                />
            )}


            {/* ========= ContactFold ========= */}

            <ContactFold />


            {/* ========= BookPubFold ========= */}

            {bookPubFold.map((item, i) =>
                <Traffic key={i}
                    maintitle={item.maintitle}
                    subtitle={item.subtitle}
                    title={item.title}
                    subtext={item.subtext}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    imagfold={item.imagfold}
                    should={item.should}
                />
            )}


            {/* ========= QuicklyFold ========= */}

            {quicklyFold.map((item, i) =>
                <Enhance key={i}
                    imagfold={item.imagfold}
                    subtitle={item.subtitle}
                    title={item.title}
                    subtext={item.subtext}
                    text={item.text}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    should={item.should}
                />
            )}


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
                    subtitle={item.subtitle}
                    title={item.title}
                    subtitle2={item.subtitle2}
                    subtitle3={item.subtitle3}
                    imagfold={item.imagfold}
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
