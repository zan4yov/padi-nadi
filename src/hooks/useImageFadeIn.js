import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Fades an image in once it finishes decoding.
 *
 * Without this, lazily loaded photos snap in while their surrounding block has
 * already finished its reveal. Only images that are *not* ready yet are
 * touched, so anything served from cache renders immediately as before.
 *
 * Safety: a timeout clears the class no matter what, so a load event that
 * never fires can never leave an image invisible.
 */
function useImageFadeIn() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return undefined

    const images = [...document.querySelectorAll('main img')].filter(
      (img) => !img.complete,
    )
    const timers = []

    const settle = (img) => img.classList.remove('img-pending')

    images.forEach((img) => {
      img.classList.add('img-pending')
      img.addEventListener('load', () => settle(img), { once: true })
      img.addEventListener('error', () => settle(img), { once: true })
      timers.push(setTimeout(() => settle(img), 4000))
    })

    return () => {
      timers.forEach(clearTimeout)
      images.forEach(settle)
    }
  }, [pathname])
}

export default useImageFadeIn
