'use client'
import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right'
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const cls = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal'
    el.classList.add(cls)
    if (delay) el.style.transitionDelay = `${delay}ms`
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [delay, direction])

  return <div ref={ref} className={className}>{children}</div>
}
