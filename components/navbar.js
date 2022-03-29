import Link from "next/link";
import NavBarDefault from '@/components/NavBarDefault';
import NavBarPortfolio from '@/components/NavBarPortfolio';

export default function Navbar({navset = 'default'}){
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
                <Link href="/">
                  <a className="navbar-brand">
                      <img
                          src="/assets/img/logo-180x180.png"
                          alt=''
                          style={{ position: "relative", top: 5 }}/>
                  </a>
                </Link>
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
                
                {navset === 'default' && (
                  <NavBarDefault /> 
                )}
                
                {navset === 'portfolio' && (
                  <NavBarPortfolio />
                )}
                

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