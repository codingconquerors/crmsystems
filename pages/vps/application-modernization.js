import Head from "next/head";
import Header from "../../components/header/Header";
import PageHeader from "../../components/header/page-header";
import CardFeaturesHosting from "../../components/elements/card-features-hosting";
import PricingReseller from "../../components/elements/pricing-reseller";
import FaqHosting from "../../components/elements/faq/faq-hosting";
export default function ApplicationModernization() {
  return (
    <>
      <Head>
        <title>Application Modernization | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Application Modernization" />
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
                  By providing you with an experienced digital transformation
                  consulting team, we empower you to deal with the most
                  challenging aspects of legacy application transformation.
                  Application transformation drives you to obtain resiliency and
                  enables your enterprise to operate more effectively.
                  Cloud-native applications empower consistency and provide you
                  with confidence in delivering software.
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
