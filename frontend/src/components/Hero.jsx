import { useEffect } from 'react'

export default function Hero({ onStartProject, onWatchReel }) {
  useEffect(() => {
    // Inject Spline viewer script for the web component
    const scriptId = 'spline-viewer-script'
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script')
      s.src = 'https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js'
      s.id = scriptId
      document.body.appendChild(s)
    }
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        {/* Spline cover background */}
        <spline-viewer url="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" class="w-full h-full opacity-80"></spline-viewer>
        {/* Gradient overlays for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.15),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(236,72,153,0.12),transparent_40%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <p className="text-cyan-300/90 text-sm tracking-widest uppercase mb-4">Mohamed Adel — DANVERSE</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Cinematic AI Studio Crafting Ultra-Realistic Ads & Worlds
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl">
            AI Cinematic Director and Creative Director blending film language, lens choices, and prompt engineering to deliver Hollywood-grade visuals for brands and creators.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onStartProject} className="px-6 py-3 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.25)]">
              Start a Project
            </button>
            <button onClick={onWatchReel} className="px-6 py-3 rounded-lg border border-fuchsia-400/40 text-fuchsia-200 hover:bg-fuchsia-500/10">
              Watch Showreel
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <Stat label="Cinematic Campaigns" value="10+" />
            <Stat label="AI-Driven Workflows" value="Yes" />
            <Stat label="Worldwide" value="Egypt • Global" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="bg-slate-900/70 border border-cyan-500/10 rounded-xl p-4">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-slate-400 text-sm">{label}</div>
    </div>
  )
}
