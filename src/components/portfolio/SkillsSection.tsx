import type { Portfolio } from '@/data/portfolio'
import ScrollReveal from './ScrollReveal'

export default function SkillsSection({ skills }: { skills: Portfolio['skills'] }) {
  return (
    <section id="skills" className="section">
      <hr className="divider" style={{ marginBottom: 48 }} />
      <ScrollReveal>
        <span className="eyebrow">03 / Stack</span>
        <h2 className="section-title" style={{ marginBottom: 40 }}>Technical Skills</h2>
      </ScrollReveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {skills.map((group, i) => (
          <ScrollReveal key={i} delay={i * 60}>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: 'var(--blue)', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
                {group.category}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.tags.map((tag, j) => (
                  <span key={j} style={{
                    padding: '7px 14px', borderRadius: 8,
                    background: tag.primary ? 'rgba(96,165,250,.08)' : 'var(--surface)',
                    border: `1px solid ${tag.primary ? 'rgba(96,165,250,.3)' : 'var(--border)'}`,
                    fontSize: '.82rem',
                    color: tag.primary ? 'var(--blue)' : 'var(--white2)',
                    fontWeight: tag.primary ? 600 : 400,
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    {tag.primary && <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block', flexShrink: 0 }} />}
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
