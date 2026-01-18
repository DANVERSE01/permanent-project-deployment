import Layout from '../components/Layout'
import { testimonials } from '../data'

export default function Testimonials() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl text-white font-bold">Testimonials</h1>
        <p className="text-slate-400 mt-2">Stories and results from clients and partners.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((t,i)=>(
            <div key={i} className="rounded-2xl border border-fuchsia-500/10 bg-slate-900/60 p-6">
              <p className="text-slate-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-fuchsia-200">{t.name} — {t.role}</div>
              {t.result && (<div className="text-xs text-slate-400">{t.result}</div>)}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
