const steps = [
  {
    title: 'Tell us who is coming',
    detail: 'Boy / girl, yeshiva / seminary, city, and length of stay.',
  },
  {
    title: 'We build the cart',
    detail: 'A complete set of items with clear pricing and editable quantities.',
  },
  {
    title: 'Checkout with confidence',
    detail: 'Pay by card, bank transfer, or PayPal and schedule delivery.',
  },
]

const CustomizationSection = () => {
  return (
    <section id="custom" className="section section--accent">
      <div className="container customize">
        <div>
          <p className="eyebrow">Customization</p>
          <h2>Your personalized checklist</h2>
          <p>
            Answer a short questionnaire and receive a tailored shopping list. Add or remove items
            until it feels perfect.
          </p>
          <button className="button button--dark">Start the questionnaire</button>
        </div>
        <div className="customize__steps">
          {steps.map((step, index) => (
            <div key={step.title} className="step">
              <span className="step__index">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomizationSection
