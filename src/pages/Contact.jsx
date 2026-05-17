import 'react'
import { contactPoints } from '../data'

export default function Contact() {
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
                <br />
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
