import Head from "next/head";
import Header from "../../components/header/Header";
import PageHeader from "../../components/header/page-header";
import CardFeaturesHosting from "../../components/elements/card-features-hosting";
import PricingReseller from "../../components/elements/pricing-reseller";
import FaqHosting from "../../components/elements/faq/faq-hosting";
export default function SearchEngineOptimization() {
  return (
    <>
      <Head>
        <title>Search Engine Optimization | Hext</title>
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
                  Search engine optimization (SEO) is an integral part of our
                  digital marketing services portfolio. Whether it is your
                  business website or an e-commerce portal, you will benefit
                  from our experience with SEO and our passion for it. Over
                  time, the SEO marketing paradigm has evolved from simple page
                  tagging to more advanced tool-driven optimization and
                  automation. We monitor search engine trends closely and
                  continue to build on our knowledge and skills to align with
                  the changing landscape.
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
