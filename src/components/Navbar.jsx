import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/brand/logo.png'
import PillButton from './PillButton'

const links = [
  { to: '/', label: 'Home' },
  { to: '/fitur-harga', label: 'Fitur & Harga' },
  { to: '/tentang-kontak', label: 'Tentang & Kontak' },
]

// Figma renders the logo as a 112 × 49.017 window over an oversized PNG, which
// lands exactly on the artwork's right edge and shaves the dot of the "i" once
// the browser rounds sub-pixels. The PNG is pre-trimmed to its artwork instead,
// so the full mark is laid out at 112px wide with nothing to clip it.
function Logo() {
  return (
    <Link
      to="/"
      aria-label="Padi Nadi — beranda"
      className="block w-140 shrink-0 rounded-tile outline-offset-4 focus-visible:outline-2 focus-visible:outline-brand"
    >
      <img
        src={logo}
        alt="Padi Nadi"
        width="818"
        height="359"
        className="block w-full"
      />
    </Link>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-nav">
      <nav className="mx-auto flex h-100 w-full max-w-page items-center justify-between px-20 xl:px-0">
        <Logo />

        <div className="hidden items-center gap-42 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                `relative py-37 text-nav font-medium transition-colors duration-200 outline-offset-4 focus-visible:outline-2 focus-visible:outline-brand ${
                  isActive ? 'text-ink' : 'text-muted hover:text-ink'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute bottom-28 left-1/2 size-dot -translate-x-1/2 rounded-full bg-brand"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <PillButton to="/fitur-harga">Coba Gratis</PillButton>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((v) => !v)}
          className="flex size-55 items-center justify-center rounded-full text-ink transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-brand md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-white px-20 pt-10 pb-30 md:hidden"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-tile px-15 py-15 text-nav font-medium transition-colors hover:bg-cream ${
                  isActive ? 'text-brand' : 'text-muted'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <PillButton to="/fitur-harga" className="mt-15 w-full">
            Coba Gratis
          </PillButton>
        </div>
      )}
    </header>
  )
}

export default Navbar
