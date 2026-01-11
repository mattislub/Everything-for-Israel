const Header = () => {
  return (
    <header className="header">
      <div className="container header__content">
        <div className="brand">
          <span className="brand__logo">🧳</span>
          <div>
            <p className="brand__title">Everything for Israel</p>
            <p className="brand__subtitle">Prepared. Peaceful. Ready.</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#packages">Packages</a>
          <a href="#categories">Categories</a>
          <a href="#custom">Customization</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="languages">
          <span className="pill">English</span>
          <span className="pill pill--muted">עברית</span>
          <span className="pill pill--muted">יידיש</span>
        </div>
      </div>
    </header>
  )
}

export default Header
