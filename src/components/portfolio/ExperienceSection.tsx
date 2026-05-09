import type { Portfolio } from '@/data/portfolio'
import ScrollReveal from './ScrollReveal'

export default function ExperienceSection({ experience, education }: { experience: Portfolio['experience'], education: Portfolio['education'] }) {
  return (
    <section id="experience" className="section" style={{ background: 'var(--surface)' }}>
      <hr className="divider" style={{ marginBottom: 48 }} />
      <ScrollReveal>
        <span className="eyebrow">04 / Journey</span>
        <h2 className="section-title" style={{ marginBottom: 40 }}>Work Experience</h2>
      </ScrollReveal>

      <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* Timeline line */}
        <div style={{ position: 'absolute', left: 15, top: 8, bottom: 8, width: 1, background: 'var(--border)' }} />

        {experience.map((exp, i) => (
          <ScrollReveal key={i} delay={i * 80}>
            <div style={{ paddingLeft: 44, paddingBottom: 40, position: 'relative' }}>
              {/* Dot */}
              <div style={{ position: 'absolute', left: 9, top: 6, width: 13, height: 13, borderRadius: '50%', background: i === 0 ? 'var(--blue)' : 'var(--surface2)', border: `2px solid ${i === 0 ? 'var(--blue)' : 'var(--border2)'}`, boxShadow: i === 0 ? '0 0 10px rgba(96,165,250,.4)' : 'none' }} />

              <div className="card" style={{ padding: '20px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--blue)', marginBottom: 2 }}>{exp.company}</p>
                    <p style={{ fontSize: '.88rem', color: 'var(--white)', fontWeight: 600 }}>{exp.role}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.65rem', color: 'var(--muted)' }}>{exp.period}</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'var(--muted)', marginTop: 2 }}>{exp.location}</p>
                  </div>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                      <span style={{ color: 'var(--blue)', fontSize: '.55rem', marginTop: '.45em', flexShrink: 0 }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}

        {/* Education */}
        <ScrollReveal>
          <div style={{ paddingLeft: 44, position: 'relative' }}>
            <div style={{ position: 'absolute', left: 9, top: 6, width: 13, height: 13, borderRadius: '50%', background: 'var(--surface2)', border: '2px solid var(--border2)' }} />
            <div className="card" style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 4 }}>Education</p>
                <p style={{ fontWeight: 700, fontSize: '.95rem', color: 'var(--white)' }}>{education.degree}</p>
                <p style={{ fontSize: '.8rem', color: 'var(--muted)' }}>{education.university}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.7rem', color: 'var(--amber)', fontWeight: 700 }}>{education.gpa}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: 'var(--muted)' }}>{education.year}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
