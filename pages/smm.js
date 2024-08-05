import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Banner.module.css'
//image
import bannerImg from '../public/images/banners/smm.png'
import chat from '../public/images/icons/chat.png'
import call from '../public/images/icons/call.png'
import loyalty from '../public/images/folds/loyalty.png'
import specialists from '../public/images/folds/specialists.png'
import solutions from '../public/images/folds/solutions.png'
import massive from '../public/images/folds/massive.png'
import convinced from '../public/images/folds/convinced.png'
//components
import Banner from '@/components/Banner'
import ContactFold from '@/components/ContactFold'
import Brand from '@/components/Brand'
import Rate from '@/components/Rate'
import Solutions from '@/components/Solutions'
import Clients from '@/components/Clients'
import Traffic from '@/components/Traffic'
import Enhance from '@/components/Enhance'
import Convinced from '@/components/Convinced'
import Testimonial from '@/components/Testimonial'


export default function AmazonMarketing() {

    // ====== banner title ====== //
    const newTitle = <h1 className='font-60 fw-300 font-prime txt-second mb-4 mt-5'>Inspire Buyers <br /> Through Amazon <span className='d-block txt-prime fw-700'>Social Media</span> Marketing</h1>


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
    const solTitle = <h2 className='font-40 fw-600 font-prime text-white'>Social Media  <br /> Marketing Specialists</h2>


    // ====== convinced title ====== //
    const convTitle =
        <h2 className='font-36 fw-700 font-prime txt-white mb-4'>
            Why Our Amazon <br /> Services Are Excellent?
        </h2>


    // ========================================== //

    const bannertext = [
        {
            title: newTitle,
            subtext1: 'Break out Amazon`s restricted marketing and leverage social media marketing to humanize your branding strategy. Build a loyal clientele, enhance visibility, and improve your outreach through exclusive, branded social media content.',
            discuss: cta1,
            imageban: bannerImg,
            banner: 'smmBanner'
        }
    ]


    const brandFold = [
        {
            subtitle: 'Earn Customer Loyalty',
            title: 'With Amazon SMM!',
            text: 'Amazon SMM is a tough gig, especially when only minimal branded marketing is permitted. So, why would Amazon do such a thing? The reason is brilliant – yet simple - Amazon strives to keep possession of its customers rather than handing them over to another platform! However, strategic Social Media Marketing allows you to build a loyal consumer base that will return to your store repeatedly rather than selling their loyalty to other brands.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: loyalty,
            should: 'should'
        }
    ]


    const rateFold = [
        {
            rateTitle: 'Why You Need to Hire Our Amazon Social Media Marketing Services',
            rateText: 'SMM services allow you to take advantage of a more proactive marketing approach that helps you:',
            cardCount1: '01',
            cardHead1: 'Build a Community',
            cardText1: 'Social Media Marketing allows you to influence your buyers through social media by building an engaging branding strategy. You can create a loyal following of potential buyers with social media marketing. When your brand name resonates with your potential clients, you gain visibility that serves to get the due brand recognition!',
            cardCount2: '02',
            cardHead2: 'Form a Meaningful Connection',
            cardText2: 'Our Amazon social media marketing agency can help you establish authority as a go-to brand where buyers can visit to seek meaningful information about the products. With active social media accounts, you are not just a reseller on Amazon; you become a brand leader with a loyal customer base who looks up to you to introduce new market trends.',
            cardCount3: '03',
            cardHead3: 'Establish a Loyal Clientele',
            cardText3: 'All the time and effort you put into social media marketing brings you one step closer to attaining your sales goals. With Amazon`s social media marketing, you can generate quality traffic and redirect that traffic to your Amazon store. This gives you a good chance of converting visitors into leads; and leads into customers. These followers will consider you an industry leader, leading to higher click-through rates.',
            rate: 'rate'
        }
    ]


    const solutionsFold = [
        {
            imagfold: specialists,
            subtitle: 'If you want to grow your Amazon store through social media, you can hire',
            title: solTitle,
            text: 'who provide ready-made solutions that cater to the needs of our clients.',
            textName: 'William Joseph',
            subtext: 'VP of Branding Department',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            alignclass: 'specialists',
            solutions: 'solutions'
        }
    ]


    const trafficFold = [
        {
            maintitle0: 'Shoot Your Sales Up with Our ',
            maintitle: 'Amazon SMM Services',
            subtitle: 'We offer the best',
            title: 'Amazon Social Media Marketing',
            subtext: 'solutions that deliver excellent results.',
            subtext1: 'Social media marketing is a hybrid method that starts with providing value to your consumers and gradually redirects visitors to make purchases using value-driven content and soft-selling techniques. Our Amazon experts will create a result-oriented Social Media Strategy that incorporates soft-selling strategies, sending high-quality, likely-to-convert leads to your Amazon store!',
            subtext2: '"As a professional Amazon SMM company, we give a blended PR recipe that will add a human touch to your product, what lifestyle it will offer to your potential consumers, and how your product improves their lives – life advice, interesting facts, how- to`s, and everything lovely."',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: solutions,
            should: 'should'
        }
    ]


    const enhanceFold = [
        {
            imagfold: massive,
            subtitle: 'Leverage Amazon – The Massive e-tailer –',
            title: 'TO GENERATE MORE SALES',
            subtext: 'The more effective your marketing plan is, the more you can grow your consumer base and increase conversions. With such a large number of active sellers on Amazon, it takes more than Amazon SEO to establish a name for yourself, be noticed, and entice customers to purchase from your online store. It takes time for purchasers to come across your products and make a purchase; instead, cultivate an audience that wants to buy directly from you!',
            text: '"When you work with our Amazon social media marketing company, we develop engaging content with accurate and relevant information to answer and remedy frequent consumer issues while redirecting them to your business."',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
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
                    text={item.text}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    imagfold={item.imagfold}
                    alignclass={item.alignclass}
                    should={item.should}
                />
            )}


            {/* ========= Rate ========= */}

            {rateFold.map((item, i) =>
                <Rate key={i}
                    rateTitle={item.rateTitle}
                    rateText={item.rateText}
                    cardCount1={item.cardCount1}
                    cardHead1={item.cardHead1}
                    cardText1={item.cardText1}
                    cardCount2={item.cardCount2}
                    cardHead2={item.cardHead2}
                    cardText2={item.cardText2}
                    cardCount3={item.cardCount3}
                    cardHead3={item.cardHead3}
                    cardText3={item.cardText3}
                    rate={item.rate}
                />
            )}


            {/* ========= Solutions ========= */}

            {solutionsFold.map((item, i) =>
                <Solutions key={i}
                    imagfold={item.imagfold}
                    subtitle={item.subtitle}
                    title={item.title}
                    text={item.text}
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


            {/* ========= Traffic ========= */}

            {trafficFold.map((item, i) =>
                <Traffic key={i}
                    maintitle0={item.maintitle0}
                    maintitle={item.maintitle}
                    subtitle={item.subtitle}
                    title={item.title}
                    subtext={item.subtext}
                    subtext1={item.subtext1}
                    subtext2={item.subtext2}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    imagfold={item.imagfold}
                    should={item.should}
                />
            )}


            {/* ========= Enhance ========= */}

            {enhanceFold.map((item, i) =>
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
