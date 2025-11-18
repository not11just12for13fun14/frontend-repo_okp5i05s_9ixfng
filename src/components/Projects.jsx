import React from 'react'

const sampleProjects = [
  {
    title: 'MedTrack - Health Records',
    description: 'HIPAA-friendly health records app with secure auth, offline sync, and charts.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Riverpod'],
    github: '#',
    playstore: '#'
  },
  {
    title: 'Foodie - Delivery App',
    description: 'End-to-end delivery experience: browsing, cart, checkout, live order tracking.',
    tech: ['Flutter', 'Dart', 'Supabase', 'GetX'],
    github: '#',
    playstore: '#'
  },
  {
    title: 'FitBuddy - Workout Planner',
    description: 'Custom routines, progress graphs, Apple/Google Fit integration, social sharing.',
    tech: ['Flutter', 'Dart', 'SQLite', 'Bloc'],
    github: '#',
    playstore: '#'
  },
]

function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-slate-900/40 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Projects</h2>
          <a href="#contact" className="text-sm text-blue-300 hover:text-white">Need something similar?</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {sampleProjects.map((p, idx) => (
            <article key={idx} className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-5 hover:border-blue-400/30 transition-colors">
              <div className="aspect-video rounded-lg bg-white/[0.03] border border-white/10 mb-4 group-hover:border-blue-400/30 transition-colors"></div>
              <h3 className="text-white font-semibold mb-1">{p.title}</h3>
              <p className="text-blue-100/80 text-sm mb-3">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-blue-500/10 text-blue-200 border border-blue-400/20">{t}</span>
                ))}
              </div>
              <div className="flex gap-3 text-sm">
                <a href={p.github} className="text-blue-300 hover:text-white">GitHub</a>
                <a href={p.playstore} className="text-blue-300 hover:text-white">Play Store</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
