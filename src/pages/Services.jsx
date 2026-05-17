import 'react'
import { services, investigationTags } from '../data'

export default function Services() {
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
