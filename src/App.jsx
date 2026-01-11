import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import PackagesSection from './components/PackagesSection.jsx'
import CategoriesSection from './components/CategoriesSection.jsx'
import ValueProps from './components/ValueProps.jsx'
import CustomizationSection from './components/CustomizationSection.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'
import SiteMapSection from './components/SiteMapSection.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <PackagesSection />
        <CategoriesSection />
        <ValueProps />
        <CustomizationSection />
        <TestimonialsSection />
        <SiteMapSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
