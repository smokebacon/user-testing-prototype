export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a href="#intro" className="text-base font-semibold text-gray-900 tracking-tight hover:text-gray-600 transition-colors">
            Portfolio
          </a>
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#intro" className="hover:text-gray-900 transition-colors">Introduction</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#case-studies" className="hover:text-gray-900 transition-colors">Case studies</a>
            <a href="#articles" className="hover:text-gray-900 transition-colors">Articles</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
