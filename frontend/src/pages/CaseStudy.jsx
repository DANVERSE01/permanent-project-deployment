import Layout from '../components/Layout'
import { caseStudies } from '../data'
import { useParams, Link } from 'react-router-dom'

export default function CaseStudy() {
  const { slug } = useParams()
  const csIndex = caseStudies.findIndex(c => c.slug === slug)
  const cs = caseStudies[csIndex]

  if (!cs) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-2xl text-white">Case study not found.</h1>
          <Link to="/work" className="text-cyan-300 mt-4 inline-block">Back to Work</Link>
        </div>
      </Layout>
    )
  }

  const prev = csIndex>0 ? caseStudies[csIndex-1] : null
  const next = csIndex<caseStudies.length-1 ? caseStudies[csIndex+1] : null

  return (
    <Layout>
      <section>
        <div className="w-full aspect-[16/7] bg-black">
          <img src={cs.hero} alt={cs.title} className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl text-white font-bold">{cs.title}</h1>
              <p className="text-slate-400">{cs.client} • {cs.type} • {cs.year} {cs.duration?`• ${cs.duration}`:''}</p>
            </div>
            <Link to="/contact" className="px-4 py-2 rounded-lg bg-cyan-500/90 text-slate-900 font-semibold">Start a Project</Link>
          </div>

          <div className="mt-10 grid gap-10">
            <Section title="Project Overview"><p>{cs.overview}</p></Section>
            <Section title="Role & Services"><ul className="list-disc pl-6 space-y-1">{cs.roleServices.map((r,i)=>(<li key={i}>{r}</li>))}</ul></Section>
            <Section title="Creative Approach"><p>{cs.creativeApproach}</p></Section>
            <Section title="Process Gallery">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cs.gallery.map((g,i)=>(<img key={i} src={g} alt={`Gallery ${i+1}`} className="w-full h-full object-cover rounded-lg" />))}
              </div>
            </Section>
            <Section title="Results & Impact"><p>{cs.results}</p></Section>
            {cs.prompts && (<Section title="Behind the Scenes / Prompt Notes"><p>{cs.prompts}</p></Section>)}
          </div>

          <div className="mt-12 flex items-center justify-between">
            <div>
              {prev && (<Link to={`/case-studies/${prev.slug}`} className="text-cyan-300">← {prev.title}</Link>)}
            </div>
            <div>
              {next && (<Link to={`/case-studies/${next.slug}`} className="text-cyan-300">{next.title} →</Link>)}
            </div>
          </div>

          <div className="mt-10">
            <Link to="/contact" className="text-cyan-300">Back to Contact →</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function Section({ title, children }) {
  return (
    <div className="bg-slate-900/60 border border-cyan-500/10 rounded-2xl p-6">
      <h2 className="text-white text-xl font-semibold">{title}</h2>
      <div className="text-slate-300 mt-3 space-y-3">{children}</div>
    </div>
  )
}
