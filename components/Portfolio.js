import Link from "next/link";
import { useEffect } from 'react';
import $ from "jquery";
import mixItUp from '@/components/Jquery.mixitup';
import portfolio_content from "@/components/PortfolioContent.json"
const Portfolio = () =>{

    useEffect(() => {
      mixItUp($);
      $('.portfolio').mixItUp();
    }, []);
  
    return(
        <>
        <section id="work" className="work-area section-big">
        
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="work-title">
                <h2>Portfolio</h2>
                <p>
                  See if our existing solutions fit your needs, or let us know if
                  you want any customizations.
                </p>
                {/*
                      <p>Click here to <a class='hover-black'href="#">view all of our recent work.</a></p>
                      */}
              </div>
            </div>
            <div className="col-md-8">
              <ul className="work filters">
                <li className="filter" data-filter="all">
                  All Items
                </li>
                <li className="filter" data-filter=".biz">
                  Serverless Web Apps
                </li>
                <li className="filter" data-filter=".shopify">
                  Shopify Apps
                </li>
              </ul>
              <div className="portfolio">
                <div className="row work-items">
                  <div className="col-md-4 col-sm-6 col-xs-12 mix illustrate shopify">
                    <div className="item">
                    <Link href="/portfolio/goodreadr">
                      <a data-title="GoodReadR">
                        <img
                          src="assets/img/work/p1.png"
                          alt="GoodReadR is an app for online bookstore owners. It adds a Goodreads review widget on your Shopify store"/>
                        <div className="overlay">
                          <div className="overlay-text">
                            <h3>GoodReadR</h3>
                            <p>
                              Created for online bookstore owners, GoodreadR is a
                              Shopify app that adds a Goodreads book review widget
                              on your Shopify store.
                            </p>
                          </div>
                        </div>
                      </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12 mix dev biz">
                    <div className="item">
                    <Link href="/portfolio/sme">
                      <a data-title="SME">
                        <img
                          src="assets/img/work/p2.png"
                          alt="SME is an accounting, inventory, procurement, and payroll system specifically tailored for Philippine small and medium-scale businesses."
                        />
                        <div className="overlay">
                          <div className="overlay-text">
                            <h3>SME</h3>
                            <p>
                              SME is an accounting, inventory, procurement, and
                              payroll system specifically tailored for Philippine
                              small and medium-scale businesses.
                            </p>
                          </div>
                        </div>
                      </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12 mix illustrate typography web biz">
                    <div className="item">
                    <Link href="/portfolio/doorbell">
                      <a data-title="Doorbell">
                        <img src="assets/img/work/p3.png" alt='' />
                        <div className="overlay">
                          <div className="overlay-text">
                            <h3>Doorbell</h3>
                            <p>
                              Doorbell is an app built for real estate agents and
                              investors. Doorbell allows you to be notified via SMS
                              or email if there is a foreclosed property in the
                              market that suits your needs.
                            </p>
                          </div>
                        </div>
                      </a>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 col-xs-12 mix illustrate typography web biz">
                    <div className="item">
                    <Link href="/portfolio/sarisuki">
                      <a data-title="Sarisuki">
                        <img src="assets/img/work/p4.png" alt='' />
                        <div className="overlay">
                          <div className="overlay-text">
                            <h3>Sarisuki</h3>
                            <p>
                            Buy groceries online. All daily essentials delivered to you.
                            </p>
                          </div>
                        </div>
                      </a>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 col-xs-12 mix illustrate typography web biz">
                    <div className="item">
                    <Link href="/portfolio/healthnow">
                      <a data-title="HealthNow">
                        <img src="assets/img/work/p5.png" alt='' />
                        <div className="overlay">
                          <div className="overlay-text">
                            <h3>HealthNow</h3>
                            <p>
                            HealthNow brings health and care to every person in one tap.
                            </p>
                          </div>
                        </div>
                      </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Portfolio;