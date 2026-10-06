import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  const { pathname } = useLocation()
  useScrollReveal()

  // A client-side route change keeps the old scroll offset otherwise, which
  // would drop the visitor into the middle of the next page.
  useEffect(() => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches
      ? 'auto'
      : 'smooth'
    window.scrollTo({ top: 0, behavior })
  }, [pathname])

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
