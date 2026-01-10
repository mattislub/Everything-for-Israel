import CategoryCard from './CategoryCard.jsx'

const categories = [
  {
    title: 'Clothing & Personal Gear',
    items: ['Hats, suits, white shirts', 'Shoes & Shabbos bags', 'Laundry, towels, linens'],
  },
  {
    title: 'Learning Supplies',
    items: ['Gemara, chumash, siddur', 'Notebooks & binders', 'Watch, backpack, stationery'],
  },
  {
    title: 'Dorm & Apartment',
    items: ['Kettle, power strip', 'Night lamp, hooks', 'Plasticware & cutlery'],
  },
  {
    title: 'Communication & Mobility',
    items: ['Kosher or regular SIM', 'Rav-Kav travel card', 'Israeli power adapter'],
  },
]

const CategoriesSection = () => {
  return (
    <section id="categories" className="section section--tint">
      <div className="container">
        <div className="section__title">
          <h2>Main categories</h2>
          <p>Everything in one place — curated for modest, practical needs.</p>
        </div>
        <div className="grid grid--categories">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection
