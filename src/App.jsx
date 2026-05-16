import { useState } from 'react'
import './App.css'

const NAV_ITEMS = ['Home', 'About Us', 'Services', 'Contact']

const clinicHighlights = [
  {
    title: 'Hours',
    value: 'Mon-Sat 10:00 AM - 7:30 PM',
    note: 'Closed Sunday',
  },
  {
    title: 'Phone',
    value: '+91 75880 70131',
    note: 'Appointment calls',
  },
  {
    title: 'Location',
    value: 'Budhavar Peth, Solapur',
    note: 'Near Sonya Maruti',
  },
]

const homePromises = [
  'Stroke care',
  'Migraine care',
  'Neurology tests',
  'Follow-up care',
]

const doctors = [
  {
    name: 'Dr. Ashish Giridhari Bhutada',
    role: 'Consultant Neurologist',
    note: 'DM Neurology, Grant Medical College and Sir JJ Hospital, Mumbai.',
    extra: 'Focus: stroke, headache, and emergency neurology.',
    initials: 'AB',
    portrait:
      'data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 640 640%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%221%22 y2=%221%22%3E%3Cstop offset=%220%25%22 stop-color=%22%23d9f5ef%22/%3E%3Cstop offset=%22100%25%22 stop-color=%22%23eaf3ff%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22640%22 height=%22640%22 rx=%2232%22 fill=%22url(%23g)%22/%3E%3Cellipse cx=%22320%22 cy=%22390%22 rx=%22140%22 ry=%22160%22 fill=%22%230f766e%22 fill-opacity=%220.16%22/%3E%3Ccircle cx=%22320%22 cy=%22268%22 r=%2290%22 fill=%22%230f766e%22 fill-opacity=%220.18%22/%3E%3Cpath d=%22M210 500c22-66 75-104 110-104s88 38 110 104%22 fill=%22%230f766e%22 fill-opacity=%220.2%22/%3E%3Ctext x=%22320%22 y=%22582%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2252%22 font-weight=%22700%22 fill=%22%2307324e%22%3EAB%3C/text%3E%3C/svg%3E',
  },
  {
    name: 'Dr. Poonam Bhutada',
    role: 'Consulting Doctor',
    note: 'Patient-focused care and clear guidance.',
    extra: 'Focus: follow-up care, patient support, and family guidance.',
    initials: 'PB',
    portrait:
      'data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 640 640%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%221%22 y2=%221%22%3E%3Cstop offset=%220%25%22 stop-color=%22%23f0f8ff%22/%3E%3Cstop offset=%22100%25%22 stop-color=%22%23e8fbf7%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22640%22 height=%22640%22 rx=%2232%22 fill=%22url(%23g)%22/%3E%3Cellipse cx=%22320%22 cy=%22392%22 rx=%22140%22 ry=%22160%22 fill=%22%230b5d84%22 fill-opacity=%220.14%22/%3E%3Ccircle cx=%22320%22 cy=%22266%22 r=%2290%22 fill=%22%230b5d84%22 fill-opacity=%220.18%22/%3E%3Cpath d=%22M210 500c22-66 75-104 110-104s88 38 110 104%22 fill=%22%230b5d84%22 fill-opacity=%220.18%22/%3E%3Ctext x=%22320%22 y=%22582%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2252%22 font-weight=%22700%22 fill=%22%2307324e%22%3EPB%3C/text%3E%3C/svg%3E',
  },
]

const services = [
  {
    title: 'Stroke & Emergencies',
    description: 'Urgent neurological evaluation.',
  },
  {
    title: 'Migraine & Headache',
    description: 'Care for recurring headache symptoms.',
  },
  {
    title: 'Dementia & Memory',
    description: 'Assessment for memory and cognition.',
  },
  {
    title: 'Movement Disorders',
    description: 'Support for tremor and stiffness.',
  },
]

const investigationTags = ['EEG', 'NCV / EMG', 'VEP', 'BAEP']

const contactPoints = [
  {
    label: 'Address',
    value: 'Yasharang Apartment, Budhavar Peth, Solapur',
  },
  {
    label: 'Landmark',
    value: 'Near Unique Hospital',
  },
  {
    label: 'Hours',
    value: 'Mon-Sat 10:00 AM - 7:30 PM',
  },
]

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

