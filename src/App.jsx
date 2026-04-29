import { useState } from 'react'
import './App.css'

const NAV_ITEMS = ['Home', 'About Us', 'Services', 'Contact/Location']

const quickHighlights = [
  {
    title: 'Open Daily',
    value: '7:00 AM - 12:00 AM',
    note: 'Monday to Sunday',
  },
  {
    title: 'Phone Support',
    value: '+91 77951 97139',
    note: 'Fast response for medicine availability',
  },
  {
    title: 'Trusted Area',
    value: 'Shivaganga Nagar',
    note: 'Serving nearby Solapur neighborhoods',
  },
]

const homeFeatures = [
  'Prescription medicine fulfillment',
  'Chronic care refill continuity',
  'Health and wellness essentials',
  'Late-night medicine support',
  'Offline store not online!',
]

const values = [
  {
    title: 'Clarity First',
    text: 'Simple and patient-friendly guidance for medicine timing, dosage, and continuity.',
  },
  {
    title: 'Continuity of Care',
    text: 'Support for long-term treatment plans, including diabetes and thyroid routines.',
  },
  {
    title: 'Local Reliability',
    text: 'Dependable neighborhood service with consistent medicine access till midnight.',
  },
]

const services = [
  {
    title: 'Prescription Fulfillment',
    description: 'Accurate dispensing for prescribed medicines with practical usage guidance.',
  },
  {
    title: 'Diabetes Medicine Support',
    description: 'Ongoing support for glucose management-related medicine requirements.',
  },
  {
    title: 'Thyroid & BP Care Supplies',
    description: 'Reliable support for thyroid and hypertension treatment medications.',
  },
  {
    title: 'General Family Wellness',
    description: 'Daily healthcare essentials including hygiene, OTC, and recovery products.',
  },
  {
    title: 'Refill and Repeat Support',
    description: 'Monthly refill continuity for patients on long-term medication plans.',
  },
  {
    title: 'Late-Hour Access',
    description: 'Extended store availability for urgent evening and night medicine needs.',
  },
]

const processSteps = [
  {
    title: 'Share Prescription',
    desc: 'Visit the store or call to verify medicine availability and alternatives.',
  },
  {
    title: 'Pharmacist Review',
    desc: 'Medicine details and quantities are checked for safe, correct dispensing.',
  },
  {
    title: 'Quick Collection',
    desc: 'Collect medicines with usage guidance and refill support for continuity.',
  },
]

