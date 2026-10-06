import { useState } from 'react'

// Shared accordion: 2px rules, 32px green toggle (Figma 79:6677 / 76:4154).
function FaqList({ items, className = '' }) {
  const [open, setOpen] = useState(0)

  return (
    <div data-reveal-children className={className}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q} className="border-b-2 border-line first:border-t-2">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
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
            {isOpen && <p className="pb-30 text-prose text-muted">{item.a}</p>}
          </div>
        )
      })}
    </div>
  )
}

export default FaqList
