const testimonials = [
  {
    quote: 'We landed and everything was already waiting in the dorm room.',
    name: 'Family from London',
  },
  {
    quote: 'The checklist saved us hours of research. Everything was respectful and clear.',
    name: 'Parents of a seminary student',
  },
  {
    quote: 'Simple, calm, and packed right for the city we needed.',
    name: 'Yeshiva student',
  },
]

const TestimonialsSection = () => {
  return (
    <section className="section section--tint">
      <div className="container">
        <div className="section__title">
          <h2>Families feel the difference</h2>
          <p>Trusted by communities preparing for Israel each year.</p>
        </div>
        <div className="grid grid--testimonials">
          {testimonials.map((item) => (
            <figure key={item.quote} className="testimonial">
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