function HomePage() {
  return (
    <section className="page home-page" aria-labelledby="home-title">
      <div className="hero-block animate-in">
        <div className="hero-glow" aria-hidden="true"></div>
        <p className="eyebrow">Neurology Care in Solapur</p>
        <h1 id="home-title">Neurology care with calm, clear guidance</h1>
        <p>
          Aaryan Neurology Clinic provides specialist consultation for common neurological
          concerns.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="tel:+917588070131">
            Book an Appointment
          </a>
          <a
            className="btn btn-outline"
            href="https://maps.google.com/?q=Ground+Floor,+Yasharang+Apartment,+near+Sonya+Maruti,+Shinde+Wada,+Budhavar+Peth,+Solapur,+Maharashtra+413007"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
        <div className="feature-tags" aria-label="Quick services">
          {homePromises.map((item) => (
            <span key={item} className="feature-tag">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="stats-grid animate-in stagger-1" aria-label="Clinic highlights">
        {clinicHighlights.map((item) => (
          <article key={item.title} className="stat-card">
            <h2>{item.title}</h2>
            <p>{item.value}</p>
            <span>{item.note}</span>
          </article>
        ))}
      </div>

      <div className="split-grid">
        <article className="panel trust-panel animate-in stagger-2 split-wide">
          <h2>Consultant Team</h2>
          <p>Dr. Ashish Giridhari Bhutada</p>
          <p>Dr. Poonam Bhutada</p>
        </article>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <section className="page about-page" aria-labelledby="about-title">
      <div className="section-head animate-in">
        <p className="eyebrow">About Us</p>
        <h1 id="about-title">Specialist Neurology Care Grounded in Experience and Reassurance</h1>
      </div>

      <div className="two-column">
        <article className="panel animate-in stagger-1">
          <h2>Our Clinic</h2>
          <p>
            We handle consultations and follow-up care for neurological concerns.
          </p>
        </article>

        <article className="panel animate-in stagger-2">
          <h2>Our Approach</h2>
          <p>
            The focus is on simple explanations and patient support.
          </p>
        </article>
      </div>

      <div className="value-grid about-doctors animate-in stagger-3">
        {doctors.map((doctor) => (
          <article key={doctor.name} className="value-card">
            <div className="doctor-photo-frame">
              <img
                className="doctor-photo"
                src={doctor.portrait}
                alt={`Illustrated portrait of ${doctor.name}`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3>{doctor.name}</h3>
            <p>{doctor.role}</p>
            <span>{doctor.note}</span>
            <span>{doctor.extra}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function ServicesPage() {
  return (
    <section className="page services-page" aria-labelledby="services-title">
      <div className="section-head animate-in">
        <p className="eyebrow">Services</p>
        <h1 id="services-title">Key neurology services</h1>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="service-tile animate-in"
            style={{ animationDelay: `${0.06 * (index + 1)}s` }}
          >
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      <div className="split-grid services-extra">
        <article className="panel animate-in stagger-2">
          <h2>Specialized Investigations</h2>
          <div className="chip-cloud">
            {investigationTags.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="panel animate-in stagger-3">
          <h2>Common Conditions Addressed</h2>
          <ul className="list-clean">
            <li>Stroke</li>
            <li>Migraine</li>
            <li>Memory concerns</li>
            <li>Movement disorders</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="page contact-page" aria-labelledby="contact-title">
      <div className="section-head animate-in">
        <p className="eyebrow">Contact & Accessibility</p>
        <h1 id="contact-title">Contact the clinic</h1>
      </div>

      <div className="contact-layout">
        <article className="panel animate-in stagger-1">
          <h2>Contact Information</h2>
          <div className="contact-stack">
            {contactPoints.map((item) => (
              <div key={item.label} className="contact-detail">
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+917588070131">
              Click to Call
            </a>
            <a
              className="btn btn-outline"
              href="https://maps.google.com/?q=Ground+Floor,+Yasharang+Apartment,+near+Sonya+Maruti,+Shinde+Wada,+Budhavar+Peth,+Solapur,+Maharashtra+413007"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Google Maps
            </a>
          </div>
        </article>

      </div>
    </section>
  )
}

function App() {
  const [activePage, setActivePage] = useState('Home')
  const currentYear = new Date().getFullYear()

  const pageView = {
    Home: <HomePage />,
    'About Us': <AboutPage />,
    Services: <ServicesPage />,
    Contact: <ContactPage />,
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
