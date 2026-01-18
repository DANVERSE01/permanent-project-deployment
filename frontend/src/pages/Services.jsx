import Layout from '../components/Layout'
import { services } from '../data'

export default function Services() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl text-white font-bold">Services & Packages</h1>
        <p className="text-slate-400 mt-2">Clear offerings with request buttons that pre-select the package in contact.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
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
      </section>
    </Layout>
  )
}
