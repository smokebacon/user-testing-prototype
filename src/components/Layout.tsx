import type { ReactNode } from 'react'
import Header from './Header'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-screen-lg mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}
