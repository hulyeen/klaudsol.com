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
                    <Link href="/#whatwedo">
                      <a >
                        WHAT WE DO
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/#aboutus">
                      <a>
                        ABOUT US
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/#work">
                      <a>
                        PORTFOLIO
                      </a>
                    </Link>
                  </li>

                  <li>
                    <a href="https://blog.klaudsol.com/">READ OUR BLOG</a>
                  </li>

                  <li>
                    <Link href="/#contact">
                      <a>
                        CONTACT
                      </a>
                    </Link>
                  </li>
                </ul>
      </>
    )
}