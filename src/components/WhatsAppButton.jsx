import { FaWhatsapp } from 'react-icons/fa6'
import { SITE } from '../lib/content'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
        "Hi Hudi, I'd like to talk about a project."
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.5)] transition-transform duration-300 hover:scale-110 active:scale-95"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <FaWhatsapp size={28} className="relative" />
    </a>
  )
}
