import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SELECTOR = '[data-reveal], [data-reveal-children]'

/**
 * Fades blocks in as they enter the viewport.
 *
 * Purely additive: the resting state is `opacity: 1; transform: none`, so the
 * rendered design is identical to the static layout once an element settles.
 * The hidden start state only exists while `.reveal-ready` is on <html>, which
 * is added here — so without JS, or with reduced motion, nothing is hidden.
 */
function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches
    if (!motionOk || typeof IntersectionObserver === 'undefined')
      return undefined

    const root = document.documentElement
    root.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.04 },
    )

    const nodes = document.querySelectorAll(SELECTOR)
    nodes.forEach((node) => observer.observe(node))

    // Only disconnect here. Marking the nodes revealed on cleanup would fire
    // during StrictMode's mount/unmount/mount cycle and show everything at once.
    return () => observer.disconnect()
  }, [pathname])
}

export default useScrollReveal
