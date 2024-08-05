import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Banner.module.css'
//image
import bannerImg from '../public/images/banners/attain.png'
import chat from '../public/images/icons/chat.png'
import call from '../public/images/icons/call.png'
import revenues from '../public/images/folds/revenues.png'
import extreme from '../public/images/folds/extreme.png'
import ppc from '../public/images/folds/ppc.png'
import adwords from '../public/images/folds/adwords.png'
import convinced from '../public/images/folds/convinced.png'
//components
import Banner from '@/components/Banner'
import ContactFold from '@/components/ContactFold'
import Brand from '@/components/Brand'
import Runner from '@/components/Runner'
import Clients from '@/components/Clients'
import Traffic from '@/components/Traffic'
import Enhance from '@/components/Enhance'
import Convinced from '@/components/Convinced'
import Testimonial from '@/components/Testimonial'


export default function AmazonAuthor() {

    // ====== banner title ====== //
    const newTitle = <h1 className='font-60 fw-300 font-prime text-black mb-4 mt-5'>Attain Positive <br /> Return of Ad Spend <br /> with <span className='txt-prime fw-600'>Our Amazon <br /> PPC Services</span></h1>


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
        <h2 className='font-36 fw-700 font-prime txt-white mb-4'>
            Why Our Amazon <br /> Services Are Excellent?
        </h2>


    // ========================================== //

    const bannertext = [
        {
            title: newTitle,
            subtext1: 'The marketing landscape of Amazon is constantly evolving, and this is why it is essential to keep your Amazon marketing strategy updated. We have Amazon PPC specialists in our team who ensure seamless execution of Amazon brand guidelines, thereby guaranteeing a brand`s growth.',
            discuss: cta1,
            imageban: bannerImg,
            banner: 'enhanceBannerI'
        }
    ]


    const brandFold = [
        {
            subtitle: 'Our Amazon PPC Agency Establishes Clear Marketing Strategies',
            title: 'Amazon PPC Ad Campaign',
            text1: 'You should be aware that Amazon advertising is a challenging procedure before you invest your hard-earned money. Particularly when promoting Amazon-sponsored items, a clear strategy must be used. Many people have resorted to Amazon Profs for its well-known Amazon PPC marketing solutions after trying to connect and advertise things through Amazon. By putting them into practice, we guarantee that the finished campaign will be focused on the consumer, efficient, and built for high financial output.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: revenues,
            alignclass: 'brandSholud',
            should: 'should'
        }
    ]


    const runnerFold = [
        {
            title: 'Increase Brand & Product Awareness with Our Amazon PPC Ad Solutions',
            cardCount1: '01',
            cardHead1: 'Increase Profits Using Result-Oriented Tactics',
            cardText1: 'Increase the possibility of your product`s visibility on the first page of search via our proven PPC ad expertise. Discover the best for your business in just a few days.',
            cardCount2: '02',
            cardHead2: 'Improve Your PPC Campaigns Outcomes',
            cardText2: 'Interact with our professionals and give us a chance to optimize your ad`s performance. Our team believes in minimum spending while generating maximum sales.',
            cardCount3: '03',
            cardHead3: 'Quality Traffic and More Conversions',
            cardText3: 'Our Amazon PPC services enhance the visibility of your product, thus helping you get more traffic and generate more potential leads that eventually convert into sales.',
            runner: 'runner'
        }
    ]

    const extremeFold = [
        {
            imagfold: extreme,
            title: 'Our PPC Ad Campaigns Give Clients Extreme Levels ',
            subtitle1: 'of control that bring out positive consequences. We work on demographics that reduce ad spending and boost businesses.',
            subtitle2: 'Melanie Joshua',
            subtitle3: 'Lead Amazon Consultant',
            should: 'should'
        }
    ]

    const trafficFold = [
        {
            maintitle2: 'Hire Amazon Pay Per Click Professionals to Execute Commercial Goals',
            subtitle: 'Boost Sales, Revenues & Profits With Us',
            title: 'Amazon PPC Experts',
            subtext: 'Are you lagging behind the f leading Amazon suppliers? Do you have unique merchandise to stand out among competitors, but you cannot reach out to the right customers? Do you want to be a dominant online wholesaler? All your desires can come true with our Amazon PPC adverts.',
            text1: 'What is Pay-Per-Click (PPC)? It is an online advertising model in which marketers bid on keywords. When an Amazon client conducts a product search, the sellers who submit the most incredible bids on relevant keywords win the auction. Their product ads appear in their selected location. We give you a full-time Amazon account manager to manage your PPC campaigns, ensuring that you achieve and even surpass your sales goals.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: ppc,
            alignclass: 'traficSholud',
            should: 'should'
        }
    ]


    const enhanceFold = [
        {
            imagfold: adwords,
            subtitle: 'Improve Your Search Engine Position',
            title: 'Hire Amazon AdWords Firm Online and Augment your Amazon Ranks',
            text: 'Our Amazon PPC experts create brand awareness and generate sales with the targeted ads. We select from a list of relevant terms with significant search traffic. We aim to develop a profitable and long-term partnership with you to take advantage of Amazon advertising campaigns tailored specifically for your Amazon business by increasing product searchability and the reach of your products.',
            text1: 'Contact our Amazon marketing professionals to build a solid online presence and achieve your goals.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            alignclass: 'traficSholud',
            should: 'should'
        }
    ]


    const convincedFold = [
        {
            title: convTitle,
            text: 'Our clients love working with us because of our professionalism, guaranteed results, and affordable Amazon marketing services. If you are still not convinced, consider the following statistics:',
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


            {/* ========= BrandFold ========= */}

            {brandFold.map((item, i) =>
                <Brand key={i}
                    subtitle={item.subtitle}
                    title={item.title}
                    text1={item.text1}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    imagfold={item.imagfold}
                    alignclass={item.alignclass}
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


            {/* ========= Extreme ========= */}

            {extremeFold.map((item, i) =>
                <Enhance key={i}
                    imagfold={item.imagfold}
                    title={item.title}
                    subtitle1={item.subtitle1}
                    subtitle2={item.subtitle2}
                    subtitle3={item.subtitle3}
                    should={item.should}
                />
            )}


            {/* ========= Clients ========= */}

            <Clients />


            {/* ========= Traffic ========= */}

            {trafficFold.map((item, i) =>
                <Traffic key={i}
                    maintitle2={item.maintitle2}
                    subtitle={item.subtitle}
                    title={item.title}
                    subtext={item.subtext}
                    text1={item.text1}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    imagfold={item.imagfold}
                    alignclass={item.alignclass}
                    should={item.should}
                />
            )}


            {/* ========= Enhance ========= */}

            {enhanceFold.map((item, i) =>
                <Enhance key={i}
                    imagfold={item.imagfold}
                    subtitle={item.subtitle}
                    title={item.title}
                    text={item.text}
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
