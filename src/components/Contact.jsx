import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLocationDot, FaPaperPlane, FaWhatsapp } from 'react-icons/fa6'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db, isFirebaseConfigured } from '../lib/firebase'
import { SITE } from '../lib/content'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isFirebaseConfigured) {
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
        `New message from ${form.name || 'website visitor'}`
      )}&body=${encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)}`
      return
    }

    try {
      setStatus('sending')
      await addDoc(collection(db, 'messages'), {
        ...form,
        createdAt: serverTimestamp(),
      })
      setStatus('sent')
      setForm(initialForm)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Contact</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Let's build something <span className="gradient-text">great together</span>
          </h2>
          <p className="mt-4 text-white/55 leading-relaxed">
            Have a project in mind? Reach out and let's talk about how I can help bring
            it to life.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="card flex items-center gap-4 p-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                <FaWhatsapp size={20} />
              </span>
              <span>
                <span className="block text-xs font-medium text-white/45">WhatsApp</span>
                <span className="block text-sm font-semibold text-white">{SITE.whatsappDisplay}</span>
              </span>
            </a>

            <a href={`mailto:${SITE.email}`} className="card flex items-center gap-4 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-200">
                <FaEnvelope size={17} />
              </span>
              <span>
                <span className="block text-xs font-medium text-white/45">Email</span>
                <span className="block text-sm font-semibold text-white">{SITE.email}</span>
              </span>
            </a>

            <div className="card flex items-center gap-4 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                <FaLocationDot size={17} />
              </span>
              <span>
                <span className="block text-xs font-medium text-white/45">Location</span>
                <span className="block text-sm font-semibold text-white">{SITE.location}</span>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="card space-y-5 p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/45">
                Name
              </label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-blue-400/50 focus:bg-white/[0.07]"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/45">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-blue-400/50 focus:bg-white/[0.07]"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/45">
              Message
            </label>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-blue-400/50 focus:bg-white/[0.07]"
            />
          </div>

          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
            <FaPaperPlane size={13} />
          </button>

          {status === 'sent' && (
            <p className="text-center text-sm font-medium text-white">
              Message sent — I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-sm font-medium text-red-400">
              Something went wrong. Please try WhatsApp or email instead.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
