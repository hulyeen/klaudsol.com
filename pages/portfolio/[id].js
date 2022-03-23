import React from  'react'; 
import AboutUs from '@/components/about-us';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { useRouter } from "next/router";
import Link from 'next/link'
import portfolio_content from "/portfolio_content.json"
import Portfolio from '@/components/portfolio';
import Script from 'next/script'
export default function Content() {
  const router = useRouter();

  const p_content = portfolio_content[router.query.id];
  if (!p_content) return <p></p>;

  return (
    <>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description"    content="We build Cloud-based Business Apps that allow merchants to do more, and sell more." />
    <meta name="keywords"       content="Shopify, Apps, Software, technology, business, cloud, serverless" />
    <meta name="author"         content="KlaudSol Apps" />
    <meta property="og:image" content="https://klaudsol.com/assets/img/klaudsol-og-image.png" />
    <meta property="og:url" content="https://klaudsol.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="KlaudSol - Cloud-based Business Apps" />
    <meta property="og:description" content="We build Cloud-based Business Apps that allow merchants to do more, and sell more." />
    <meta property="fb:app_id" content="758280608034823" />
    


    {/*<!-- favicon -->*/}
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/klaudsol-favicon.png" />
        {/* CSS */}
    {/*<!-- Plugin Css -->*/}
    <link href="../assets/css/plugin.css" rel="stylesheet" />

    {/*<!-- Style css -->*/}
    <link href="../assets/css/style.css" rel="stylesheet" />

    {/*<!-- Responsive css -->*/}
    <link href="../assets/css/responsive.css" rel="stylesheet" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    
    <Navbar />

            {/*Banner Content Start*/}
            <section className='portfolio-section'>
            
                <div key ={p_content._id}className='container'>
                    <div className="banner-container col-md-4 col-sm-6">
                        <h2>{p_content.slogan}</h2>
                        <p>{p_content.desc1}</p>
                        <button className="visit-site-btn">Visit Site</button>
                    </div>
                    <div className='col-md-7 col-sm-6'>
                    <img src={p_content.image1} className = "banner-img"alt=''/>
                    </div>
                </div>git
            </section>
            {/*Banner Content End*/}
          {/*About Section*/}
          <div className="container about-container">
                <div className="about-text">
                    <p className="p1">WHAT WE DO</p>
                    <p className="p2">{p_content.desc2}</p>                       
                </div>
            </div>
            <Footer></Footer>

    </>
  );
};