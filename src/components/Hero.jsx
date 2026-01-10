const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__content">
        <div>
          <p className="eyebrow">Everything for Israel</p>
          <h1>Everything your child needs before coming to Israel</h1>
          <p className="hero__lead">
            One trusted place for families, yeshiva students, and seminary girls. Build a complete
            package in minutes — no confusion, no last-minute runs.
          </p>
          <div className="hero__actions">
            <button className="button">Choose your package</button>
            <button className="button button--ghost">Talk to a guide</button>
          </div>
          <div className="hero__badges">
            <span className="badge">✔ Smart checklist</span>
            <span className="badge">✔ Delivered to yeshiva / seminary</span>
            <span className="badge">✔ Calm, modest shopping</span>
          </div>
        </div>
        <div className="hero__card">
          <h3>Package Ready</h3>
          <p>Answer a few questions and we build the cart for you automatically.</p>
          <div className="hero__grid">
            <div>
              <p className="hero__label">Student</p>
              <p className="hero__value">Yeshiva / Seminary</p>
            </div>
            <div>
              <p className="hero__label">City</p>
              <p className="hero__value">Jerusalem • Bnei Brak</p>
            </div>
            <div>
              <p className="hero__label">Duration</p>
              <p className="hero__value">Month • Year</p>
            </div>
            <div>
              <p className="hero__label">Delivery</p>
              <p className="hero__value">Dorm / Apartment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
