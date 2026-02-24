export default function HomePage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Introduction */}
      <section id="intro" className="scroll-mt-16 pt-4">
        <div className="rounded-2xl bg-white border border-gray-200 p-8 sm:p-12 lg:p-16">
          <p className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-3">
            Hello, I'm
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Your Name
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
            I design and build digital products. I focus on clear problems, thoughtful solutions, and outcomes that matter.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 active:scale-[0.98] transition-all"
            >
              View work
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 active:scale-[0.98] transition-all"
            >
              About me
            </a>
          </div>
        </div>
      </section>

      {/* About me */}
      <section id="about" className="scroll-mt-16">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
          About me
        </h2>
        <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 lg:p-10">
          <p className="text-gray-700 leading-relaxed max-w-2xl">
            I'm a [role] with [X] years of experience in [domain]. I care about [values], and I've worked with teams at [companies or types of projects] to [kind of impact].
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl">
            When I'm not [main work], I [hobby or side interest]. I'm based in [location] and always open to interesting conversations and collaborations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700 hover:underline">
              LinkedIn
            </a>
            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700 hover:underline">
              Twitter / X
            </a>
            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700 hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="scroll-mt-16">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
          Case studies
        </h2>
        <ul className="space-y-6">
          {caseStudies.map((study) => (
            <li key={study.id}>
              <a
                href={study.url}
                className="block rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 hover:border-gray-300 hover:shadow-sm transition-all group"
              >
                <span className="text-xs font-medium text-indigo-600 uppercase tracking-wider">
                  {study.client}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {study.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                  {study.summary}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 group-hover:underline">
                  Read case study →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Articles */}
      <section id="articles" className="scroll-mt-16">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
          Articles
        </h2>
        <ul className="space-y-4">
          {articles.map((article) => (
            <li key={article.id}>
              <a
                href={article.url}
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 rounded-xl bg-white border border-gray-200 p-4 sm:p-5 hover:border-gray-300 hover:bg-gray-50/50 transition-all group"
              >
                <span className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {article.title}
                </span>
                <span className="text-sm text-gray-500 shrink-0">
                  {article.date}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

const caseStudies = [
  {
    id: 1,
    client: 'Client or product',
    title: 'Project name — short outcome',
    summary: 'One or two sentences on the problem, your role, and the result. Replace with your own case study.',
    url: '#',
  },
  {
    id: 2,
    client: 'Another context',
    title: 'Another project — key result',
    summary: 'Brief description of scope, approach, and impact. Easy to scan and expand later.',
    url: '#',
  },
  {
    id: 3,
    client: 'Side project or employer',
    title: 'Third case study — what changed',
    summary: 'Keep the same structure so the section feels consistent. You can link to full write-ups or external posts.',
    url: '#',
  },
]

const articles = [
  { id: 1, title: 'Article or post title', date: 'Feb 2025', url: '#' },
  { id: 2, title: 'Another piece you wrote', date: 'Jan 2025', url: '#' },
  { id: 3, title: 'Third article or talk', date: 'Dec 2024', url: '#' },
]
