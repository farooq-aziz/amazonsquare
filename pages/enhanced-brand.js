import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Banner.module.css'
//image
import bannerImg from '../public/images/banners/enhance.png'
import chat from '../public/images/icons/chat.png'
import call from '../public/images/icons/call.png'
import elevate from '../public/images/folds/elevate.png'
import resonates from '../public/images/folds/resonates.png'
import promote from '../public/images/folds/promote.png'
import convinced from '../public/images/folds/convinced2.png'
//components
import Banner from '@/components/Banner'
import ContactFold from '@/components/ContactFold'
import Brand from '@/components/Brand'
import Runner from '@/components/Runner'
import Clients from '@/components/Clients'
import Traffic from '@/components/Traffic'
import Enhance from '@/components/Enhance'
import Convinced from '@/components/Convinced'
import Visitors from '@/components/Visitors'
import Questions from '@/components/Questions'
import Testimonial from '@/components/Testimonial'


export default function AmazonAuthor() {

    // ====== banner title ====== //
    const newTitle = <h1 className='font-60 fw-300 font-prime txt-white mb-4 mt-5'>The Best Amazon <span className='d-block txt-prime fw-600'>Content Marketing Agency</span></h1>


    // ====== banner buttons ====== //
    const cta1 =
        <div className='bttns mt-3'>
            <Link className={`${styles.btnL} btons btns btnPrime`} href="#">
                <Image className='img-fluid chat' src={chat} alt='Amazon_Square' />
                Live Chat
            </Link>
            <Link className={`${styles.btnW} btons btns btnWhite`} href="#">
                <Image className='img-fluid call' src={call} alt='Amazon_Square' />
                +1 (408) 689-7746
            </Link>
        </div>


    // ====== convinced title ====== //
    const convTitle =
        <h2 className='font-36 fw-700 font-prime txt-white mb-4'>
            Choose Us For Your <br /> Amazon Content <br /> Marketing Needs
        </h2>


    // ========================================== //

    const bannertext = [
        {
            title: newTitle,
            text: 'Are you looking for ways to improve the sales of your products on Amazon? Enhanced Brand Content/A+ Content is the best way to do so! Hire our Amazon content marketing agency today to make the most of this robust feature.',
            discuss: cta1,
            imageban: bannerImg,
            banner: 'enhanceBanner'
        }
    ]


    const runnerFold = [
        {
            title: 'We Create Content that Sells',
            text: 'At Amazon Square, we have handpicked a team of professional copywriters who create unique yet compelling content for products. We use attention-grabbing graphics to develop enhanced product listings that bring in more customers.',
            cardCount1: '01',
            cardHead1: 'Points that Make Money',
            cardText1: 'Our Amazon brand content writers create a professional Amazon Product Listing, complete with bullet points describing the product`s unique selling qualities and keyword optimization to boost product rankings in organic search results.',
            cardCount2: '02',
            cardHead2: 'Click-Compelling Titles',
            cardText2: 'Our skilled Amazon copywriters craft compelling headlines that stand out from the pack and persuade consumers to select goods above the competition. We design appealing headlines that lead to high conversions by using accurate keywords.',
            cardCount3: '03',
            cardHead3: 'Convey the Benefits',
            cardText3: 'Our talented writers can create appealing optimized product descriptions for humans and machines that emphasize the advantages. Our staff understands how to showcase the goods in a way that closes the purchase every time.',
            runner: 'runner'
        }
    ]


    const brandFold = [
        {
            subtitle: 'Elevate Your Selling to the Next Level with',
            title: 'Enhanced Brand Content',
            text1: 'Are you seeking ways to boost your items’ sales on Amazon? A+ Content, also known as Enhanced Brand Content, is the simplest way to do this. Get in touch with our Amazon content marketing company right away to start using this effective instrument. ',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: elevate,
            should: 'should'
        }
    ]


    const trafficFold = [
        {
            maintitle2: 'We Optimize for Both Humans and Machines!',
            subtitle: 'Ideal Content for Both Humans & Machines',
            title: 'Buyer-Centric Writing that Resonates With Your Brand`s Voice',
            subtext: 'Make the most of the brand registry and give the traditional FBA description a solid refurbishing to make your presence felt amongst the competitors with our Enhanced Brand Content services.',
            text1: 'The A+ Page represents the brand on Amazon. And we know you rely upon a professional company for creating the website of your business or graphics. Amazon Square is here to build EBC content as per your demands. We have experience creating 2000+ Amazon EBC designs from scratch, and we take pride in calling ourselves "Pros.',
            text2: 'We have a team of creative designers and excellent copywriters with the skills required to develop high-quality Amazon A+ design that converts visitors into customers and beat the competition. Hiring our Amazon content marketing services will offer you peace of mind knowing that you will receive the highest quality of service within the time frame agreed upon.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: resonates,
            should: 'should'
        }
    ]


    const enhanceFold = [
        {
            imagfold: promote,
            subtitle: 'Content Strategizing is a Great',
            title: 'Choice For Sellers to Promote',
            subtitle1: 'Products by Conveying The Compelling Benefits.',
            subtitle2: 'Jake Marcus',
            subtitle3: 'VP – Marketing Operations',
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
                    text={item.text}
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
                    text={item.text}
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


            {/* ========= Enhance ========= */}

            {enhanceFold.map((item, i) =>
                <Enhance key={i}
                    imagfold={item.imagfold}
                    subtitle={item.subtitle}
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
                    text2={item.text2}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    imagfold={item.imagfold}
                    should={item.should}
                />
            )}


            {/* ========= Convinced ========= */}

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


            {/* ========= Visitors ========= */}

            <Visitors />


            {/* ========= Questions ========= */}

            <Questions />


            {/* ========= Testimonial ========= */}

            <Testimonial />
        </>
    )
}
