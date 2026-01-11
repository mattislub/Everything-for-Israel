const PackagesSection = () => {
  return (
    <section id="packages" className="section">
      <div className="container">
        <div className="packages__layout">
          <div className="packages__content">
            <div className="section__title">
              <h2 className="packages__title">Ready-made packages</h2>
              <p className="packages__subtitle">
                Clear pricing, flexible lists, and delivery straight to the right address.
              </p>
            </div>
            <p className="packages__note">
              Explore a dedicated page with every bundle, including what&apos;s inside and upgrade
              options.
            </p>
            <a className="button button--dark" href="#all-packages">
              See all packages
            </a>
          </div>
          <div className="packages__media" aria-hidden="true">
            <div className="packages__blob">
              <img
                src="/suitcase-with-wheels-outdoors-new.jpg"
                alt=""
                className="packages__image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PackagesSection
