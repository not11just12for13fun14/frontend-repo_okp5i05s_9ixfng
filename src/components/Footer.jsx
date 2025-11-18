import React from 'react'

function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} Your Name — Flutter Developer</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-blue-300 hover:text-white">GitHub</a>
          <a href="#" className="text-blue-300 hover:text-white">LinkedIn</a>
          <a href="#" className="text-blue-300 hover:text-white">Twitter</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
