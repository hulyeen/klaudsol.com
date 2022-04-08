import styles from "../styles/Layout.module.css"
import NavBarDefault from '@/components/NavBarDefault';
import NavBarPortfolio from '@/components/NavBarPortfolio';
import Link from "next/link";

export default function Navbar({navset = 'default'}){
  return(
   <>
         <header className="menu-area navbar-fixed-top">
            <div className="container">
              <div className="row"> 
                <div className="col-md-12">
                  <div className="mainmenu">
                        <nav className={styles.navbar}>
                        <Link href = "/">
                          <a className="navbar-brand">
                          <img
                          src="/assets/img/logo-180x180.png"
                          alt=''
                          style={{ position: "relative", top: 5 }}/>
                          </a>
                        </Link>
                          {navset === 'default' && (
                            <NavBarDefault /> 
                          )}
                          
                          {navset === 'portfolio' && (
                            <NavBarPortfolio />
                          )}
                        
                      </nav>
                
                  </div> {/** mainmenu close*/}
                </div> {/** col-md-12 close*/}
                  
            </div> {/** row close*/}
           </div> {/** container close */}
       </header>
    
   </>
  ) 
}