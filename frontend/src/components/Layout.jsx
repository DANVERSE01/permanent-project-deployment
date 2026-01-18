import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-16">{children}</main>
      <footer className="mt-24 border-t border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-400">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p>© {new Date().getFullYear()} DANVERSE Studio — Mohamed Adel</p>
            <p className="opacity-80">Egypt • Working Worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
