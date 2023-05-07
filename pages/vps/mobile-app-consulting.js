import Head from "next/head";
import Header from "../../components/header/Header";
import PageHeader from "../../components/header/page-header";
import CardFeaturesHosting from "../../components/elements/card-features-hosting";
import PricingReseller from "../../components/elements/pricing-reseller";
import FaqHosting from "../../components/elements/faq/faq-hosting";
export default function MobileApplicationsConsulting() {
  return (
    <>
      <Head>
        <title>Mobile Applications Consulting | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Mobile Applications Consulting" />
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
                  Mobile Applications Consulting is one of our core
                  competencies as we have designed and developed high-quality
                  smartphone and tablet applications for our clients for major
                  platforms such as Android and iOS. With the help of our expert
                  mobile app consulting team, we empower our clients with a
                  custom strategy that earns engagement and loyalty — and
                  sharpens their competitive edge.
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
