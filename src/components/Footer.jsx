import { FaEnvelope, FaLocationDot, FaWhatsapp } from 'react-icons/fa6'
import { NAV_LINKS, SITE } from '../lib/content'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pb-28 pt-16 sm:pb-16">
      <div className="section-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center">
              <Logo className="h-full w-full" />
            </span>
            <span className="text-lg font-bold text-white">
              Hudi<span className="text-white">.</span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            Fullstack developer building web development, web design and system
            development solutions with React and Firebase.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">
            Quick Links
          </h4>
          <div className="mt-4 flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-white/55 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">
            Get in Touch
          </h4>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-sm text-white/55 transition-colors hover:text-white"
            >
              <FaWhatsapp className="text-white" size={15} />
              {SITE.whatsappDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2.5 text-sm text-white/55 transition-colors hover:text-white"
            >
              <FaEnvelope className="text-white" size={14} />
              {SITE.email}
            </a>
            <p className="flex items-center gap-2.5 text-sm text-white/55">
              <FaLocationDot className="text-white" size={14} />
              {SITE.location}
            </p>
          </div>
        </div>
      </div>

      <div className="section-shell mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/35 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p>Built with React &amp; Firebase.</p>
      </div>
    </footer>
  )
}
