import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import PackagesSection from './components/PackagesSection.jsx'
import PackagesPage from './components/PackagesPage.jsx'
import CategoriesSection from './components/CategoriesSection.jsx'
import ValueProps from './components/ValueProps.jsx'
import CustomizationSection from './components/CustomizationSection.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'
import SiteMapSection from './components/SiteMapSection.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  const [isPackagesPage, setIsPackagesPage] = useState(
    () => window.location.hash === '#all-packages'
  )

  useEffect(() => {
    const handleHashChange = () => {
      setIsPackagesPage(window.location.hash === '#all-packages')
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <div className="app" id="top">
      <Header />
      <main>
        {isPackagesPage ? (
          <PackagesPage />
        ) : (
          <>
            <Hero />
            <PackagesSection />
            <CategoriesSection />
            <ValueProps />
            <CustomizationSection />
            <TestimonialsSection />
            <SiteMapSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
