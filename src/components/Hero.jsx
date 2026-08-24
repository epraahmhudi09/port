import { motion } from 'framer-motion'
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa6'
import { HiChevronDown } from 'react-icons/hi2'
import { SITE } from '../lib/content'
import profile from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-glow" />
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-blob" style={{ animationDelay: '3s' }} />

      <div className="section-shell relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Available for new projects
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building fast, beautiful
            <br />
            <span className="gradient-text">digital experiences</span>
            <br />
            that grow your business.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            I'm <span className="font-semibold text-white">{SITE.owner}</span>, a{' '}
            <span className="font-semibold text-white">{SITE.role}</span> crafting Web
            Development, Web Design and System Development solutions using React and
            Firebase — engineered to look great and perform even better.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
              <FaArrowRight size={13} />
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <FaWhatsapp size={16} className="text-white" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
            {['React', 'Firebase', 'Web Design', 'System Development'].map((tech) => (
              <span key={tech} className="text-xs font-semibold uppercase tracking-widest text-white/35">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[380px]">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-500 via-blue-600 to-white opacity-90 blur-[2px]" />
            <div className="absolute inset-[3px] overflow-hidden rounded-[2.4rem] bg-ink">
              <img
                src={profile}
                alt={SITE.owner}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-6 bottom-9 rounded-2xl border border-white/10 bg-surface/90 px-4 py-3 text-right shadow-2xl backdrop-blur"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-white/60">Role</p>
              <p className="text-sm font-bold text-white">Fullstack Developer</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white sm:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <HiChevronDown className="animate-bounce" size={18} />
      </a>
    </section>
  )
}
