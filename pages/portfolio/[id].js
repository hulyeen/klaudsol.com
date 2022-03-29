import React from  'react'; 
import Footer from '@/components/footer'
import Navbar from '@/components/navbar';
import { useRouter } from "next/router";
import portfolio_content from "@/components/portfolio_content.json"
import Script from 'next/script';
import runLegacyScripts from '@/components/legacy';
import { useEffect }  from 'react';
import $ from "jquery";


export default function Content() {
    
  useEffect(() => {
    runLegacyScripts($);
  }, []);
  
  const router = useRouter();
  const p_content = portfolio_content[router.query.id];
  if (!p_content) return <p></p>;
  return (
    <>
            <Navbar navset="portfolio"/>
            <div>
            <div className='container container_main'>
                <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 '>
                        <div className='text_container text-center col-xl-12'> 
                            <h1 className='txt_mainTitle'> {p_content.name} </h1>
                            <p className='txt_description'> {p_content.desc1} </p>
                            <a className='btn_visitSite' href={p_content.site} target = "_blank" rel = "noreferrer">Visit Site</a>  
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-12 col-sm-12 '>
                        <div className='text_container text-center'> 
                            <img className = "img-responsive" src={p_content.image1}></img>
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
     
    </>
  );
};