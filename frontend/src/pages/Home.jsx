import { useState } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import VideoModal from '../components/VideoModal'
import { projects, services as servicesData, testimonials as testimonialsData, clientLogos } from '../data'
import { Link } from 'react-router-dom'

export default function Home() {
  const [openVideo, setOpenVideo] = useState(false)

  return (
    <Layout>
      <Hero onStartProject={() => window.location.assign('/contact')} onWatchReel={() => setOpenVideo(true)} />
      <VideoModal open={openVideo} onClose={() => setOpenVideo(false)} videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" />

      {/* Featured Showreel */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header label="Featured" title="Showreel" />
          <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-cyan-500/10 bg-slate-900">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Showreel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          <p className="mt-4 text-slate-400 max-w-3xl">A fast-cut collection of recent cinematic experiments and campaign pieces. Swap with your final reel.</p>
        </div>
      </section>

      {/* Highlighted Work Grid */}
      <section id="work" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header label="Selected" title="Highlighted Work" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map(p => (
              <Link key={p.slug} to={`/case-studies/${p.slug}`} className="group rounded-2xl overflow-hidden border border-cyan-500/10 bg-slate-900/60 hover:bg-slate-900 transition">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-cyan-300/80 mb-1">{p.type} • {p.client}</p>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="text-sm text-slate-400 mt-1 line-clamp-2">{p.logline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header label="Capabilities" title="Services Snapshot" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicesData.map(s => (
              <div key={s.id} className="rounded-2xl border border-cyan-500/10 bg-slate-900/60 p-6">
                <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-slate-400 mt-1">For: {s.for}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {s.deliverables.map((d,i) => (<li key={i}>• {d}</li>))}
                </ul>
                <a href={`/contact?package=${encodeURIComponent(s.id)}`} className="inline-block mt-6 px-4 py-2 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold">Request this package</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header label="How We Work" title="Process Overview" />
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {['Discover & Brief','Concept & Visual Language','Production & AI Pipelines','Delivery & Optimization'].map((step, i) => (
              <li key={i} className="rounded-2xl border border-cyan-500/10 bg-slate-900/60 p-6">
                <div className="text-cyan-300 text-sm">Step {i+1}</div>
                <div className="text-white font-semibold mt-2">{step}</div>
                <p className="text-slate-400 text-sm mt-2">Short description of what to expect in this step.</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header label="Trusted By" title="Clients & Partners" />
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {clientLogos.map((src, i) => (
              <img key={i} src={src} alt={`Client ${i+1}`} className="w-full object-contain opacity-80 hover:opacity-100 transition" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header label="What People Say" title="Testimonials" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonialsData.slice(0,3).map((t, i) => (
              <div key={i} className="rounded-2xl border border-fuchsia-500/10 bg-slate-900/60 p-6">
                <p className="text-slate-200">“{t.quote}”</p>
                <div className="mt-4 text-sm text-fuchsia-200">{t.name} — {t.role}</div>
                <div className="text-xs text-slate-400">{t.result}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/testimonials" className="text-cyan-300 hover:text-cyan-200">Read all testimonials →</Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-500/10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-white text-2xl font-bold">Have a wild idea? Let’s turn it into a cinematic reality.</h3>
                <p className="text-slate-400 mt-1">Tell me about your project — I’ll reply within 24–48 hours.</p>
              </div>
              <Link to="/contact" className="px-6 py-3 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function Header({ label, title }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-cyan-300/80">{label}</div>
      <h2 className="text-2xl sm:text-3xl text-white font-bold mt-1">{title}</h2>
    </div>
  )
}
