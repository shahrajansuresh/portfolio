'use client'
import { useEffect, useState } from 'react'

const tabs = [
  { id: 'hero',       label: 'Home',       icon: '⌂'  },
  { id: 'work',       label: 'Work',       icon: '◈'  },
  { id: 'skills',     label: 'Skills',     icon: '◎'  },
  { id: 'experience', label: 'Journey',    icon: '◷'  },
  { id: 'contact',    label: 'Contact',    icon: '◉'  },
]

export default function MobileNav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const sections = tabs.map(t => document.getElementById(t.id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
    }, { threshold: 0.4 })
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActive(id)
  }

  return (
    <nav style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
      background: 'rgba(6,6,8,0.92)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      padding: '0 4px',
      height: 'var(--mob-nav-h)',
    }} className="md-hidden">
      {tabs.map(t => {
        const on = active === t.id
        return (
          <button key={t.id} onClick={() => scrollTo(t.id)} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: 3, border: 'none', background: 'none',
            cursor: 'pointer', padding: '8px 4px',
            color: on ? 'var(--blue)' : 'var(--muted)',
            transition: 'color .2s',
          }}>
            <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>{t.icon}</span>
            <span style={{ fontSize: '.58rem', fontFamily: 'var(--font-mono)', letterSpacing: '.06em', textTransform: 'uppercase' }}>
              {t.label}
            </span>
            {on && <span style={{ width: 18, height: 2, borderRadius: 1, background: 'var(--blue)', position: 'absolute', bottom: 6 }} />}
          </button>
        )
      })}
    </nav>
  )
}
