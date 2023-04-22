import Link from 'next/link'
const FrontHero = () => {
  return (
    <section className="section-front-hero">
      <div className="container">
        <div className="front-hero">
          <div className="front-hero-section front-hero-text">
            <h1>We design, develop and modernize software applications.</h1>
            <p>Engage Grow Biz to build a remote, Agile software development team to co-create or update your digital product with the latest web, mobile and cloud technologies.</p>
            <div className="flex-container">
              <Link href="/vps/kvm-vps"><a className="button button-primary">Services</a></Link>
              <Link href="/dedicated"><a className="button button-secondary">Products</a></Link>
            </div>
          </div>{/* front-hero-text */}
          <div className="front-hero-section front-hero-image">
            <img className="hero-image" src="/images/hero-image.svg" alt="hero image" />
          </div>{/* front-hero-image */}
        </div>
      </div>
    </section>
  )
}
export default FrontHero;