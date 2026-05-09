'use client'
import type { Portfolio } from '@/data/portfolio'
import ScrollReveal from './ScrollReveal'

export default function ProjectsSection({ projects }: { projects: Portfolio['projects'] }) {
  return (
    <section id="work" className="section" style={{ background: 'var(--surface)' }}>
      <hr className="divider" style={{ marginBottom: 48 }} />
      <ScrollReveal>
        <span className="eyebrow">02 / Work</span>
        <h2 className="section-title" style={{ marginBottom: 40 }}>Selected Projects</h2>
      </ScrollReveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {projects.map((proj, i) => (
          <ScrollReveal key={proj.id}>
            <div className="card" style={{ padding: '28px 24px', overflow: 'hidden' }}>
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'var(--muted)', letterSpacing: '.12em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                    {String(i + 1).padStart(2,'0')} / {proj.eyebrow}
                  </span>
                  <h3 style={{ fontWeight: 800, fontSize: 'clamp(1.4rem,3vw,2rem)', letterSpacing: '-.02em', color: 'var(--white)' }}>{proj.name}</h3>
                </div>
                <span style={{ padding: '5px 12px', borderRadius: 100, background: `${proj.color}15`, border: `1px solid ${proj.color}30`, fontSize: '.7rem', fontFamily: 'var(--font-mono)', color: proj.color, whiteSpace: 'nowrap' }}>
                  {proj.impactLabel}
                </span>
              </div>

              {/* Metrics row */}
              <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
                {proj.metrics.map(m => (
                  <div key={m.label} style={{ flex: '1 1 80px', padding: '12px 14px', background: 'var(--surface2)', borderRadius: 10, border: '1px solid var(--border)', textAlign: 'center', minWidth: 80 }}>
                    <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--amber)', lineHeight: 1 }}>{m.value}</div>
                    <div style={{ fontSize: '.6rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '.06em', marginTop: 4 }}>{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p style={{ fontSize: '.88rem', color: 'var(--white2)', lineHeight: 1.8, marginBottom: 20 }}>{proj.description}</p>

              {/* Challenge / Built */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12, marginBottom: 20 }}>
                <div style={{ padding: '14px 16px', background: 'var(--bg)', borderRadius: 10, borderLeft: `3px solid var(--blue)` }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.58rem', color: 'var(--blue)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 6 }}>Challenge</p>
                  <p style={{ fontSize: '.82rem', color: 'var(--white2)', lineHeight: 1.75 }}>{proj.challenge}</p>
                </div>
                <div style={{ padding: '14px 16px', background: 'var(--bg)', borderRadius: 10, borderLeft: `3px solid var(--amber)` }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.58rem', color: 'var(--amber)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 6 }}>What I Built</p>
                  <p style={{ fontSize: '.82rem', color: 'var(--white2)', lineHeight: 1.75 }}>{proj.built}</p>
                </div>
              </div>

              {/* Stack + link */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.65rem', color: 'var(--muted)', letterSpacing: '.04em' }}>{proj.stack}</p>
                {proj.playStoreUrl && proj.playStoreUrl !== '#' && (
                  <a href={proj.playStoreUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '.78rem', color: 'var(--blue)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                    Play Store ↗
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
