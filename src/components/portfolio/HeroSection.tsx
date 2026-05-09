'use client'
import type { Portfolio } from '@/data/portfolio'
import Image from 'next/image'
import { useState } from 'react'

export default function HeroSection({ data }: { data: Portfolio }) {
  const { personal, stats } = data
  const [imgError, setImgError] = useState(false)

  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 80 }}>

      {/* Available badge */}
      {personal.available && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          <span className="anim-pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', display: 'inline-block', boxShadow: '0 0 8px var(--green)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: 'var(--green)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
            Available for freelance
          </span>
        </div>
      )}

      {/* Main grid — stacks on mobile, side by side on desktop */}
      <div className="hero-grid">

        {/* Text content */}
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'var(--muted)', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: 14 }}>
            {personal.title} · {personal.location}
          </p>

          <h1 style={{ fontWeight: 800, fontSize: 'clamp(2.4rem, 8vw, 4.8rem)', lineHeight: 1.06, letterSpacing: '-.03em', marginBottom: 20 }}>
            Mobile apps that<br />
            <span className="text-blue">work anywhere.</span>
          </h1>

          <p style={{ fontSize: '.95rem', color: 'var(--white2)', lineHeight: 1.85, marginBottom: 28, maxWidth: 500 }}>
            {personal.description}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
            <a href={`mailto:${personal.email}`} className="btn-primary">Hire Me →</a>
            <a href="#work" className="btn-outline">See My Work</a>
            {personal.resumeUrl && (
              <a href={personal.resumeUrl} download className="btn-outline">↓ Resume</a>
            )}
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
            {personal.linkedinUrl && (
              <a href={personal.linkedinUrl} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--muted)', textDecoration: 'none', fontSize: '.78rem', fontFamily: 'var(--font-mono)' }}>
                <LinkedInIcon /> LinkedIn
              </a>
            )}
            {personal.githubUrl && (
              <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--muted)', textDecoration: 'none', fontSize: '.78rem', fontFamily: 'var(--font-mono)' }}>
                <GitHubIcon /> GitHub
              </a>
            )}
          </div>
        </div>

        {/* Photo — responsive size via CSS class */}
        <div className="hero-photo">
          <div className="hero-photo-inner" style={{ overflow: 'hidden', border: '2px solid var(--border2)', background: 'var(--surface2)', position: 'relative', flexShrink: 0, borderRadius: '50%' }}>
            {!imgError ? (
              <Image
                src={personal.photo}
                alt={personal.name}
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                onError={() => setImgError(true)}
              />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg,#1e3a5f,#0c1a2e)', fontWeight: 800, fontSize: '2.5rem', color: 'var(--blue)', letterSpacing: '-.02em' }}>
                RS
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats — 2×2 on mobile, 4×1 on larger screens */}
      <div className="stats-grid" style={{ marginTop: 40 }}>
        {stats.map(s => (
          <div key={s.label} style={{ background: 'var(--surface)', padding: '16px 12px', textAlign: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', color: 'var(--amber)', lineHeight: 1, marginBottom: 5 }}>
              {s.value}
            </div>
            <div style={{ fontSize: '.6rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', letterSpacing: '.08em', textTransform: 'uppercase', lineHeight: 1.4 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tech marquee */}
      <div style={{ marginTop: 32, overflow: 'hidden', borderRadius: 8, border: '1px solid var(--border)', padding: '10px 0', background: 'var(--surface)' }}>
        <div className="anim-marquee" style={{ display: 'flex', gap: '2rem', whiteSpace: 'nowrap', width: 'max-content' }}>
          {['React Native', 'TypeScript', 'Offline-First', 'Realm DB', 'Redux', 'Firebase', 'Vision Camera', 'REST API', 'Android', 'iOS', 'MENA Enterprise', 'Sentry',
            'React Native', 'TypeScript', 'Offline-First', 'Realm DB', 'Redux', 'Firebase', 'Vision Camera', 'REST API', 'Android', 'iOS', 'MENA Enterprise', 'Sentry',
          ].map((t, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: i % 4 === 0 ? 'var(--blue)' : 'var(--muted)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
              {t} <span style={{ opacity: .25 }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}
