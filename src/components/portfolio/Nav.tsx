'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Nav({ available }: { available: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 'var(--nav-h)',
      display: 'none',
      alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px',
      background: scrolled ? 'rgba(6,6,8,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all .3s',
    }} className="desktop-nav">
      <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.72rem', color: 'var(--muted)', letterSpacing: '.1em' }}>RS</span>
        {available && (
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 100, border: '1px solid rgba(74,222,128,.25)', background: 'rgba(74,222,128,.06)', fontSize: '.62rem', color: 'var(--green)', fontFamily: 'var(--font-mono)', letterSpacing: '.08em' }}>
            <span className="anim-pulse" style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
            AVAILABLE
          </span>
        )}
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {['Work','Skills','Experience','Contact'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '.82rem', fontWeight: 500, transition: 'color .2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
            {l}
          </a>
        ))}
        <a href="mailto:shahrajansuresh@gmail.com" className="btn-primary" style={{ padding: '8px 18px', fontSize: '.78rem' }}>Hire Me</a>
      </div>
    </nav>
  )
}
