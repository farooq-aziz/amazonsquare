import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Banner.module.css'
//image
import bannerImg from '../public/images/banners/agency.png'
import chat from '../public/images/icons/chat.png'
import call from '../public/images/icons/call.png'
import cater from '../public/images/folds/cater.png'
import profitable from '../public/images/folds/profitable.png'
import compelling from '../public/images/folds/compelling.png'
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
    const newTitle = <h1 className='font-36 fw-600 font-prime text-black mb-4 mt-5'>Improve Amazon Discoverability <br /> with Our Amazon Product Listing <br /> Optimization Agency</h1>


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
    const solTitle = <h2 className='font-40 fw-600 font-prime text-white'>Amazon's ever-changing <br /> algorithm makes it complex for <br /> the sellers to keep up with. </h2>


    // ====== convinced title ====== //
    const convTitle =
        <h2 className='font-36 fw-700 font-prime txt-white mb-4'>
            Why Our Amazon <br /> Services Are Excellent?
        </h2>


    // ========================================== //

    const bannertext = [
        {
            title: newTitle,
            subtext1: 'The competition on Amazon has become fierce, and only the best listings manage to win the sales. Leverage our product listing optimization service to improve your search rankings, generate higher traffic and amplify your sales.',
            discuss: cta1,
            imageban: bannerImg,
            sizeclass: 'listBanner',
            banner: 'listingBannerI'
        }
    ]


    const rateFold = [
        {
            rateTitle: 'Stay Ahead of the Competition with Powerful Product Listings',
            cardCount1: '01',
            cardHead1: 'Copies That Convert',
            cardText1: 'More than 87% of the online buyers scroll down to read the product descriptions – this is where product listings rely upon a clear, concise, and crisp sales copy to seal the deal. By incorporating the right keyword(s) in the title and the copy, you can get your product listing placed right in front of the audience.',
            cardCount2: '02',
            cardHead2: 'Carefully Placed Keywords',
            cardText2: 'The backbone of the strategy is to make the product listing searchable on Amazon through the right placement of keywords. Our keyword research team identifies high-performing keywords and our professional writers strategically infuse these keywords into the content to attract more customers.',
            cardCount3: '03',
            cardHead3: 'Outstanding Product Titles',
            cardText3: 'Our Amazon product listing developers know how to convert the features of your products into compelling benefits and utilize these benefits to optimize the product listings for maximum Amazon searchability. We create compelling titles that persuade the visitors to click on the listing.',
            alirate: 'alirate',
            rate: 'rate'
        }
    ]


    const solutionsFold = [
        {
            imagfold: cater,
            title: solTitle,
            text: 'We understand this; hence, we have developed the best practices that strictly adhere to Amazon`s product listing criteria."',
            textName: 'Kenneth Spencer',
            subtext: 'Vice President – Amazon Marketing',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            alignclass: 'cater',
            solutions: 'solutions'
        }
    ]


    const trafficFold = [
        {
            subtitle: 'Hire Amazon Product Listing Services',
            title: 'Elevate Your Product`s Ranking To Profitable Heights',
            subtext: 'AMZ Profs helps you craft a top Amazon product listing. From curating the launch strategy to evaluating the listings, we ensure the success of your marketing strategy and make amendments wherever necessary to improve the results. Our product listing development service can improve discoverability, generating more sales.',
            subtext1: 'Customers use Amazon to look for products to buy. Our Amazon product listing writers take advantage of this by combining buyer persona and cutting-edge SEO techniques to boost conversion rates. As a result, hiring an Amazon copywriter might be helpful to your company in the long term.',
            text1: 'We create engaging content for product descriptions in a concise form, catering to all the common queries of the buyers to convert more leads into potential sales.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: profitable,
            should: 'should'
        }
    ]


    const enhanceFold = [
        {
            maintitle0: 'Improve the Amazon Ranking of Your Products with Our',
            maintitle1: 'Amazon Product Listing Optimization Services',
            imagfold: compelling,
            mintitle: 'In-depth Keyword Research',
            mintext: 'We have an entire team dedicated to discovering and working on relevant and high-value keywords related to the products and the customers search intent. We identify keywords with a lot of searches but lesser competition, which results in your products ranking faster on Amazon, thereby generating more sales.',
            mintitle1: 'Compelling & Optimized Content Creation',
            mintext1: 'We understand that when buyers are looking for any product on Amazon, their goal is to find the product that best fits their needs. Hence, we create compelling product descriptions to demonstrate the benefits of the products coupled with the strategic infusion of keywords.',
            mintitle2: 'Product Image Optimization',
            mintext2: 'A picture is worth 1000 words. Images can do what words can`t. When you hire AMZ Profs for your Amazon product listing development, we do not just focus on optimizing the listing; we also optimize the images so that your products show up on the top of search results.',
            text4: 'As a top Amazon product listing optimization company, we do everything it takes to get your products to get the deserved attention, attainable with keyword usage, compelling content creation, and product image optimization.',
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


    const formFold = [
        {
            subtitle: 'Our Amazon Product Listing Developers',
            title: 'Identify & Address The Pain Points Of The Buyers',
            text: 'Being an Amazon seller, if you want to get your brand and products noticed by Amazon`s algorithm, you need to recognize the customers pain points and address these issues through your products. AMZ Profs can help you in this regard. As a top-rated Amazon services provider, we are well-aware of the intricacies of the Amazon platform, paying keen attention to details, and willing to keep up with the evolving algorithms. With a fully-optimized product listing, our Amazon product listing designing agency can push your product listing to the top of Amazon`s search results.',
            subtext: 'We know how to list your products to drive more sales and even get your product ranked as the best-selling product. We evolve as the guidelines change and stay relevant by curating an effective launch strategy that drives organic traffic. Putting up well-constructed listings increases the chances of the shoppers finding your product, explaining your product in detail that highlights the product`s best features and gives the potential buyers reason to buy your product.',
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


            {/* ========= Enhance ========= */}

            {enhanceFold.map((item, i) =>
                <Enhance key={i}
                    imagfold={item.imagfold}
                    maintitle0={item.maintitle0}
                    maintitle1={item.maintitle1}
                    mintitle={item.mintitle}
                    mintext={item.mintext}
                    mintitle1={item.mintitle1}
                    mintext1={item.mintext1}
                    mintitle2={item.mintitle2}
                    mintext2={item.mintext2}
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
                    subtext1={item.subtext1}
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

            {/* ========= FormFold ========= */}

            {formFold.map((item, i) =>
                <FormFold key={i}
                    subtitle={item.subtitle}
                    title={item.title}
                    text={item.text}
                    subtext={item.subtext}
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
