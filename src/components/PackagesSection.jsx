const PackagesSection = () => {
  return (
    <section id="packages" className="section">
      <div className="container">
        <div className="packages__layout">
          <div className="packages__content">
            <div className="section__title">
              <h2 className="packages__title">Ready-made packages</h2>
              <p className="packages__subtitle">
                Clear pricing,
                <br />
                flexible lists,
                <br />
                and delivery straight to the right address.
              </p>
            </div>
            <a className="button button--dark packages__button" href="#all-packages">
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
