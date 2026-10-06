import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  const { pathname, hash } = useLocation()
  const firstLoad = useRef(true)
  useScrollReveal()

  // A client-side route change keeps the old scroll offset otherwise, which
  // would drop the visitor into the middle of the next page.
  useEffect(() => {
    const wasFirstLoad = firstLoad.current
    firstLoad.current = false

    if (hash) {
      // Only reposition on a cold load: the browser looks for the target
      // before React has rendered it, so /fitur-harga#harga would land at the
      // top. An in-page anchor click is left to the browser, which scrolls it
      // smoothly via scroll-behavior on <html>.
      if (!wasFirstLoad) return
      const target = document.querySelector(hash)
      if (target) {
        // 'instant', not 'auto' — 'auto' defers to scroll-behavior on <html>,
        // which is smooth here and would animate down the whole page.
        target.scrollIntoView({ behavior: 'instant' })
        return
      }
    }

    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches
      ? 'auto'
      : 'smooth'
    window.scrollTo({ top: 0, behavior })
  }, [pathname, hash])

  return (
    <>
      {/* Keyboard users would otherwise tab the whole navbar on every page.
          Visually hidden until focused, so the layout is untouched. */}
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-20 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-26 focus:py-14 focus:text-button focus:font-medium focus:text-white"
      >
        Lewati ke konten
      </a>
      <Navbar />
      <main id="konten" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
