import Image from 'next/image'
import Link from 'next/link'
const FooterBlock1 = () => {
  return (
    <div className="footer-block">
      <div className="site-logo">
        <Image
          className="logo"
          src="/images/logo.svg"
          width={187}
          height={80}
          alt="hext"
        />
      </div>
      <p>
        AKK Technologies is a world class affordable software solutions
        provider. We provider secure, reliable and fast software solutions with
        a 99.9% uptime guarantee. <Link href="/about">Read more about Us</Link>
      </p>
    </div>
  );
}
export default FooterBlock1;