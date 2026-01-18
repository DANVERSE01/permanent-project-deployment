import Layout from '../components/Layout'

const steps = [
  {
    title: 'Intake & Discovery',
    desc: 'Gather requirements, goals, and constraints. Set expectations and success metrics.'
  },
  {
    title: 'Moodboards & Cinematic Language',
    desc: 'Define lenses, framing, pacing, and overall mood. Build references and tone.'
  },
  {
    title: 'Technical Pipeline Design',
    desc: 'Select models, tools, specs, and AI workflows (image-to-video, generative, editing).'
  },
  {
    title: 'Production & Iteration',
    desc: 'Execute, iterate, and refine with previews and checkpoints.'
  },
  {
    title: 'Delivery & Optimization',
    desc: 'Finalize outputs, package assets, and optimize for platforms.'
  },
]

export default function Process() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl text-white font-bold">Process</h1>
        <p className="text-slate-400 mt-2">A visual workflow of how DANVERSE approaches projects.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {steps.map((s,i)=>(
            <div key={i} className="rounded-2xl border border-cyan-500/10 bg-slate-900/60 p-6">
              <div className="text-cyan-300 text-sm">Step {i+1}</div>
              <h3 className="text-white font-semibold mt-1">{s.title}</h3>
              <p className="text-slate-400 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
