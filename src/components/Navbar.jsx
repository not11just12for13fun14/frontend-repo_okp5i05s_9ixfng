import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold text-white text-lg tracking-tight flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Flutter Dev
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#projects" className="text-blue-200 hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="text-blue-200 hover:text-white transition-colors">Skills</a>
          <a href="#about" className="text-blue-200 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-white bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded-md transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
