import type { Portfolio } from '@/data/portfolio'
import ScrollReveal from './ScrollReveal'

export default function ApproachSection({ approach }: { approach: Portfolio['approach'] }) {
  return (
    <section id="approach" className="section">
      <hr className="divider" style={{ marginBottom: 48 }} />

      <ScrollReveal>
        <span className="eyebrow">01 / How I Work</span>
        <h2 className="section-title" style={{ marginBottom: 12 }}>My Approach</h2>
        <p style={{ fontSize: '.92rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: 36, maxWidth: 480 }}>
          I don&apos;t just close tickets. I ask whether it&apos;s the right thing to build — then architect it to last.
        </p>
      </ScrollReveal>

      <div className="approach-grid">
        {approach.map((item, i) => (
          <ScrollReveal key={i} delay={i * 50}>
            <div style={{
              padding: '24px 20px',
              background: 'var(--bg)',
              height: '100%',
              transition: 'background .2s',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '.58rem',
                  color: 'var(--blue)', letterSpacing: '.12em',
                  background: 'rgba(96,165,250,.08)',
                  border: '1px solid rgba(96,165,250,.2)',
                  borderRadius: 4, padding: '2px 7px',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
              </div>
              <h3 style={{
                fontWeight: 700, fontSize: '.95rem',
                color: 'var(--white)', lineHeight: 1.35, marginBottom: 10,
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.8 }}>{item.body}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
