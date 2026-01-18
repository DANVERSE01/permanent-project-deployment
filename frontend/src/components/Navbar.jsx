import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Education', to: '/education' },
  { label: 'About', to: '/about' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-cyan-500/10 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-cyan-300 font-bold tracking-wide">
          DANVERSE Studio
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.label} to={link.to} className="text-slate-300 hover:text-cyan-300 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-slate-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-cyan-500/10 bg-slate-950/90">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map(link => (
              <Link key={link.label} to={link.to} className="block px-2 py-2 rounded hover:bg-slate-900 text-slate-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
