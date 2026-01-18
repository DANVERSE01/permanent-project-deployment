import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop" alt="Portrait placeholder" className="w-full h-full object-cover rounded-2xl border border-cyan-500/10" />
          </div>
          <div>
            <h1 className="text-3xl text-white font-bold">Meet DANVERSE</h1>
            <p className="text-slate-300 mt-4">Mohamed Adel is an AI Cinematic Director, Creative Director, and AI Prompt Engineer. He builds AI-powered cinematic work with precision, realism, and storytelling.</p>
            <div className="mt-6">
              <h2 className="text-white font-semibold">Ecosystem Pillars</h2>
              <ul className="mt-3 space-y-2 text-slate-300">
                <li>• DANVERSE Studio — core creative studio</li>
                <li>• InkVerse — storytelling and copy systems</li>
                <li>• FrameForge — cinematic shot and storyboard lab</li>
                <li>• AdNova — advertising & performance creatives</li>
                <li>• DANVIA — AI infrastructure / tooling layer</li>
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-white font-semibold">Timeline & Milestones</h2>
              <ul className="mt-3 space-y-2 text-slate-400 text-sm">
                <li>• 2023: Early AI experiments in image-to-video.</li>
                <li>• 2024: Launch of DANVERSE Studio with commercial campaigns.</li>
                <li>• 2025: Education & frameworks for agencies.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
