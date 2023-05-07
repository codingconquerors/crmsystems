import Head from "next/head";
import Header from "../components/header/Header";
import PageHeader from "../components/header/page-header";
export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="About Us" />
      </header>
      <main className="main">
        <div className="container">
          AKK Technologies is a world class affordable software solutions
          provider. We provider secure, reliable and fast software solutions
          with a 99.9% uptime guarantee.
        </div>
      </main>
    </>
  );
}
