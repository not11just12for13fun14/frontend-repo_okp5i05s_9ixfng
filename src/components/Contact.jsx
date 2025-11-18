import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error(await res.text())
      const data = await res.json()
      setStatus('Message sent! I will get back to you soon.')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('There was an issue sending your message. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900/40 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Let’s work together</h2>
            <p className="text-blue-100/80">Tell me about your app idea and timeline. I usually respond within 24 hours.</p>
            <div className="mt-6 text-blue-100/80 text-sm space-y-1">
              <p>Email: you@yourdomain.com</p>
              <p>Location: Remote / Your City</p>
              <p>Time zone: Your TZ</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-blue-100/80 mb-1">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full bg-slate-800/60 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-blue-100/80 mb-1">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-slate-800/60 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-blue-100/80 mb-1">Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} required className="w-full bg-slate-800/60 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-blue-100/80 mb-1">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows="5" required className="w-full bg-slate-800/60 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors">Send</button>
              {status && <span className="text-sm text-blue-100/80">{status}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
