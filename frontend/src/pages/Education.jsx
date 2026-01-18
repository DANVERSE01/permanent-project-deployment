import Layout from '../components/Layout'

const cards = [
  { title: 'Tutorial: Cinematic Shot Breakdown', tags: ['Tutorial','Cinematic Theory'], desc: 'Placeholder description for a step-by-step breakdown.' },
  { title: 'Article: AI Prompt Engineering', tags: ['Prompt Engineering','AI Tools'], desc: 'Practical structure for prompts to achieve realism.' },
  { title: 'Free Resource Pack', tags: ['Tools & Pipelines'], desc: 'Downloadable PDFs and templates (coming soon).'},
]

export default function Education() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl text-white font-bold">Education & Resources</h1>
        <p className="text-slate-400 mt-2">Teachings, breakdowns, and useful assets.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c,i)=>(
            <div key={i} className="rounded-2xl border border-cyan-500/10 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold">{c.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {c.tags.map((t,j)=>(<span key={j} className="px-2 py-0.5 rounded-full text-xs border border-cyan-500/20 text-slate-400">{t}</span>))}
              </div>
              <p className="text-slate-400 mt-3 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
