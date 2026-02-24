export default function HomePage() {
  return (
    <div style={{ paddingBottom: '80px' }}>

      {/* Hero */}
      <section id="intro" style={{ paddingTop: '72px', paddingBottom: '80px' }}>
        <p style={{ fontSize: '13px', color: 'var(--ink-2)', marginBottom: '20px', fontWeight: 400, letterSpacing: '0.01em' }}>
          Designer &amp; Developer
        </p>
        <h1
          className="font-display"
          style={{
            fontSize: 'clamp(36px, 6vw, 56px)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            marginBottom: '28px',
            maxWidth: '580px',
          }}
        >
          Form Follows Function.
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '20px' }}>
          Life gets in the way and the information here is not always up to date.
          I'm a designer who codes, building products that solve real problems with clarity.
        </p>
        <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.6 }}>
          Available{' '}
          <span style={{ color: 'var(--ink)' }}>20–40 hours per week.</span>
          {' '}Then,{' '}
          <a
            href="#contact"
            style={{ color: 'var(--ink)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            let's connect →
          </a>
        </p>
      </section>

      {/* Work */}
      <section id="work" style={{ paddingBottom: '72px' }}>
        <p className="section-label">Selected Work</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
          {projects.map((project) => (
            <a key={project.id} href={project.url} className="project-link">
              {/* Placeholder image block */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4 / 3',
                  backgroundColor: project.color,
                  borderRadius: '4px',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <span
                  className="font-display"
                  style={{ fontSize: '32px', color: 'rgba(0,0,0,0.15)', fontWeight: 300, letterSpacing: '-0.02em' }}
                >
                  {project.initials}
                </span>
              </div>
              <p style={{ fontSize: '11px', color: 'var(--ink-2)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '5px', fontWeight: 500 }}>
                {project.tags.join(', ')}
              </p>
              <h3
                className="project-title"
                style={{ fontSize: '15px', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.3 }}
              >
                {project.title}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section id="writing" style={{ paddingBottom: '72px' }}>
        <p className="section-label">Writing</p>
        <div>
          {articles.map((article) => (
            <a key={article.id} href={article.url} className="article-row">
              <span className="article-title" style={{ fontSize: '14px', fontWeight: 400, color: 'var(--ink)' }}>
                {article.title}
              </span>
              <span style={{ fontSize: '13px', color: 'var(--ink-2)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                {article.date}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ paddingBottom: '72px' }}>
        <p className="section-label">About</p>
        <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--ink-2)', maxWidth: '520px', marginBottom: '16px' }}>
          I'm a [role] based in [location] with [X] years of experience in [domain].
          I care about clarity, function, and the invisible work that makes things feel obvious.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--ink-2)', maxWidth: '520px' }}>
          Previously at [company]. Currently working with teams on [type of work].
          When I'm not designing, I [hobby or interest].
        </p>
      </section>

      {/* Contact */}
      <section id="contact">
        <p className="section-label">Inquiry</p>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 400, color: 'var(--ink)', marginBottom: '16px', letterSpacing: '-0.02em' }}
        >
          Let's work together.
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '24px', maxWidth: '400px' }}>
          I take on a limited number of projects each year. If you have something interesting in mind, reach out.
        </p>
        <a
          href="mailto:hello@yourname.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--ink)',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
          }}
        >
          hello@yourname.com →
        </a>
      </section>

    </div>
  )
}

const projects = [
  {
    id: 1,
    title: 'Project Name — short outcome',
    tags: ['product design', 'web dev'],
    color: '#D5CFC5',
    initials: 'PN',
    url: '#',
  },
  {
    id: 2,
    title: 'Another Project — key result',
    tags: ['web design', 'branding'],
    color: '#C8CDD4',
    initials: 'AP',
    url: '#',
  },
  {
    id: 3,
    title: 'Third Project — what changed',
    tags: ['product design', 'research'],
    color: '#CCCFC6',
    initials: 'TP',
    url: '#',
  },
  {
    id: 4,
    title: 'Side Project — exploration',
    tags: ['side project', 'experiment'],
    color: '#D4CBCE',
    initials: 'SP',
    url: '#',
  },
]

const articles = [
  { id: 1, title: 'How I became a product designer', date: 'Mar 2025', url: '#' },
  { id: 2, title: 'On choosing problems worth solving', date: 'Jan 2025', url: '#' },
  { id: 3, title: 'The case for restraint in design', date: 'Nov 2024', url: '#' },
  { id: 4, title: 'What I learned shipping a side project', date: 'Aug 2024', url: '#' },
  { id: 5, title: 'Design systems are not the goal', date: 'Jun 2024', url: '#' },
]
