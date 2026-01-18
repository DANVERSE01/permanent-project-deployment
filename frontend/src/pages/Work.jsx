import Layout from '../components/Layout'
import { projects } from '../data'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const tags = [
  'Cinematic Ads',
  'Social Media Reels',
  'Image-to-Video & AI Experiments',
  'Brand / Studio Pieces',
]

export default function Work() {
  const [filters, setFilters] = useState([])
  const filtered = useMemo(() => {
    if (filters.length === 0) return projects
    return projects.filter(p => {
      const map = {
        'Cinematic Ads': p.type.includes('Ad'),
        'Social Media Reels': p.type.includes('Social'),
        'Image-to-Video & AI Experiments': p.type.includes('AI'),
        'Brand / Studio Pieces': p.type.includes('Brand') || p.client.includes('DANVERSE'),
      }
      return filters.some(f => map[f])
    })
  }, [filters])

  const toggle = (t) => setFilters(f => f.includes(t) ? f.filter(x => x!==t) : [...f, t])

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h1 className="text-3xl text-white font-bold">Work</h1>
          <p className="text-slate-400 mt-2">Filter by category and explore cinematic projects.</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map(t => (
            <button key={t} onClick={() => toggle(t)} className={`px-3 py-1 rounded-full text-sm border ${filters.includes(t)?'bg-cyan-500/20 text-cyan-200 border-cyan-500/40':'border-cyan-500/20 text-slate-300 hover:text-cyan-200'}`}>
              {t}
            </button>
          ))}
          {filters.length>0 && (
            <button onClick={() => setFilters([])} className="px-3 py-1 rounded-full text-sm border border-slate-700 text-slate-400">Clear</button>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(p => (
            <Link key={p.slug} to={`/case-studies/${p.slug}`} className="group rounded-2xl overflow-hidden border border-cyan-500/10 bg-slate-900/60 hover:bg-slate-900 transition">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="text-xs text-cyan-300/80">{p.type} • {p.year}</div>
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-slate-400 text-sm line-clamp-2">{p.logline}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t,i)=>(<span key={i} className="px-2 py-0.5 rounded-full text-xs border border-cyan-500/20 text-slate-400">{t}</span>))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  )
}
