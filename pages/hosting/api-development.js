import Head from "next/head";
import Header from "../../components/header/Header";
import PageHeader from "../../components/header/page-header";
import CardFeaturesHosting from "../../components/elements/card-features-hosting";
import PricingReseller from "../../components/elements/pricing-reseller";
import FaqHosting from "../../components/elements/faq/faq-hosting";
export default function ApiDevelopment() {
  return (
    <>
      <Head>
        <title>Api Development | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Api Development" />
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
                  AKK Technologies is a top API development company leveraging
                  full tech stacks to deliver high-end products and services
                  addressing your business challenges. We provide cross-platform
                  custom API development services for various industry
                  verticals. AKK Technologies prioritizes its clients and
                  understands that every client has different deadlines,
                  budgets, and requirements. We are flexible while guaranteeing
                  world-class services. Reach out to our experts to discuss your
                  API development needs.
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
