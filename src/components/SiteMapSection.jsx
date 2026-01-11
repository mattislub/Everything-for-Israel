const siteMap = [
  {
    title: 'Homepage',
    details: 'Clear headline, top packages, and quick guide for parents.',
  },
  {
    title: 'Packages page',
    details: 'Cards for every ready-made package with pricing and edits.',
  },
  {
    title: 'Customization flow',
    details: 'Short questionnaire builds a personalized cart automatically.',
  },
  {
    title: 'Checkout',
    details: 'Pay by card, transfer, or PayPal with delivery scheduling.',
  },
]

const SiteMapSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section__title">
          <h2>Site structure</h2>
          <p>A clear, simple journey from selection to delivery.</p>
        </div>
        <div className="grid grid--sitemap">
          {siteMap.map((item) => (
            <div key={item.title} className="sitemap">
              <h3>{item.title}</h3>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SiteMapSection
