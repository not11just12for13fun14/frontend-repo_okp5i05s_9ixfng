import React from 'react'

const skills = {
  Frameworks: ['Flutter', 'Dart', 'Riverpod', 'Bloc', 'GetX'],
  Mobile: ['Android', 'iOS', 'Play Store', 'App Store', 'CI/CD'],
  Backend: ['REST', 'GraphQL', 'Firebase', 'Supabase', 'Node'],
  Tools: ['Git', 'Figma', 'Jira', 'Docker', 'Fastlane'],
}

function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-white font-semibold mb-4">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-200 border border-blue-400/20">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
