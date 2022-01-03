import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        {/*<!-- Site title -->*/}
        <title>KlaudSol - Cloud-based Business Apps</title>
        <meta name="viewport"       content="width=device-width, initial-scale=1.0" />
      </Head>
  {/* Navigation area starts */}
  <div className="menu-area navbar-fixed-top">
    <div className="container">
      <div className="row">
        {/* Navigation starts */}
        <div className="col-md-12">
          <div className="mainmenu">
            <div className="navbar navbar-nobg">
              <div className="navbar-header">
                <a className="navbar-brand" href="">
                  <img
                    src="assets/img/logo-180x180.png"
                    alt=''
                    style={{ position: "relative", top: 5 }}
                  />
                </a>
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="navbar-collapse collapse">
                <nav>
                  <ul className="nav navbar-nav navbar-right">
                    <li className="active">
                      <a className="smooth_scroll" href="#slider">
                        HOME
                      </a>
                    </li>
                    <li>
                      <a className="smooth_scroll" href="#whatwedo">
                        WHAT WE DO
                      </a>
                    </li>
                    <li>
                      <a className="smooth_scroll" href="#aboutus">
                        ABOUT US
                      </a>
                    </li>
                    <li>
                      <a className="smooth_scroll" href="#work">
                        PORTFOLIO
                      </a>
                    </li>
                    <li>
                      <a href="https://blog.klaudsol.com/">READ OUR BLOG</a>
                    </li>
                    <li>
                      <a className="smooth_scroll" href="#contact">
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation ends */}
      </div>
    </div>
  </div>
  {/* Navigation area ends */}
  {/* Slider area starts */}
  <section id="slider" className="slider-area">
    <div className="container">
      <div
        className="intro-text clearfix"
        style={{
          background: "rgba(255, 255, 255, 0.40)",
          marginTop: 30,
          padding: "5px 30px",
          borderRadius: 10
        }}
      >
        <h2>We build Cloud-based and Serverless Business Apps.</h2>
        <p style={{ color: "#0f1d44" }}>
          We build web apps that allow you to do more, and sell more.
        </p>
        <div className="clearfix video">
          {/*
              <a class="popup-youtube" href="http://www.youtube.com/watch?v=xtZE3sMv6lg">
                  <span class="ti-control-play"></span>
              </a>
              <div class="text">
                  <p>Watch</p>
                  <h6>INTRO VIDEO</h6>
              </div>
              */}
        </div>
      </div>
    </div>
  </section>
  {/* Slider area ends */}
  {/* Hero boxes starts */}
  <section id="whatwedo" className="hero-box-area section-big">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="section-title">
            <h2>What We Do</h2>
            <p>
              We are a team of software developers who take pride and passion in
              helping you build{" "}
              <strong>
                Cloud-based and Serverless Business Web Applications
              </strong>
              .
            </p>
            <p>We specialize in the following technologies and platforms:</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="hero-box">
            <span>
              <img
                src="/assets/img/react-logo.svg"
                className="klaudsol-tech-icons"
              />
            </span>
            <h3>
              <a
                className="klaudsol-tech-link"
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                React
              </a>
            </h3>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="hero-box">
            <span>
              <img
                src="/assets/img/nextjs-logo.png"
                className="klaudsol-tech-icons"
              />
            </span>
            <h3>
              <a
                className="klaudsol-tech-link"
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                NextJS
              </a>
            </h3>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="hero-box">
            <span>
              <img
                src="/assets/img/nodejs-logo.svg"
                className="klaudsol-tech-icons"
              />
            </span>
            <h3>
              <a
                className="klaudsol-tech-link"
                href="https://nodejs.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                NodeJS
              </a>
            </h3>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="hero-box">
            <span>
              <img
                src="/assets/img/expressjs-logo.png"
                className="klaudsol-tech-icons"
              />
            </span>
            <h3>
              <a
                className="klaudsol-tech-link"
                href="https://expressjs.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Express
              </a>
            </h3>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="hero-box">
            <span>
              <img
                src="/assets/img/koa-logo.jpg"
                className="klaudsol-tech-icons"
              />
            </span>
            <h3>
              <a
                className="klaudsol-tech-link"
                href="https://koajs.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Koa
              </a>
            </h3>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="hero-box">
            <span>
              <img
                src="/assets/img/netlify-logo.svg"
                className="klaudsol-tech-icons"
              />
            </span>
            <h3>
              <a
                className="klaudsol-tech-link"
                href="https://www.netlify.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Netlify
              </a>
            </h3>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="hero-box">
            <span>
              <img
                src="/assets/img/vercel-logotype-dark.svg"
                className="klaudsol-tech-icons"
              />
            </span>
            <h3>
              <a
                className="klaudsol-tech-link"
                href="https://vercel.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Vercel
              </a>
            </h3>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="hero-box">
            <span>
              <img
                src="/assets/img/aws-logo.svg"
                className="klaudsol-tech-icons"
              />
            </span>
            <h3>
              <a
                className="klaudsol-tech-link"
                href="https://aws.amazon.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                AWS
              </a>
            </h3>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="hero-box">
            <span>
              <img
                src="/assets/img/shopify-logo.svg"
                className="klaudsol-tech-icons"
              />
            </span>
            <h3>
              <a
                className="klaudsol-tech-link"
                href="https://shopify.dev/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Shopify Dev
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Hero boxes ends */}
  {/* About us area starts */}
  <section id="aboutus" className="aboutus-area section-small">
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-sm-6">
          <div className="about-content">
            <h5>ABOUT US</h5>
            <h2>
              We love helping merchants and entrepreneurs grow their businesses.
            </h2>
            <p>
              You are embattled, overwhelmed, yet fully committed for your
              business to survive and thrive. We feel you, and we are here to
              give you that boost. Our business is built around the idea of
              rooting for YOUR success, and building tools and systems that ease
              everyday hurdles and challenges that come your way.
            </p>
          </div>
          {/*
              <div class="about-boxs">

                  <div class="about-box">
                      <span class="ti-briefcase"></span>
                      <h3>289</h3>
                      <p>Job Completed</p>
                  </div>

                  <div class="about-box">
                      <span class="ti-pencil-alt"></span>
                      <h3>163</h3>
                      <p>Ongoing Jobs</p>
                  </div>

                  <div class="about-box">
                      <span class="ti-cup"></span>
                      <h3>023</h3>
                      <p>Achivements</p>
                  </div>

              </div>
              */}
        </div>
        <div className="col-md-5 col-sm-6">
          <div className="about-img">
            <img src="assets/img/about/about.png" alt='' />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About us area ends */}
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
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mix illustrate shopify">
                <div className="item">
                  <a
                    href="https://apps.shopify.com/goodreadr-book-reviews-1"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src="assets/img/work/p1.png"
                      alt="GoodReadR is an app for online bookstore owners. It adds a Goodreads review widget on your Shopify store"
                    />
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
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mix dev biz">
                <div className="item">
                  <a
                    href="https://sme.klaudsol.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
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
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mix illustrate typography web biz">
                <div className="item">
                  <a
                    href="https://doorbell.klaudsol.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Team  area starts 
    <section id="team" class="team-area section-big">
  <div class="container">

      <div class="row">
          <div class="col-md-12 text-center">
              <div class="section-title">
                  <h2>Amazing Team Members</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
          </div>
      </div>

      <div class="row">

          <div class="col-md-3 col-sm-6">
              <div class="member">
                  <div class="member-img">
                      <img src="assets/img/team/1.png" alt="">
                  </div>
                  <div class="member-info">
                      <h3>Mark Anthony</h3>
                      <p>Head of Ideas</p>
                  </div>
                  <div class="member-social">
                      <a href=""><span class="ti-facebook"></span></a>
                      <a href=""><span class="ti-twitter"></span></a>
                      <a href=""><span class="ti-dribbble"></span></a>
                     <a href=""><span class="ti-linkedin"></span></a>
                  </div>
              </div>
          </div>

          <div class="col-md-3 col-sm-6">
              <div class="member">
                  <div class="member-img">
                      <img src="assets/img/team/2.png" alt=""> 
                  </div>
                  <div class="member-info">
                      <h3>Mark Anthony</h3>
                      <p>Head of Ideas</p>
                  </div>
                  <div class="member-social">
                      <a href=""><span class="ti-facebook"></span></a>
                      <a href=""><span class="ti-twitter"></span></a>
                      <a href=""><span class="ti-dribbble"></span></a>
                      <a href=""><span class="ti-linkedin"></span></a>
                   </div>
              </div>
          </div>

          <div class="col-md-3 col-sm-6">
              <div class="member">
                  <div class="member-img">
                      <img src="assets/img/team/3.png" alt=""> 
                  </div>
                  <div class="member-info">
                      <h3>Mark Anthony</h3>
                      <p>Head of Ideas</p>
                  </div>
                  <div class="member-social">
                      <a href=""><span class="ti-facebook"></span></a>
                      <a href=""><span class="ti-twitter"></span></a>
                      <a href=""><span class="ti-dribbble"></span></a>
                      <a href=""><span class="ti-linkedin"></span></a>
                  </div>
              </div>
          </div>

          <div class="col-md-3 col-sm-6">
              <div class="member">
                  <div class="member-img">
                      <img src="assets/img/team/4.png" alt=""> 
                  </div>
                  <div class="member-info">
                      <h3>Mark Anthony</h3>
                      <p>Head of Ideas</p>
                  </div>
                  <div class="member-social">
                      <a href=""><span class="ti-facebook"></span></a>
                      <a href=""><span class="ti-twitter"></span></a>
                      <a href=""><span class="ti-dribbble"></span></a>
                      <a href=""><span class="ti-linkedin"></span></a>
                  </div>
              </div>
          </div>

      </div>
    
          
  </div>
    </section>
    Team area ends */}
  {/* Testimonial area starts 
    <section id="testimonial" class="testimonial-area section-big">
  <div class="container">

      <div class="row">
          <div class="testimonial-list">
              
              <div class="testimonial">
                  <h2>99</h2>
                  <p class="italic">"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam."</p>

                  <img src="assets/img/testimonial/testimonial.png" alt="">

                  <h3>Emiley Blunt</h3>
                  <p>Google Inc.</p>
                  <div class="ratings">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                  </div>
              </div>

              <div class="testimonial">
                  <h2>99</h2>
                  <p class="italic">"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam."</p>

                  <img src="assets/img/testimonial/testimonial.png" alt="">

                  <h3>Emiley Blunt</h3>
                  <p>Google Inc.</p>
                  <div class="ratings">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                  </div>
              </div>

              <div class="testimonial">
                  <h2>99</h2>
                  <p class="italic">"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam."</p>

                  <img src="assets/img/testimonial/testimonial.png" alt="">

                  <h3>Emiley Blunt</h3>
                  <p>Google Inc.</p>
                  <div class="ratings">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                  </div>
              </div>
          </div>
      </div>
      

  </div>
    </section>
    Testimonial area ends */}
  {/* Client area starts 
    <section id="client" class="client-area">
  
 

      <div class="owl-client">

          <div class="item active text-center">
              <img src="assets/img/clients/1.png" alt="">
          </div>

          <div class="item active text-center">
              <img src="assets/img/clients/2.png" alt="">
          </div>

          <div class="item active text-center">
              <img src="assets/img/clients/3.png" alt="">
          </div>

          <div class="item active text-center">
              <img src="assets/img/clients/4.png" alt="">
          </div>

          <div class="item active text-center">
              <img src="assets/img/clients/1.png" alt="">
          </div>

          <div class="item active text-center">
              <img src="assets/img/clients/2.png" alt="">
          </div>

          <div class="item active text-center">
              <img src="assets/img/clients/3.png" alt="">
          </div>

          <div class="item active text-center">
              <img src="assets/img/clients/4.png" alt="">
          </div>

          <div class="item active text-center">
              <img src="assets/img/clients/3.png" alt="">
          </div>

      </div>

  
    </section>
    Client area ends */}
  {/* News area start 
    <section id="news" class="news-area section-big">
  <div class="container-fluid">
      
      <div class="row">

          <div class="col-md-4">
              <div class="news-title">
                  <h5>BLOG POSTS</h5>
                  <h2>Some News <br> From Blog</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
              </div>
          </div>

          <div class="col-md-8">
              <div class="row">
                  <div class="news-list">
                  
                      <div class="news-box">
                          <div class="news-img">
                              <img src="assets/img/news/1.png" alt="">
                          </div>
                          <span class="ti-user"></span> <strong>Mark James</strong>
                          <span class="ti-notepad"></span><strong>10 Aug, 2018</strong>
                          <h3>Renovated Appartment</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eiusmod do sed amet.</p>
                      </div>
                      <div class="news-box">
                          <div class="news-img">
                              <img src="assets/img/news/2.png" alt="">
                          </div>
                          <span class="ti-user"></span> <strong>Mark James</strong>
                          <span class="ti-notepad"></span> <strong>10 Aug, 2018</strong>
                          <h3>Renovated Appartment</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eiusmod do sed amet.</p>
                      </div>
                      <div class="news-box">
                          <div class="news-img">
                              <img src="assets/img/news/3.png" alt="">
                          </div>
                          <span class="ti-user"></span> <strong> Mark James</strong>
                          <span class="ti-notepad"></span> <strong> 10 Aug, 2018</strong>
                          <h3>Renovated Appartment</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eiusmod do sed amet.</p>
                      </div>

                      <div class="news-box">
                          <div class="news-img">
                              <img src="assets/img/news/1.png" alt="">
                          </div>
                          <span class="ti-user"></span> <strong> Mark James</strong>
                          <span class="ti-notepad"></span> <strong> 10 Aug, 2018</strong>
                          <h3>Renovated Appartment</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eiusmod do sed amet.</p>
                      </div>
                      <div class="news-box">
                          <div class="news-img">
                              <img src="assets/img/news/2.png" alt="">
                          </div>
                          <span class="ti-user"></span> <strong> Mark James</strong>
                          <span class="ti-notepad"></span> <strong> 10 Aug, 2018</strong>
                          <h3>Renovated Appartment</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eiusmod do sed amet.</p>
                      </div>
                      <div class="news-box">
                          <div class="news-img">
                              <img src="assets/img/news/3.png" alt="">
                          </div>
                          <span class="ti-user"></span> <strong> Mark James</strong>
                          <span class="ti-notepad"></span> <strong> 10 Aug, 2018</strong>
                          <h3>Renovated Appartment</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eiusmod do sed amet.</p>
                      </div>
                      <div class="news-box">
                          <div class="news-img">
                              <img src="assets/img/news/1.png" alt="">
                          </div>
                          <span class="ti-user"></span> <strong> Mark James</strong>
                          <span class="ti-notepad"></span> <strong> 10 Aug, 2018</strong>
                          <h3>Renovated Appartment</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eiusmod do sed amet.</p>
                      </div>

                  </div>


              </div>
          </div>

      </div>
  </div>
  
    </section>
    News area end */}
  {/* Subscribe area starts */}
  <section id="subscribe" className="subscribe-area section-big">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="section-title">
            <h2>Subscribe for Our Newsletter</h2>
            <p>Get updates on our latest product releases.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <form id="mc-form" className="mc-form">
            <div className="newsletter-form">
              <input
                type="email"
                autoComplete="off"
                id="mc-email"
                placeholder="Enter email address"
                className="form-control"
                name="email"
              />
              <button className="mc-submit" type="submit">
                Subscribe
              </button>
              <p>
                We absolutely hate spam, and we know you do too. We won't spam
                you, promise.
              </p>
              <div className="clearfix" />
              {/* mailchimp-alerts Start */}
              <div className="mailchimp-alerts">
                <div className="mailchimp-submitting" />
                {/* mailchimp-submitting end */}
                <div className="mailchimp-success" />
                {/* mailchimp-success end */}
                <div className="mailchimp-error" />
                {/* mailchimp-error end */}
              </div>
              {/* mailchimp-alerts end */}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* Subscribe area ends */}
  <div className="map-contact-area">
    <div className="container">
      <div id="contact" className="contact clearfix">
        <div className="contact-title">
          <h2>Contact Us</h2>
          <p>
            Questions? Suggestions? New ideas that can improve YOUR business?
            Let us know how we can team up to solve problems.
          </p>
        </div>
        <div className="contact-info">
          <div className="contact-box">
            <span className="ti-email" />
            <h3>Email</h3>
            <p>hello@klaudsol.com</p>
          </div>
          <div className="contact-box">
            <span className="ti-comment" />
            <h3>Phone</h3>
            <p>+63 2 7618 5109</p>
          </div>
          <div className="contact-box" style={{ height: 185 }}>
            <span className="ti-home" />
            <h3>Address</h3>
            <p style={{ marginTop: 15, fontSize: "80%" }}>
              Level 10-01 One Global Place <br />
              5th Avenue &amp; 25th Street <br />
              Bonifacio Global City, Taguig, Metro Manila <br />
              Philippines
            </p>
          </div>
        </div>
        <div className="contact-form">
          <form id="ajax-contact" action="assets/mailer.php" method="post">
            <div className="form-group col-md-6">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Your name here"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Your email here"
                required
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="form-control"
                placeholder="Your subject here"
                required
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                placeholder="Enter message"
                required
                defaultValue={""}
              />
              <div className="actions">
                <input
                  type="submit"
                  defaultValue="Send Message"
                  name="submit"
                  id="submitButton"
                  className="btn"
                  title="Submit Your Message!"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Footer area starts */}
  <footer id="footer" className="footer-area section-big">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="footer-title">
            <h2>KlaudSol</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="footer-social">
            <a href="https://www.facebook.com/klaudsol/" target="_blank">
              <span className="ti-facebook" />
            </a>
            <a href="https://www.linkedin.com/company/14594185" target="_blank">
              <span className="ti-linkedin" />
            </a>
          </div>
          <p>
            Copyright © 2019 - 2022. All rights reserved to{" "}
            <a href="https://klaudsol.com">KlaudSol Philippines, Inc.</a>
            <br />
            Level 10-01 One Global Place, 5th Avenue &amp; 25th Street,
            Bonifacio Global City, Taguig, Metro Manila, Philippines
          </p>
        </div>
      </div>
    </div>
  </footer>
  {/* Footer area ends */}
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
  )
}
