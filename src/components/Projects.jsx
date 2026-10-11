import { motion } from 'framer-motion'
import { PROJECTS } from '../lib/content'
import xisaabiyeLogo from '../assets/xisaabiye-logo.svg'
import hudicrmLogo from '../assets/hudicrm-logo.svg'
import ereseller from '../assets/ereseller-logo.svg'

const LOGOS = {
  xisaabiye: xisaabiyeLogo,
  hdcrm: hudicrmLogo,
  ereseller: ereseller,
}

const ACCENTS = {
  blue: { bg: 'from-blue-500/10 via-ink to-ink', glow: 'bg-blue-500/20' },
  white: { bg: 'from-white/10 via-ink to-ink', glow: 'bg-white/15' },
  red: { bg: 'from-red-500/10 via-ink to-ink', glow: 'bg-red-500/20' },
}

function ProjectVisual({ project }) {
  if (project.key === 'xisaabiye') {
    return (
      <div className="flex h-full w-full items-center justify-center p-8">
        <div className="w-full max-w-[240px] space-y-2.5 rounded-2xl border border-white/10 bg-ink/60 p-4 shadow-inner">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white">Xisaabiye</span>
            <span className="rounded-full bg-blue-400/20 px-2 py-0.5 text-[9px] font-semibold text-blue-300">
              LIVE
            </span>
          </div>
          {[
            { label: 'Stock', value: '84%', color: 'bg-blue-400' },
            { label: 'Sales Today', value: '72%', color: 'bg-blue-300' },
            { label: 'Dayn (Loan)', value: '45%', color: 'bg-white' },
          ].map((row) => (
            <div key={row.label}>
              <div className="mb-1 flex justify-between text-[10px] text-white/50">
                <span>{row.label}</span>
                <span>{row.value}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className={`h-full rounded-full ${row.color}`} style={{ width: row.value }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (project.key === 'ereseller') {
    return (
      <div className="flex h-full w-full items-center justify-center p-8">
        <div className="w-full max-w-[240px] space-y-2.5 rounded-2xl border border-white/10 bg-ink/60 p-4 shadow-inner">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white">E-Reseller</span>
            <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-[9px] font-semibold text-red-300">
              LIVE
            </span>
          </div>
          {[
            { label: 'Payments Matched', value: '96%', color: 'bg-red-400' },
            { label: 'Bundles Delivered', value: '88%', color: 'bg-white' },
            { label: 'Auto-confirmed', value: '79%', color: 'bg-red-300' },
          ].map((row) => (
            <div key={row.label}>
              <div className="mb-1 flex justify-between text-[10px] text-white/50">
                <span>{row.label}</span>
                <span>{row.value}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className={`h-full rounded-full ${row.color}`} style={{ width: row.value }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="w-full max-w-[240px] space-y-2.5 rounded-2xl border border-white/10 bg-ink/60 p-4 shadow-inner">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white">HD CRM</span>
          <span className="rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-semibold text-white">
            LIVE
          </span>
        </div>
        {[
          { label: 'Customers', value: '92%', color: 'bg-blue-400' },
          { label: 'Follow-ups', value: '68%', color: 'bg-white' },
          { label: 'Deals Closed', value: '81%', color: 'bg-blue-300' },
        ].map((row) => (
          <div key={row.label}>
            <div className="mb-1 flex justify-between text-[10px] text-white/50">
              <span>{row.label}</span>
              <span>{row.value}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className={`h-full rounded-full ${row.color}`} style={{ width: row.value }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Selected Work</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Projects I've <span className="gradient-text">built</span>
          </h2>
          <p className="mt-4 text-white/55">
            A look at real products I've designed and developed end-to-end.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, i) => {
            const accent = ACCENTS[project.accent] ?? ACCENTS.blue
            return (
              <motion.div
                key={project.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`card group overflow-hidden md:last:odd:col-span-2 md:last:odd:w-[calc(50%-1rem)] md:last:odd:justify-self-center`}
              >
                <div
                  className={`relative h-56 overflow-hidden border-b border-white/10 bg-gradient-to-br ${accent.bg}`}
                >
                  <div
                    className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-110 ${accent.glow}`}
                  />
                  <ProjectVisual project={project} />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10">
                      <img src={LOGOS[project.key]} alt={`${project.title} logo`} className="h-full w-full" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <p className="text-xs font-medium text-white/45">{project.tagline}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/55">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
