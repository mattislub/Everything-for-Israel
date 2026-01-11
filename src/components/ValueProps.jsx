const valueProps = [
  {
    title: 'We didn’t forget anything',
    description: 'A smart checklist built by families, yeshivas, and seminaries.',
  },
  {
    title: 'Built for your community',
    description: 'Modest, calm, and purposeful shopping — no problematic imagery.',
  },
  {
    title: 'Tailored by destination',
    description: 'Match your city, institution, and length of stay in minutes.',
  },
  {
    title: 'Delivered where it matters',
    description: 'Send packages straight to dorms, apartments, or your host family.',
  },
]

const ValueProps = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section__title">
          <h2>Why families choose us</h2>
          <p>We make the move to Israel calmer, faster, and more organized.</p>
        </div>
        <div className="grid grid--values">
          {valueProps.map((item) => (
            <div key={item.title} className="value">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProps
