import React from  'react'; 
import AboutUs from '../components/about-us';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import content from './content';
export default function SarisukiPortfolio(sarisuki){
    const{port} = sarisuki
    return(
       <>
            <Navbar></Navbar>
            {/*Banner Content Start*/}
            <section className='sarisuki-section'>
                <div key ={port._id}className='container'>
                    <div className="banner-container">
                        <h2>{port.slogan}</h2>
                        <p>{port.desc1}</p>
                        <button className="visit-site-btn">Visit Site</button>
                    </div>
                    <img src={port.image1} className = "banner-img"alt=''/>
                </div>
            </section>
            {/*Banner Content End*/}
             {/*About Section*/}
             <div className=" container about-container">
                <img src = {port.image2}></img>
                <div className="about-text">
                    <p className="p1">WHAT WE DO</p>
                    <p className="p2">{port.desc2}</p>                       
                </div>
            </div>

            <AboutUs></AboutUs>
            {/*About Section End*/}
    </>
    
    )
}