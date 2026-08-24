import { motion } from 'framer-motion'
import { HiOutlineCodeBracket, HiOutlinePaintBrush, HiOutlineServerStack } from 'react-icons/hi2'
import { SERVICES } from '../lib/content'

const ICONS = {
  'Web Development': HiOutlineCodeBracket,
  'Web Design': HiOutlinePaintBrush,
  'System Development': HiOutlineServerStack,
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">What I Offer</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Services built to move your <span className="gradient-text">business forward</span>
          </h2>
          <p className="mt-4 text-white/55">
            From idea to launch — I handle the full stack so you get a product that looks
            sharp, runs fast and scales with you.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.title]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card group relative overflow-hidden p-8"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-white/15" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-white/10 text-blue-200 ring-1 ring-white/10">
                  <Icon size={24} />
                </div>

                <h3 className="relative mt-6 text-xl font-bold text-white">{service.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
