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
            <Link href="/hosting">Expertise</Link>
            <ul className='sub-menu'>
              <li><Link href="/hosting/web-hosting">Web App Development</Link></li>
              <li><Link href="/hosting/reseller-hosting">Mobile App Development</Link></li>
              <li><Link href="/hosting/reseller-hosting">Software QA and Testing</Link></li>
              <li><Link href="/hosting/wordpress-hosting">API Development</Link></li>
            </ul>
          </li>
          <li className='has-children'>
            <Link href="/vps">Services</Link>
            <ul className='sub-menu'>
              <li><Link href="/vps/kvm-vps">Software Consulting Services</Link></li>
              <li><Link href="/vps/managed-vps">Product Development</Link></li>
              <li><Link href="/vps/storage-vps">Mobile App Consulting</Link></li>
              <li><Link href="/vps/storage-vps">Application Modernization</Link></li>
              <li><Link href="/vps/storage-vps">SEO</Link></li>
            </ul>
          </li>
          <li><Link href="/dedicated">Success Stories</Link></li>
          {/* <li><Link href="/email">Email</Link></li> */}
          <li><Link href="/support">Products</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <Link href="#"><a className='button view-desktop'>Login</a></Link>
      </nav>
    </div>
  )
}
export default NavMain;