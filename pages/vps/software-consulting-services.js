import Head from "next/head";
import Header from "../../components/header/Header";
import PageHeader from "../../components/header/page-header";
import CardFeaturesHosting from "../../components/elements/card-features-hosting";
import PricingReseller from "../../components/elements/pricing-reseller";
import FaqHosting from "../../components/elements/faq/faq-hosting";
export default function SoftwareConsultingServices() {
  return (
    <>
      <Head>
        <title>Software Consulting Services | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Software Consulting Services" />
      </header>
      <main className="main">
        <div className="container">
          {/* <section className='section'>
            <PricingReseller />
          </section> */}
          {/* <CardFeaturesHosting /> */}
          <section className="section">
            {/* <div className="section-title">
        <h2>Why Choose AKK Technologies</h2>
      </div> */}
            <div className="cards">
              <div className="card">
                {/* <img className="img-size3" src="/images/icons/ssd.svg" alt="mobile app development" /> */}
                {/* <h4 className="card-title">{item.title}</h4> */}
                <p className="card-text">
                  At AKK Technologies, we partner with you to transform your
                  business and enable you to take advantage of the host of
                  opportunities on the web. We use the latest technologies and
                  techniques to develop incredible web applications, in addition
                  to providing cloud infrastructure, SaaS, and online portals.
                </p>
              </div>
            </div>
          </section>
          {/* <section className='section'>
            <div className='section-title'><h2>Frequently Asked Questions</h2></div>
            <FaqHosting />
          </section> */}
        </div>
      </main>
    </>
  );
}
