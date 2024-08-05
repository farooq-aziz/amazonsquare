import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Banner.module.css'
//image
import bannerImg from '../public/images/banners/marketing.png'
import chat from '../public/images/icons/chat.png'
import call from '../public/images/icons/call.png'
import wasting from '../public/images/folds/wasting.png'
import cater from '../public/images/folds/cater.png'
import traffic from '../public/images/folds/traffic.png'
import enhance from '../public/images/folds/enhance.png'
import convinced from '../public/images/folds/convinced.png'
//components
import Banner from '@/components/Banner'
import ContactFold from '@/components/ContactFold'
import Wasting from '@/components/Wasting'
import Rate from '@/components/Rate'
import Solutions from '@/components/Solutions'
import Clients from '@/components/Clients'
import Traffic from '@/components/Traffic'
import Enhance from '@/components/Enhance'
import Convinced from '@/components/Convinced'
import Testimonial from '@/components/Testimonial'


export default function AmazonMarketing() {

    // ====== banner title ====== //
    const newTitle = <h1 className='font-60 fw-300 font-prime txt-second mb-4 mt-5'>Make Your
        <span className='d-block txt-prime fw-700'>Product Visible</span> to A Larger Target Audience</h1>


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
    const solTitle = <h2 className='font-40 fw-600 font-prime text-white'>Amazon A++ <br /> Marketing Specialists</h2>


    // ====== convinced title ====== //
    const convTitle =
        <h2 className='font-36 fw-700 font-prime txt-white mb-4'>
            Why Our Amazon <br /> Services Are Excellent?
        </h2>


    // ========================================== //

    const bannertext = [
        {
            title: newTitle,
            subtext1: 'Amazon Square is a pioneering Amazon A++ marketing company that helps sellers, vendors, retailers, and business owners to excel in their businesses. Our A++ marketing approach focuses on corporate earnings, consumer desires, and societal interests. Hire the best Amazon A++ marketing professionals online now!',
            discuss: cta1,
            imageban: bannerImg,
            banner: 'marketingBanner'
        }
    ]


    const wastingFold = [
        {
            subtitle: 'Save Your Money from Wasting on Unnecessary Ads',
            title: 'Amazon A++ Marketing',
            text: 'The digital era is reviving and energizing the business, inspiring new concepts that help people by satisfying their needs and aspirations for success. The current hottest digital media trend is A++ Marketing, a plan emphasizing social responsibility while simultaneously aiming for long-term sustainability. A++ Marketing’s primary goal is to maintain and enhance the bonds between customers and sellers. To elevate your brand, use our unique Amazon A++ marketing services and solutions. In order to provide product merchandising the biggest possible boost, our knowledgeable team provides product information, 360-degree spin images, videos, and listings.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: wasting,
            wasting: 'wasting'
        }
    ]


    const rateFold = [
        {
            rateTitle: 'Get A Higher Conversion Rate & More Sales with Our Amazon A++ Marketing Services',
            rateText: 'We adopt a business-friendly strategy to ensure concrete results and profits in real-time for our clients. Keeping in view the buyers, we provide to building long-term relationships that benefit our clients and us.',
            cardCount1: '01',
            cardHead1: 'Social Media Marketing',
            cardText1: 'To give Amazon sellers the boost, we provide professional social media marketing services. Throughout the world, more or less 3.96 bn people are on social media. Hence, we utilize these numbers to focus and leverage traffic and following on Amazon stores via social media marketing. As a result, we help you get better rates of conversions.',
            cardCount2: '02',
            cardHead2: 'Email Marketing Campaigns',
            cardText2: 'The exclusive email marketing campaigns for Amazon is a great way to attract the right customers. Amazon Square has a team of professional email experts, familiar with all the right strategies of marketing. Our strategic campaigns are designed according to the attitudes and moods of the customers.',
            cardCount3: '03',
            cardHead3: 'Sponsored Ad Campaigns',
            cardText3: 'With the help of paid marketing, you can up to 40% revenue. With our exclusive 360 approaches in strategic marketing, we give you a specific customer reach and quick clickthrough rates. We can help you pop up in the first 3 spots with our exclusive sponsored ad campaigns on Amazon.',
            rate: 'rate'
        }
    ]


    const solutionsFold = [
        {
            imagfold: cater,
            subtitle: 'We have the best',
            title: solTitle,
            text: 'who provide ready-made solutions that cater to the needs of our clients.',
            textName: 'Melanie Joshua',
            subtext: 'Lead Amazon Consultant',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            alignclass: 'cater',
            solutions: 'solutions'
        }
    ]


    const trafficFold = [
        {
            maintitle: ' Why Should You Choose Us?',
            subtitle: 'Increase Traffic with Our Custom Amazon',
            title: 'A++ Marketing Solutions',
            subtext: 'Our Amazon A++ marketing agency assists thousands of sellers globally to make sustainable profits via steady sales. We take pride in promoting your brand, product, and services via social networking sites like Facebook, Linked In, Twitter, Pinterest, and other channels. This technique presents products to a targeted audience on these platforms. By providing you with A++ Marketing, Amazon Square emphasizes the specific requirements of the target audience.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: traffic,
            should: 'should'
        }
    ]


    const enhanceFold = [
        {
            imagfold: enhance,
            subtitle: 'You Enhance Sales Ultimately When You',
            title: 'Hire Amazon A++ Marketing Solutions from Us',
            subtext: 'Think again if you`re planning to get your sales through Amazon adverts. These adverts are quite expensive and yield no results. However, at A++ Marketing, we can assist you in saving money on such adverts.',
            text: 'Our Amazon A++ marketing experts, by utilizing optimum techniques, ensure that the product is visible to more onlookers and work on your brand to improve sales. Our Amazon A++ marketing firm helps the audience know your brand and make an informed decision to purchase your business.',
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


            {/* ========= Wasting ========= */}

            {wastingFold.map((item, i) =>
                <Wasting key={i}
                    subtitle={item.subtitle}
                    title={item.title}
                    text={item.text}
                    foldDiscuss={item.foldDiscuss}
                    foldnumber={item.foldnumber}
                    imagfold={item.imagfold}
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
                    wasting={item.wasting}
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
