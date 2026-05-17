import { useState } from 'react'
import './App.css'
import { NAV_ITEMS } from './data'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

function PageHeader({ activePage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = (item) => {
    onNavigate(item)
    setMenuOpen(false)
  }

  return (
    <header className={`site-header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="brand-wrap">
        <div className="brand-row">
          <div className="medical-logo" aria-hidden="true">
            <span className="logo-ring logo-ring-outer"></span>
            <span className="logo-ring logo-ring-inner"></span>
            <span className="logo-plus"></span>
          </div>
          <p className="brand-title">
            <span className="brand-title-full">Aaryan Neurology Clinic</span>
            <span className="brand-title-mobile">Aaryan Neurology Clinic</span>
          </p>
        </div>
        <p className="brand-subtitle">Budhavar Peth, Solapur | Consultant Neurology Care</p>
      </div>

      <button
        type="button"
        className="mobile-menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? 'Close' : 'Menu'}
      </button>

      <nav id="primary-navigation" className="main-nav" aria-label="Primary navigation">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            type="button"
            className={`nav-link ${activePage === item ? 'active' : ''}`}
            aria-current={activePage === item ? 'page' : undefined}
            onClick={() => handleNavigate(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      <a className="call-pill" href="tel:+917588070131">
        Book: +91 75880 70131
      </a>
    </header>
  )
}


function App() {
  const [activePage, setActivePage] = useState('Home')
  const currentYear = new Date().getFullYear()

  const pageView = {
    Home: <Home />,
    'About Us': <About />,
    Services: <Services />,
    Contact: <Contact />,
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <PageHeader activePage={activePage} onNavigate={setActivePage} />
      <main id="main-content">{pageView[activePage]}</main>
      <footer className="site-footer">
        <p className="footer-copyright">
          Copyright &copy; {currentYear} Aaryan Neurology Clinic. All rights reserved.
        </p>
        <p className="dev-credit">
          Developed by{' '}
          <a
            className="dev-credit-link"
            href="https://dev-p-portfolio-v2.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pradhumn Pawar
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
