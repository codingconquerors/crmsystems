import Link from "next/link";
const FooterBlock3 = () => {
  return (
    <div className="footer-block">
      <ul>
        <li>
          <Link href="/vps/software-consulting-services">
            Software Consulting Services
          </Link>
        </li>
        <li>
          <Link href="/vps/product-development">Product Development</Link>
        </li>
        <li>
          <Link href="/vps/mobile-app-consulting">Mobile App Consulting</Link>
        </li>
        <li>
          <Link href="/vps/application-modernization">
            Application Modernization
          </Link>
        </li>
        <li>
          <Link href="/vps/seo">SEO</Link>
        </li>
      </ul>
    </div>
  );
};
export default FooterBlock3;
