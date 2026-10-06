import { useState } from 'react'

// Shared accordion: 2px rules, 32px green toggle (Figma 79:6677 / 76:4154).
function FaqList({ items, className = '' }) {
  const [open, setOpen] = useState(0)

  return (
    <div data-reveal-children className={className}>
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `faq-panel-${i}`
        return (
          <div key={item.q} className="border-b-2 border-line first:border-t-2">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-20 py-30 text-left outline-offset-2 focus-visible:outline-2 focus-visible:outline-brand"
              >
                <span className="text-faq font-semibold text-ink">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`grid size-40 shrink-0 place-items-center rounded-full bg-brand text-white transition-transform duration-200 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  {/* Drawn as a shape, not a "+" glyph: font metrics sit the
                      glyph ~1.4px below the optical centre of the circle. */}
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    className="block"
                  >
                    <path
                      d="M6.5 1.5v10M1.5 6.5h10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            {/*
              The answer used to be mounted only when open, so the panel
              snapped. It now always renders and the row collapses via
              grid-template-rows 0fr -> 1fr, which animates to the content's
              real height without measuring it. Collapsed height is still
              exactly 0, so the closed state is unchanged.
            */}
            <div
              id={panelId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-30 text-prose text-muted">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FaqList
