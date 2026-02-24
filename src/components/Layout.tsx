import type { ReactNode } from 'react'
import Header from './Header'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg)' }}>
      <Header />
      <main className="flex-1" style={{ maxWidth: '740px', margin: '0 auto', width: '100%', padding: '0 28px' }}>
        {children}
      </main>
      <footer style={{ maxWidth: '740px', margin: '0 auto', width: '100%', padding: '48px 28px 40px', borderTop: '1px solid var(--border)' }}>
        <div className="flex items-center justify-between">
          <span className="font-display" style={{ fontSize: '14px', color: 'var(--ink-2)' }}>
            Your Name
          </span>
          <div className="flex items-center" style={{ gap: '20px' }}>
            {[
              { label: 'LinkedIn', href: '#' },
              { label: 'Twitter', href: '#' },
              { label: 'GitHub', href: '#' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{ fontSize: '13px', color: 'var(--ink-2)', textDecoration: 'none' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink-2)' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
