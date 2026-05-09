import type { Portfolio } from '@/data/portfolio'
import ScrollReveal from './ScrollReveal'

export default function ApproachSection({ approach }: { approach: Portfolio['approach'] }) {
  return (
    <section id="approach" className="section">
      <hr className="divider" style={{ marginBottom: 48 }} />
      <ScrollReveal>
        <span className="eyebrow">01 / How I Work</span>
        <h2 className="section-title" style={{ marginBottom: 12 }}>My Approach</h2>
        <p style={{ fontSize: '.95rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: 40, maxWidth: 520 }}>
          I don&apos;t just close tickets. I ask whether it&apos;s the right thing to build — then architect it to last.
        </p>
      </ScrollReveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
        {approach.map((item, i) => (
          <ScrollReveal key={i} delay={i * 60}>
            <div className="card" style={{ padding: '20px 18px', height: '100%' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: 12 }}>{item.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '.9rem', color: 'var(--white)', lineHeight: 1.35, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: '.8rem', color: 'var(--muted)', lineHeight: 1.75 }}>{item.body}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
