import PillButton from './PillButton'

// Figma 76:3664 / 76:4364 — 1248x352 green card, image + scrim, 48px inset.
// The scrim deliberately reuses the Home hero's vertical #022D1D 35%→85%
// rather than Figma's diagonal 95%→60% on these two pages, so all three
// heroes read as one family (requested).
function PageHero({ image, lead, highlight, body, cta, to, href }) {
  return (
    <section className="px-20 pt-25 pb-80 xl:px-0">
      <div className="relative mx-auto flex min-h-440 w-full max-w-page flex-col justify-center overflow-hidden rounded-card bg-brand p-30 lg:p-60">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <img
            src={image}
            fetchPriority="high"
            alt=""
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-brand-deep/35 to-brand-deep/85" />
        </div>
        <div data-reveal className="relative">
          <h1 className="text-hero2-sm font-semibold text-white lg:text-hero2">
            {lead} <span className="text-gold">{highlight}</span>
          </h1>
          <p className="max-w-[760px] pt-20 text-prose text-white">{body}</p>
          <div className="pt-41">
            <PillButton to={to} href={href} variant="gold">
              {cta}
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHero
