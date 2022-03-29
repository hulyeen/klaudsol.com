import Link from "next/link";
import cx from 'classnames';
export default function NavBarDefault() {
    return (
      <>
                <ul className="nav navbar-nav navbar-right">
                  <li className="active">
                    <Link href="/">
                      <a>
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
      </>
    )
}