const faqs = [
  {
    q: 'Are you open on Sundays?',
    a: 'Yes. The store operates every day from 7:00 AM to 12:00 AM.',
  },
  {
    q: 'Do you support chronic condition medicines?',
    a: 'Yes. We support regular medicine requirements for diabetes, thyroid, and hypertension.',
  },
  {
    q: 'How can I reach your location quickly?',
    a: 'Use the Google Maps link on this page for direct turn-by-turn navigation.',
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
            <span className="brand-title-full">Medidar Medical & General Stores</span>
            <span className="brand-title-mobile">Medidar Medical</span>
          </p>
        </div>
        <p className="brand-subtitle">Nagendra Nagar, Shivaganga Nagar, Solapur</p>
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
            onClick={() => handleNavigate(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      <a className="call-pill" href="tel:+917795197139">
        Call: +91 77951 97139
      </a>
    </header>
  )
}

function HomePage() {
  return (
    <section className="page home-page" aria-labelledby="home-title">
      <div className="hero-block animate-in">
        <div className="hero-glow" aria-hidden="true"></div>
        <p className="eyebrow">Modern Pharmacy Care in Solapur</p>
        <h1 id="home-title">Trusted Medicines, Better Guidance, and Fast Access till Midnight</h1>
        <p>
          Medidar Medical & General Stores supports families with dependable medicine access,
          chronic treatment continuity, and patient-first pharmacy guidance every day.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="tel:+917795197139">
            Call Pharmacy
          </a>
          <a
            className="btn btn-outline"
            href="https://maps.google.com/?q=Nagendra+Nagar+Shivaganga+Nagar+Solapur+413003"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>
        </div>
        <div className="feature-tags" aria-label="Quick services">
          {homeFeatures.map((item) => (
            <span key={item} className="feature-tag">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="stats-grid animate-in stagger-1" aria-label="Store highlights">
        {quickHighlights.map((item) => (
          <article key={item.title} className="stat-card">
            <h2>{item.title}</h2>
            <p>{item.value}</p>
            <span>{item.note}</span>
          </article>
        ))}
      </div>

      <div className="split-grid">
        <article className="panel premium-panel animate-in stagger-2">
          <h2>Why Local Families Prefer Medidar</h2>
          <ul className="list-clean">
            <li>Consistent stock support for routine and long-term prescriptions.</li>
            <li>Patient-friendly medicine communication and refill reminders.</li>
            <li>Smooth access during evening and late-night urgent needs.</li>
          </ul>
        </article>

        <article className="panel trust-panel animate-in stagger-3">
          <h2>Connected Healthcare Ecosystem</h2>
          <p>
            The Medidar name is associated with specialized diabetes and thyroid care support in
            Solapur, strengthening confidence for chronic care patients.
          </p>
        </article>
      </div>
    </section>
  )
}

function AboutPage() {
  const milestones = [
    'Community-first pharmacy operations in Shivaganga Nagar.',
    'Built around dependable medicine access for chronic care patients.',
    'Aligned with specialized care context including diabetes and thyroid support.',
  ]

  return (
    <section className="page about-page" aria-labelledby="about-title">
      <div className="section-head animate-in">
        <p className="eyebrow">About Us</p>
        <h1 id="about-title">Professional Pharmacy Support with a Patient-First Approach</h1>
      </div>

      <div className="two-column">
        <article className="panel animate-in stagger-1">
          <h2>Who We Serve</h2>
          <p>
            We serve daily medicine and wellness needs for individuals, families, and senior
            citizens in Solapur, with a special emphasis on long-term care continuity.
          </p>
        </article>

        <article className="panel animate-in stagger-2">
          <h2>Clinical Context</h2>
          <p>
            Medidar is known across Solapur not only for pharmacy services but also in association
            with diabetes and thyroid-focused treatment support through affiliated care pathways.
          </p>
        </article>
      </div>

      <article className="panel timeline-panel animate-in stagger-2">
        <h2>Our Care Journey</h2>
        <ol className="timeline-list">
          {milestones.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </article>

      <div className="value-grid animate-in stagger-3">
        {values.map((item) => (
          <article key={item.title} className="value-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ServicesPage() {
  const categories = ['Diabetes Care', 'Thyroid Care', 'BP & Cardiac Care', 'Wellness', 'Ortho', 'Baby Care']

  return (
    <section className="page services-page" aria-labelledby="services-title">
      <div className="section-head animate-in">
        <p className="eyebrow">Services</p>
        <h1 id="services-title">Detailed Services Designed for Daily and Long-Term Medication Needs</h1>
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
          <h2>How Service Works</h2>
          <div className="process-grid">
            {processSteps.map((item) => (
              <div key={item.title} className="process-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel animate-in stagger-3">
          <h2>Popular Product Categories</h2>
          <div className="chip-cloud">
            {categories.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

function ContactLocationPage() {
  return (
    <section className="page contact-page" aria-labelledby="contact-title">
      <div className="section-head animate-in">
        <p className="eyebrow">Contact & Location</p>
        <h1 id="contact-title">Reach Us Fast for Medicines, Refills, and Navigation</h1>
      </div>

      <div className="contact-layout">
        <article className="panel animate-in stagger-1">
          <h2>Store Address</h2>
          <p>Nagendra Nagar, Shivaganga Nagar, Solapur, Maharashtra 413003</p>

          <h2 className="sub">Phone</h2>
          <p>
            <a className="text-link" href="tel:+917795197139">
              +91 77951 97139
            </a>
          </p>

          <h2 className="sub">Operating Hours</h2>
          <p>Monday - Sunday: 7:00 AM - 12:00 AM (Midnight)</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+917795197139">
              Click to Call
            </a>
            <a
              className="btn btn-outline"
              href="https://maps.google.com/?q=Nagendra+Nagar+Shivaganga+Nagar+Solapur+413003"
              target="_blank"
              rel="noreferrer"
            >
              Open Google Maps
            </a>
          </div>
        </article>

        <article className="panel map-panel animate-in stagger-2">
          <h2>Travel Assist</h2>
          <p>
            Use the map link to navigate directly. For urgent prescriptions, call first to confirm
            availability before reaching the store.
          </p>
          <div className="map-card">
            <p>Medidar Medical & General Stores</p>
            <a
              className="text-link"
              href="https://maps.google.com/?q=Nagendra+Nagar+Shivaganga+Nagar+Solapur+413003"
              target="_blank"
              rel="noreferrer"
            >
              Tap to navigate now
            </a>
          </div>
        </article>
      </div>

      <article className="panel faq-panel animate-in stagger-3">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((item) => (
            <div key={item.q} className="faq-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </article>
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
    'Contact/Location': <ContactLocationPage />,
  }

  return (
    <div className="app-shell">
      <PageHeader activePage={activePage} onNavigate={setActivePage} />
      <main>{pageView[activePage]}</main>
      <footer className="site-footer">
        <p className="footer-copyright">
          Copyright &copy; {currentYear} Medidar Medical. All rights reserved.
        </p>
        <p className="dev-credit">
          Developed by{' '}
          <a
            className="dev-credit-link"
            href="https://dev-p-portfolio-v2.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Pradyumna Pawar
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
