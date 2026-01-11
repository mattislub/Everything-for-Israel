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

const PackagesPage = () => {
  return (
    <section id="all-packages" className="packages-page section">
      <div className="container">
        <div className="packages-page__hero">
          <div>
            <p className="eyebrow">Packages</p>
            <h1>Ready-made packages</h1>
            <p>
              Compare every bundle, see what&apos;s included, and pick the plan that fits your
              student.
            </p>
          </div>
          <div className="packages-page__actions">
            <a className="button button--ghost" href="#top">
              Back to home
            </a>
            <button className="button button--dark">Book a delivery call</button>
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

export default PackagesPage
