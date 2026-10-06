const items = [
  'Cepat Catat',
  'Akurat Stok',
  'Data-Driven',
  'Monitor Di Mana Saja',
]

// Figma node 76:3872 — 96.5px green strip split by 2px white rules.
function ValueStrip() {
  return (
    <section className="bg-brand">
      <ul
        data-reveal-children
        className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4"
      >
        {items.map((item, i) => (
          <li
            key={item}
            className={`flex h-120 items-center justify-center px-20 text-center text-prose font-extrabold text-white ${
              i > 0 ? 'lg:border-l-2 lg:border-white' : ''
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ValueStrip
