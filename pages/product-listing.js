import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Banner.module.css'
//image
import bannerImg from '../public/images/banners/listing.png'
import chat from '../public/images/icons/chat.png'
import call from '../public/images/icons/call.png'
import unleash from '../public/images/folds/unleash.png'
import cater from '../public/images/folds/cater.png'
import efforts from '../public/images/folds/efforts.png'
import amplify from '../public/images/folds/amplify.png'
import convinced from '../public/images/folds/convinced.png'
//components
import Banner from '@/components/Banner'
import ContactFold from '@/components/ContactFold'
import Brand from '@/components/Brand'
import Rate from '@/components/Rate'
import Solutions from '@/components/Solutions'
import Traffic from '@/components/Traffic'
import Enhance from '@/components/Enhance'
import Convinced from '@/components/Convinced'
import Testimonial from '@/components/Testimonial'


export default function AmazonMarketing() {

    // ====== banner title ====== //
    const newTitle = <h1 className='font-60 fw-300 font-prime txt-second mb-4 mt-5'>Amazon
        <span className='d-block txt-prime fw-700'>Product Image</span> Optimization Company</h1>


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
    const solTitle = <h2 className='font-40 fw-600 font-prime text-white'>"The brands were initially <br /> reluctant to avail services for</h2>


    // ====== convinced title ====== //
    const convTitle =
        <h2 className='font-36 fw-700 font-prime txt-white mb-4'>
            Why Our Amazon <br /> Services Are Excellent?
        </h2>


    // ========================================== //

    const bannertext = [
        {
            title: newTitle,
            subtext1: 'Your Amazon product images play a significant role in improving conversions. It helps your products stand out from the clutter of products. With our Amazon product image optimization solutions, you can outshine your competition by jumping to the first page of Amazon.',
            discuss: cta1,
            imageban: bannerImg,
            banner: 'listingBanner'
        }
    ]


    const brandFold = [
        {
            subtitle: 'Unleash Your Store`s Full Potential',
            title: 'With Amazon Square',
            text: 'Amazon is an enormous online selling platform that decides between millions of products in just a span of milliseconds. The platform chooses which product of the millions of products should be displayed to the buyer first.',
            subtext: 'One of the most critical aspects of the Amazon product listings that often get ignored is the choice of product images. For the product to compel the audience to open the listing, your listing needs captivating images that describe the items you are selling, provide the customers with the relevant information, and describe the condition of the items.',
            subtext1: 'Amazon square helps brands skyrocket their sales through optimized Amazon images and clearly demonstrates the benefits and features of the products to the buyers.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: unleash,
            should: 'should'
        }
    ]


    const rateFold = [
        {
            rateTitle: 'Why You Need to Focus on Product Image Optimization',
            rateText: 'Following are some of the many reasons your brand needs to focus on getting the product images optimized.',
            cardCount1: '01',
            cardHead1: 'Demonstrate & Sell',
            cardText1: 'Images that are high in resolution work the best for Amazon`s zoom function. Leave the competitors behind with well-lit images. Choose photos with a white background and those that fill 80% of the frame. Nothing brings more customers to your listing than a well-optimized image. Improve the visuals and guide the customers with their buying journey through custom Amazon product image optimization.',
            cardCount2: '02',
            cardHead2: 'Don`t Leave Any Angle',
            cardText2: 'When you give the buyers a 3D look at your product by capturing a different aspect of the product, you catch the buyer`s interest. When the customers feel as if they have seen your entire product, instead of just seeing it through its good angles, this is what seizes the deals. Defined details, integrated infographics, and clear product images steal the buyers from the competitors and land them on your page!',
            cardCount3: '03',
            cardHead3: 'Visuals Words',
            cardText3: 'A picture is worth a thousand words. People invest in what can fit into their lifestyle and improve their lives. Tell your customers how your product can bring value to them. Utilize lifestyle images to offer your branding strategy a human touch. After all, you are not just adding images for the bots; you are adding images for the customers. Add creative photos and let the prospects experience the benefits of your products instead of just seeing them in writing.',
            rate: 'rate'
        }
    ]


    const solutionsFold = [
        {
            imagfold: cater,
            title: solTitle,
            text: 'image optimization since they did not consider it that important. However, since 2018, we have been receiving inquiries from thousands of brands for our image optimization services, and this is only happening because of people understanding its significance."',
            textName: 'Joshua Levine',
            subtext: 'Head of Amazon Marketing',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            alignclass: 'cater',
            solutions: 'solutions'
        }
    ]


    const trafficFold = [
        {
            subtitle: 'Create a Great First Impression &',
            title: 'Boost Your Marketing Efforts With Our Amazon Product Image Optimization Services',
            subtext: 'For making your product available to the audiences on Amazon, you need one or more product images. The image used primarily on the listing is called the Main image. It represents your item in the search results and the images section of search engines. This is the first image customers see when they search for a product.',
            subtext1: 'According to Amazon, advertisers should use images that are clear, easy to comprehend, information-enriched, and attractive enough to catch the eyes of potential customers. AMZ Profs has a team of professional Amazon product image optimization specialists who are well-aware of the do`s and don`t of the Amazon product images. We make sure that the images used on your product listing strictly adhere to Amazon`s product image criteria to get the listing approved and rank higher in the search results.',
            textbef: 'Images that accurately represent your product.',
            textbef2: 'Use of white background, accurate size, and minimal propping.',
            foldDiscuss: 'Get A Quote',
            foldnumber: '+1 (408) 689-7746',
            imagfold: efforts,
            should: 'should'
        }
    ]


    const enhanceFold = [
        {
            maintitle0: 'Amplify Your Product`s Sales through',
            maintitle: 'Product Image Optimization',
            imagfold: amplify,
            text: 'Amazon has all the rights to remove the images that are not up to the mark with the product images standards. Therefore, it is the brand`s responsibility to ensure that all the photos are up to the standards described by the platform.',
            text2: 'One of the most important fundamentals of Amazon selling is having a solid product image optimization strategy that adheres to the Amazon product image criteria. As a leading Amazon product image optimization agency, we ensure that all of your product images are compliant with the Amazon standards and are optimized for discovery.',
            text3: 'The image that your listing consists of creates the first impression of your product to the user. It is the first thing that the potential customer notices, even before the product description. Hence, we optimize the product images using our immense image optimization knowledge to help businesses level up their Amazon search ranking game.',
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
                    subtext={item.subtext}
                    subtext1={item.subtext1}
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


            {/* ========= Enhance ========= */}

            {enhanceFold.map((item, i) =>
                <Enhance key={i}
                    imagfold={item.imagfold}
                    maintitle0={item.maintitle0}
                    maintitle={item.maintitle}
                    text={item.text}
                    text2={item.text2}
                    text3={item.text3}
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
                    textbef={item.textbef}
                    textbef2={item.textbef2}
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
