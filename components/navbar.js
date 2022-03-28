import Link from "next/link";
export default function Navbar(){
    return(
        <>
        
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
                        src="../assets/img/logo-180x180.png"
                        alt=''
                        style={{ position: "relative", top: 5 }}/>
                </a>
                <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse">
                    
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
                  <Link href="/">
                    <a className="smooth_scroll" >
                      HOME
                    </a>
                  </Link>
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
</>
    )
}