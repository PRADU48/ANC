import 'react'
import { doctors } from '../data'

export default function About() {
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
