export default function Header() {
  const links = [
    { label: 'Work', href: '#work' },
    { label: 'Writing', href: '#writing' },
    { label: 'Books', href: '#books' },
    { label: 'Inquiry', href: '#contact' },
  ]

  return (
    <header
      className="sticky top-0 z-20"
      style={{ backgroundColor: 'var(--bg)', borderBottom: '1px solid var(--border)' }}
    >
      <div style={{ maxWidth: '740px', margin: '0 auto', padding: '0 28px' }}>
        <div className="flex items-center justify-between" style={{ height: '50px' }}>
          <a
            href="/"
            className="font-display"
            style={{ fontSize: '15px', fontWeight: 400, color: 'var(--ink)', textDecoration: 'none' }}
          >
            Your Name
          </a>
          <nav className="flex items-center" style={{ gap: '22px' }}>
            {links.map(({ label, href }) => (
              <a key={label} href={href} className="nav-link">
                {label}
                <span className="arrow" style={{ fontSize: '12px' }}>→</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
