import Link from "next/link";
const FooterBlock2 = () => {
  return (
    <div className="footer-block">
      <ul>
        <li>
          <Link href="/hosting/web-app-development">Web App Development</Link>
        </li>
        <li>
          <Link href="/hosting/mobile-app-development">
            Mobile App Development
          </Link>
        </li>
        <li>
          <Link href="/hosting/qa">Software QA and Testing</Link>
        </li>
        <li>
          <Link href="/hosting/api-development">API Development</Link>
        </li>
      </ul>
    </div>
  );
};
export default FooterBlock2;
