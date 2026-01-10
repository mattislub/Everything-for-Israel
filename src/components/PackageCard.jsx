const PackageCard = ({ title, description, highlights }) => {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button className="button button--light">Customize package</button>
    </article>
  )
}

export default PackageCard
