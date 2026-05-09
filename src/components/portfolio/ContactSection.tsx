import type { Portfolio } from '@/data/portfolio'
import ScrollReveal from './ScrollReveal'

export default function ContactSection({ data }: { data: Portfolio }) {
  const { personal } = data
  return (
    <section id="contact" className="section" style={{ background: 'var(--surface)' }}>
      <hr className="divider" style={{ marginBottom: 48 }} />
      <ScrollReveal>
        <span className="eyebrow">05 / Contact</span>
        <h2 className="section-title" style={{ marginBottom: 12 }}>
          Let&apos;s Build<br /><span className="text-blue">Something Great</span>
        </h2>
        <p style={{ fontSize: '.95rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: 32, maxWidth: 480 }}>
          Open to freelance projects, product consulting & remote contracts.<br />I respond within 24 hours.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <div className="contact-grid">
          <a href={`mailto:${personal.email}`} className="card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', color: 'inherit' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: '.62rem', fontFamily: 'var(--font-mono)', color: 'var(--muted)', letterSpacing: '.1em', textTransform: 'uppercase', minWidth: 48 }}>EMAIL</span>
              <span style={{ fontSize: '.9rem', color: 'var(--white)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{personal.email}</span>
            </span>
            <span className="text-blue">↗</span>
          </a>
          <a href={`tel:${personal.phone}`} className="card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', color: 'inherit' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: '.62rem', fontFamily: 'var(--font-mono)', color: 'var(--muted)', letterSpacing: '.1em', textTransform: 'uppercase', minWidth: 48 }}>PHONE</span>
              <span style={{ fontSize: '.9rem', color: 'var(--white)', fontWeight: 500 }}>{personal.phone}</span>
            </span>
            <span className="text-blue">↗</span>
          </a>
          {personal.linkedinUrl && (
            <a href={personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', color: 'inherit' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: '.62rem', fontFamily: 'var(--font-mono)', color: 'var(--muted)', letterSpacing: '.1em', textTransform: 'uppercase', minWidth: 48 }}>LINKEDIN</span>
                <span style={{ fontSize: '.9rem', color: 'var(--white)', fontWeight: 500 }}>{personal.linkedinUrl.replace('https://www.','').replace('https://','')}</span>
              </span>
              <span className="text-blue">↗</span>
            </a>
          )}
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href={`mailto:${personal.email}`} className="btn-primary">Send Email →</a>
          {personal.resumeUrl && (
            <a href={personal.resumeUrl} download className="btn-outline">↓ Download Resume</a>
          )}
        </div>
      </ScrollReveal>

      {/* Footer */}
      <div style={{ marginTop: 64, paddingTop: 24, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'var(--muted)', letterSpacing: '.06em' }}>Shah Rajan Sureshbhai · React Native Engineer · Ahmedabad</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'var(--muted)' }}>© {new Date().getFullYear()}</span>
      </div>
    </section>
  )
}
