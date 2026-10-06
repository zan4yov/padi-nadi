import { Link } from 'react-router-dom'
import logoMark from '../assets/icons/logo-mark.svg'

const explore = [
  { to: '/', label: 'Home' },
  { to: '/fitur-harga', label: 'Fitur & Harga' },
  { to: '/tentang-kontak', label: 'Tentang & Kontak' },
]

const contact = ['WhatsApp', 'Email perusahaan', 'Jawa Timur, Indonesia']

// Figma node 79:6746 — #1A1A1A band, 1248px grid, #3A3A3A rules.
function Footer() {
  return (
    <footer className="bg-ink px-20 pt-90 pb-30 xl:px-0">
      <div className="mx-auto w-full max-w-page">
        <div className="grid gap-48 lg:grid-cols-[587.65fr_333.73fr_384.37fr_auto]">
          <div>
            <Link to="/" className="flex items-center gap-20">
              <span className="grid size-48 place-items-center rounded-full bg-brand">
                <img src={logoMark} alt="" />
              </span>
              <span className="text-marquee font-bold tracking-[-0.648px] text-white">
                Padi Nadi
              </span>
            </Link>
            <p className="pt-25 text-step-body text-dim lg:max-w-[420px]">
              Mini-ERP yang membantu penggilingan padi Indonesia tumbuh lebih
              efisien, terukur, dan berkelanjutan.
            </p>
          </div>

          <nav aria-labelledby="footer-explore">
            <h2
              id="footer-explore"
              className="text-eyebrow font-semibold text-white uppercase"
            >
              Jelajahi
            </h2>
            <ul className="pt-25 text-step-body text-dim">
              {explore.map((link) => (
                <li key={link.to} className="pt-14 first:pt-0">
                  <Link
                    to={link.to}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-eyebrow font-semibold text-white uppercase">
              Hubungi
            </h2>
            <ul className="pt-25 text-step-body text-dim">
              {contact.map((item) => (
                <li key={item} className="pt-14 first:pt-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-eyebrow font-semibold text-white uppercase">
              Ikuti Kami
            </h2>
            <ul className="flex gap-7 pt-25">
              {['ig', 'fb'].map((name) => (
                <li key={name}>
                  <a
                    href="/"
                    className="grid size-[37.2px] place-items-center rounded-full bg-line-dark text-social font-semibold text-white transition-colors hover:bg-brand"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-40 flex flex-col gap-10 border-t-2 border-line-dark pt-36 text-eyebrow text-dim sm:flex-row sm:justify-between">
          <span>© 2026 Padi Nadi. Semua hak dilindungi.</span>
          <span>Dibuat untuk kemajuan penggilingan padi Indonesia.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
