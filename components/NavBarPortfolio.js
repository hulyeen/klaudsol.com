import Link from "next/link";
import { useState } from "react"
import styles from "../styles/Layout.module.css"


export default function NavBarPortfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  
    return (
      <>
                <ul className={isOpen === false ? 
                              styles.navmenu : styles.navmenu + ' ' + styles.active}>
                  <li className={styles.navitem}>
                    <Link href="/">
                      <a className={styles.navlink}> HOME </a>
                    </Link>
                  </li>

                  <li className={styles.navitem}>
                    <a className={styles.navlink} href="/#whatwedo">
                      WHAT WE DO
                    </a>
                  </li>

                  <li className={styles.navitem}>
                  <a className={styles.navlink} href="/#aboutus">
                      ABOUT US
                    </a>
                  </li>
                  
                  <li className={styles.navitem}>
                  <a className={styles.navlink}  href="/#work">
                      PORTFOLIO
                    </a>
                  </li>

                  <li className={styles.navitem}>
                    <a className={styles.navlink}  href="https://blog.klaudsol.com/"> READ OUR BLOG </a>
                  </li>

                  <li className={styles.navitem}>
                  <a className={styles.navlink} href="/#contact">
                      CONTACT
                    </a>
                  </li>
                </ul>
                <button className={isOpen === false ? styles.hamburger : 
                                          styles.hamburger + ' ' + styles.active}
                                          onClick={openMenu}
                                          >
                          <span className={styles.bar}></span>
                          <span className={styles.bar}></span>
                          <span className={styles.bar}></span>
                      </button>
      </>
    )
}