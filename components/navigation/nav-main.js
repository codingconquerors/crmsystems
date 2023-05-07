import { useState } from 'react';
import Link from 'next/link'
const NavMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='header-menu'>
      <div className='view-mobile'>
        <div className={"mobile-menu-icon " + (menuOpen ? "active-mobile-menu-icon" : "")} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>{/* mobile-menu-icon */}
      </div>
      <nav className={"main-nav " + (menuOpen ? "active-mobile-menu" : "")}>
        <ul className='main-menu'>
          <li className='has-children'>
            <Link href="#">Expertise</Link>
            <ul className='sub-menu'>
              <li><Link href="/hosting/web-app-development">Web App Development</Link></li>
              <li><Link href="/hosting/mobile-app-development">Mobile App Development</Link></li>
              <li><Link href="/hosting/qa">Software QA and Testing</Link></li>
              <li><Link href="/hosting/api-development">API Development</Link></li>
            </ul>
          </li>
          <li className='has-children'>
            <Link href="#">Services</Link>
            <ul className='sub-menu'>
              <li><Link href="/vps/software-consulting-services">Software Consulting Services</Link></li>
              <li><Link href="/vps/product-development">Product Development</Link></li>
              <li><Link href="/vps/mobile-app-consulting">Mobile App Consulting</Link></li>
              <li><Link href="/vps/application-modernization">Application Modernization</Link></li>
              <li><Link href="/vps/seo">SEO</Link></li>
            </ul>
          </li>
          <li><Link href="#">Products</Link></li>
          <li><Link href="#">Success Stories</Link></li>
          {/* <li><Link href="/email">Email</Link></li> */}
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        {/* <Link href="#"><a className='button view-desktop'>Login</a></Link> */}
      </nav>
    </div>
  )
}
export default NavMain;