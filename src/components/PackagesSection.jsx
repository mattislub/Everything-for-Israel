import PackageCard from './PackageCard.jsx'

const packages = [
  {
    title: 'Yeshiva Student Package',
    description: 'Core essentials for bochurim arriving from abroad.',
    highlights: ['White shirts & hats', 'Basic learning set', 'Shabbos-ready kit'],
  },
  {
    title: 'Seminary Girl Package',
    description: 'Modest wardrobe, dorm room basics, and study supplies.',
    highlights: ['Skirt & hosiery set', 'Linens & towels', 'Stationery bundle'],
  },
  {
    title: 'First Month Package',
    description: 'Everything needed for the first four weeks in Israel.',
    highlights: ['SIM + Rav-Kav', 'Adapters & kettle', 'Starter toiletries'],
  },
  {
    title: 'Full Year Package',
    description: 'A complete plan for a full year in Israel.',
    highlights: ['Seasonal wardrobe', 'Learning library', 'Dorm & apartment tools'],
  },
  {
    title: 'Winter / Summer Boost',
    description: 'Seasonal add-ons for the Israeli climate.',
    highlights: ['Coats & layers', 'Fans & light bedding', 'Special holiday items'],
  },
]

const PackagesSection = () => {
  return (
    <section id="packages" className="section">
      <div className="container">
        <div className="packages__intro">
          <div className="section__title">
            <h2>Ready-made packages</h2>
            <p>Clear pricing, flexible lists, and delivery straight to the right address.</p>
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
        <div className="grid grid--cards">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PackagesSection
