import 'react'
import { homePromises, clinicHighlights } from '../data'

export default function Home() {
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
          <p>Dr. Poonam Bhutada (Endocrinologist)</p>
        </article>
      </div>
    </section>
  )
}
