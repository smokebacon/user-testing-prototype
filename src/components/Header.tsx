export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <span className="text-base font-semibold text-gray-900 tracking-tight">
            User Testing
          </span>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">Tasks</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Feedback</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
