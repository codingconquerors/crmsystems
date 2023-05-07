import Head from "next/head";
import Header from "../../components/header/Header";
import PageHeader from "../../components/header/page-header";
import CardFeaturesHosting from "../../components/elements/card-features-hosting";
import PricingReseller from "../../components/elements/pricing-reseller";
import FaqHosting from "../../components/elements/faq/faq-hosting";
export default function ProductDevelopment() {
  return (
    <>
      <Head>
        <title>Product Development | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Product Development" />
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
                  We strive to produce engaging, fulfilling, and useful products
                  that leverage cutting-edge technology to help users achieve
                  their goals. We are a full-service digital product development
                  company covering the whole life cycle – from strategizing and
                  designing a digital transformation to developing, testing,
                  deploying, and supporting scalable solutions for any size of
                  business. Whether you’re a small to medium-sized brand, or an
                  established enterprise looking to revitalize your existing
                  digital presence, our team can deliver a solution that works
                  for you.
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
