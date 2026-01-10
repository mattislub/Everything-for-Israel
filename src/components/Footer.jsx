const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__content">
        <div>
          <h3>Everything for Israel</h3>
          <p>Helping families prepare calmly and completely for Israel.</p>
        </div>
        <div className="footer__columns">
          <div>
            <p className="footer__title">Support</p>
            <p>info@everythingforisrael.co</p>
            <p>+972-2-000-0000</p>
          </div>
          <div>
            <p className="footer__title">Delivery</p>
            <p>Yeshiva & seminary shipping</p>
            <p>Apartment / host family drop-off</p>
          </div>
          <div>
            <p className="footer__title">Languages</p>
            <p>English • עברית • יידיש</p>
            <p>Guided support available</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
