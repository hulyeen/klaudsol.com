import React from  'react'; 
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';
import { useRouter } from "next/router";
import portfolio_content from "../../portfolio_content.json"
import Script from 'next/script';


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

            
            <Navbar/>
            <div>
            <div className='container container_main'>
                <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 '>
                        <div className='text_container text-center col-xl-12'> 
                            <h1 className='txt_mainTitle'> {p_content.name} </h1>
                            <p className='txt_description'> {p_content.desc1} </p>
                            <a className='btn_visitSite' href={p_content.site} target="_blank" rel = "noreferrer">Visit Site</a>  
                        </div>
                    </div>

                    <div className='col-xl-3 col-lg-3 col-md-12 col-sm-12 '>
                        <div className='text_container text-center'> 
                            <img src={p_content.image1}></img>
                        </div>
                    </div>
                </div>

                <div className="container about-container">
                {/*<div className="about-text">
                    <p className="p1">WHAT WE DO</p>
                    <p className="p2">{p_content.desc2}</p>                       
                </div>*/}
                </div>
            </div>
            <Footer/>
            </div>
            {/* Latest jQuery */}
            {/* Latest jQuery */}
    <Script src="assets/js/jquery.min.js" strategy="beforeInteractive"></Script>
  {/* Plugin js */}
  <Script src="assets/js/plugin.js"></Script>
  <Script src="assets/js/jquery.mixitup.js"></Script>
  {/* GOOGLE MAP JS */}
  <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCIvoZGVhG5uh6ZkXGFPrYLrJ939mfbX2Q"></Script>
  {/* Main js*/}
  <Script src="assets/js/main_script.js" strategy="lazyOnload"></Script>
    </>
  );
};