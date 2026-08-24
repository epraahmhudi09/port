import { motion } from 'framer-motion'
import { FaCircleCheck } from 'react-icons/fa6'
import { SITE, SKILLS, STATS } from '../lib/content'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-shell grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">About Me</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Turning ideas into <span className="gradient-text">production-ready</span> products
          </h2>
          <p className="mt-6 text-white/60 leading-relaxed">
            I'm {SITE.owner}, a fullstack developer focused on building web experiences
            that don't just look good — they work reliably and help businesses grow.
            I handle everything from interface design to backend architecture, using
            React and Firebase to ship fast without cutting corners.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed">
            Whether it's a marketing site, a custom system, or a full product, I care
            about the details that make software feel effortless to use.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <p className="gradient-text text-xl font-extrabold">{stat.value}</p>
                <p className="mt-1 text-[11px] font-medium text-white/45">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card p-8"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
            Skills &amp; Toolkit
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {SKILLS.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white/75"
              >
                <FaCircleCheck className="shrink-0 text-white" size={13} />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
