import React from 'react'

function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(1000px_400px_at_10%_-10%,rgba(59,130,246,0.35),transparent),radial-gradient(1000px_400px_at_90%_-10%,rgba(147,197,253,0.25),transparent)]" />
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium text-blue-200 bg-blue-500/10 border border-blue-400/20 rounded-full px-3 py-1 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Available for freelance projects
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Flutter Developer crafting beautiful mobile apps
            </h1>
            <p className="mt-4 text-blue-100/90 text-base leading-relaxed">
              I build high-performance iOS and Android apps with Flutter and Dart. From concept to release, I create smooth, pixel-perfect experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors">See Projects</a>
              <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-colors">Contact Me</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-blue-100/80">
              <span className="text-xs">Dart</span>
              <span className="text-xs">Flutter</span>
              <span className="text-xs">Firebase</span>
              <span className="text-xs">REST APIs</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-400/20 border border-white/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="/flutter-logo.svg" alt="Flutter" className="w-40 h-40 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
