import { Link } from 'react-router-dom'
import arrowOnGreen from '../assets/icons/arrow-circle-white.svg'
import arrowOnLight from '../assets/icons/arrow-circle-green.svg'
import arrowOnGold from '../assets/icons/arrow-circle-ink.svg'

// Figma "Link" pill: 48px min height, 20.8/9.6px side padding, 32px arrow disc.
const variants = {
  primary: {
    className: 'border-transparent bg-brand text-white hover:bg-brand/90',
    icon: arrowOnGreen,
  },
  light: {
    className: 'border-transparent bg-white text-brand hover:bg-cream',
    icon: arrowOnLight,
  },
  outline: {
    className: 'border-brand bg-transparent text-brand hover:bg-brand/5',
    icon: arrowOnLight,
  },
  gold: {
    className: 'border-transparent bg-gold text-ink hover:bg-gold/90',
    icon: arrowOnGold,
  },
}

function PillButton({
  to,
  href,
  variant = 'primary',
  className = '',
  children,
}) {
  const { className: variantClass, icon } = variants[variant]
  const classes = `group inline-flex min-h-60 shrink-0 items-center justify-center gap-17 rounded-full border py-11 pr-12 pl-26 text-button font-medium whitespace-nowrap transition-colors duration-200 outline-offset-2 focus-visible:outline-2 focus-visible:outline-gold active:scale-98 ${variantClass} ${className}`

  const content = (
    <>
      {children}
      <img
        src={icon}
        alt=""
        width="32"
        height="32"
        className="size-40 transition-transform duration-200 group-hover:translate-x-3"
      />
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }
  return (
    <Link to={to} className={classes}>
      {content}
    </Link>
  )
}

export default PillButton
