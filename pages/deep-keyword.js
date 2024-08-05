import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Banner.module.css'
//image
import bannerImg from '../public/images/banners/keyword.png'
import chat from '../public/images/icons/chat.png'
import call from '../public/images/icons/call.png'
import cater from '../public/images/folds/cater.png'
import crucial from '../public/images/folds/crucial.png'
import relevant from '../public/images/folds/relevant.png'
import convinced from '../public/images/folds/convinced.png'
//components
import Banner from '@/components/Banner'
import Rate from '@/components/Rate'
import Solutions from '@/components/Solutions'
import Clients from '@/components/Clients'
import Traffic from '@/components/Traffic'
import Enhance from '@/components/Enhance'
import Convinced from '@/components/Convinced'
import FormFold from '@/components/FormFold'
import Testimonial from '@/components/Testimonial'


export default function AmazonMarketing() {

    // ====== banner title ====== //
    const newTitle = <h1 className='font-36 fw-600 font-prime text-black mb-4 mt-5'>Amazon Keyword Research
        <br /> Services - Optimize with High- <br /> Performing Keywords</h1>


    // ====== banner buttons ====== //
    const cta1 =
        <div className='bttns mt-3'>
            <Link className={`${styles.btnL} btons btns btnPrime`} href="#">
                <Image className='img-fluid chat' src={chat} alt='Amazon_Square' />
                Live Chat
            </Link>
            <Link className={`${styles.btnW} btons btns btnSecond`} href="#">
                <Image className='img-fluid call' src={call} alt='Amazon_Square' />
                +1 (408) 689-7746
            </Link>
        </div>


    // ====== Solutions title ====== //
    const solTitle = <h2 className='font-40 fw-600 font-prime text-white'>On average, our clients saw a 45% increase in the number of potential <span className='text-black'>customers reaching out to them for their products.</span></h2>


    // ====== convinced title ====== //
    const convTitle =
        <h2 className='font-36 fw-700 font-prime txt-white mb-4'>
            Great Reasons To Choose <br /> For Amazon Keyword <br /> Research Agency
        </h2>


    // ========================================== //

    const bannertext = [
        {
            title: newTitle,
            subtext1: 'Are you looking to amplify the traffic and boost sales by using the right keywords? AMZ Profs offers the best Amazon keyword research services, leveraging cutting-edge tools to skyrocket your sales with optimized listings.',
            discuss: cta1,
            imageban: bannerImg,
            sizeclass: 'listBanner',
            banner: 'deepKeyBanner'
        }
    ]


    const rateFold = [
        {
            rateTitle: 'Here`s Why You Need To Hire Our Amazon Keyword Research Professionals',
            cardCount1: '01',
            cardHead1: 'Run Strategic PPC Campaigns',
            cardText1: 'Amazon keywords are the backbone of purpose-built PPC campaigns and are the determining factor for its success. With our keyword research services, you can bring more sales, target ads better, and improve the overall outcome of your PPC campaign with focused keywords.',
            cardCount2: '02',
            cardHead2: 'Beneficial, Long-tail Queries',
            cardText2: 'Enhance the product visibility and your profitability with long-tail keywords. This strategy is quite beneficial in the long run. We identify keywords that improve the chances of your product`s visibility on the first page of Amazon`s search results. With us, you can discover the best keywords for your products in just a few minutes.',
            cardCount3: '03',
            cardHead3: 'Outperform the Competitors',
            cardText3: 'When you embed the right keywords in your product`s listing(s), it enhances your product`s visibility. When you hire our Amazon keyword research specialists, you get well-researched keywords that they identify using modern keyword research tools to guarantee more sales and a competitive edge.',
            alirate: 'alirate',
            rate: 'rate'
        }
    ]


    const solutionsFold = [
        {
            imagfold: cater,
            title: solTitle,
            textName: 'Porter Marcus',
            subtext: 'HEAD OF MARKETING',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            alignclass: 'cater',
            solutions: 'solutions'
        }
    ]


    const trafficFold = [
        {
            subtitle: 'Witness the Power of Choosing the Right Keywords',
            title: 'The Use of Appropriate Keywords Is a Crucial Part of Amazon SEO Strategy',
            subtext: 'Relevant keywords can assist you in acquiring traffic from Amazon`s real-time customer search requests. An optimized product listing with relevant keywords is more likely to be indexed and appear for search queries linked to your keywords in search results.',
            text1: 'The higher a product`s ranking in search results, the more sales it will generate. Use well-researched and high-performing keywords to boost the ranking of your products on search engines. Observe the OBVIOUS increase in your sales.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: crucial,
            should: 'should'
        }
    ]


    const enhanceFold = [
        {
            titlemin: 'Strategize Your Amazon Marketing Campaign',
            maintitle: 'Using Relevant Keywords!',
            imagfold: relevant,
            title: 'Strategize Your Amazon Marketing CampaignUsing Relevant Keywords! Sell More Using The Right Keywords',
            subtext: 'Selling on Amazon is all about using the right keywords and optimizing your listings. It improves indexing for a given search term by optimizing your products for Amazon`s search engine. The product listing obtains the greatest discoverability against your selected search term based on the keywords.',
            text4: 'By using the correct keywords, your listing will be able to "speak in your buyer`s language." Your product gets organically "discoverable" and consequently picked up by a prospective buyer by using the proper keywords in your Amazon product listing(s).',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            should: 'should'
        }
    ]


    const convincedFold = [
        {
            title: convTitle,
            text: 'We have been in this business for over 20 years, maintaining an impressive record of improving products’ visibility by using the right keywords. Our keyword planning strategy has helped many businesses achieve superior conversion rates.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: convinced,
            convinced: 'convinced'
        }
    ]


    const formFold = [
        {
            subtitle: 'Conquer The Amazon Marketplace',
            title: 'Deep Keyword Research',
            text: 'We make sure that interaction with the target market for your Amazon business is simple. When selling on Amazon, choosing the appropriate keywords and optimizing your listings are essential. Making your products Amazon-friendly for search engines improves indexing for a particular search phrase. The product listing achieves the most discoverability for your selected search term’s relevant Amazon backend keywords. If the appropriate keywords are employed, your listing will be able to “speak in your buyer’s language.” Including the right keywords in your Amazon product listing will make your item more easily “discovered” and hence more likely to be chosen by a potential consumer.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            formFold: 'formFold'
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
                    sizeclass={item.sizeclass}
                    banner={item.banner}
                />
            )}


            {/* ========= FormFold ========= */}

            {formFold.map((item, i) =>
                <FormFold key={i}
                    subtitle={item.subtitle}
                    title={item.title}
                    text={item.text}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    imagfold={item.imagfold}
                    convinced={item.convinced}
                />
            )}


            {/* ========= Rate ========= */}

            {rateFold.map((item, i) =>
                <Rate key={i}
                    rateTitle={item.rateTitle}
                    cardCount1={item.cardCount1}
                    cardHead1={item.cardHead1}
                    cardText1={item.cardText1}
                    cardCount2={item.cardCount2}
                    cardHead2={item.cardHead2}
                    cardText2={item.cardText2}
                    cardCount3={item.cardCount3}
                    cardHead3={item.cardHead3}
                    cardText3={item.cardText3}
                    alirate={item.alirate}
                    rate={item.rate}
                />
            )}


            {/* ========= Solutions ========= */}

            {solutionsFold.map((item, i) =>
                <Solutions key={i}
                    imagfold={item.imagfold}
                    subtitle={item.subtitle}
                    title={item.title}
                    textName={item.textName}
                    subtext={item.subtext}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    alignclass={item.alignclass}
                    solutions={item.solutions}
                />
            )}


            {/* ========= Clients ========= */}

            <Clients />


            {/* ========= Enhance ========= */}

            {enhanceFold.map((item, i) =>
                <Enhance key={i}
                    imagfold={item.imagfold}
                    titlemin={item.titlemin}
                    maintitle={item.maintitle}
                    title={item.title}
                    subtext={item.subtext}
                    text4={item.text4}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    should={item.should}
                />
            )}


            {/* ========= Traffic ========= */}

            {trafficFold.map((item, i) =>
                <Traffic key={i}
                    subtitle={item.subtitle}
                    title={item.title}
                    subtext={item.subtext}
                    text1={item.text1}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    imagfold={item.imagfold}
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
