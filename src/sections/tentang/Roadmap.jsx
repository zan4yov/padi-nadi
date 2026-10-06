const milestones = [
  {
    year: '2026',
    step: '1',
    title: 'Validasi & Kesiapan Produk',
    body: 'Migrasi cloud dan alpha testing pilot pada 1–5 UMKM di Surabaya, lalu finalisasi produk berdasarkan feedback.',
  },
  {
    year: '2027',
    step: '2',
    title: 'Peluncuran & Ekspansi Regional',
    body: 'Commercial launch di Karawang (target 20 klien aktif), ekspansi ke Gerbangkertosila, dan kemitraan dengan PERPADI Jabar (target retensi >90%).',
  },
  {
    year: '2028',
    step: '3',
    title: 'Skala Nasional & Integrasi Ekosistem',
    body: 'Perluasan ke lumbung padi Jawa Barat, integrasi fintech untuk akses pendanaan mitra, dan pematangan analitik AI.',
  },
]

// Figma node 76:4408 — dark band with a 1px #3A3A3A rule behind the step dots.
function Roadmap() {
  return (
    <section className="bg-ink px-20 py-80 lg:py-130 xl:px-0">
      <div className="mx-auto w-full max-w-page">
        <h2
          data-reveal
          className="pt-26 text-center text-h1-sm font-semibold text-white lg:text-h1"
        >
          Roadmap Padi Nadi
        </h2>
        <p data-reveal className="pt-14 text-center text-lead text-dim">
          Langkah terukur menuju ekosistem penggilingan padi nasional yang
          saling terhubung.
        </p>

        <ol data-reveal className="grid gap-60 pt-60 lg:grid-cols-3">
          {milestones.map((m, i) => (
            <li key={m.year} className="text-center">
              <span className="block text-year font-bold text-gold">
                {m.year}
              </span>
              {/*
                The rule lives inside the badge row rather than being offset
                from the list, so the copy underneath can never push it down.
                Each column draws its own half and overhangs the 48px gutter,
                which makes one continuous line across the three steps.
                Outer ends stop 74.88px inside the container, per Figma.
              */}
              <div className="relative mt-20 flex h-64 items-center justify-center">
                <span
                  aria-hidden
                  className={`absolute top-1/2 right-1/2 hidden h-px -translate-y-1/2 bg-line-dark lg:block ${
                    i === 0 ? 'left-[74.88px]' : 'left-[-48px]'
                  }`}
                />
                <span
                  aria-hidden
                  className={`absolute top-1/2 left-1/2 hidden h-px -translate-y-1/2 bg-line-dark lg:block ${
                    i === milestones.length - 1
                      ? 'right-[74.88px]'
                      : 'right-[-48px]'
                  }`}
                />
                <span className="relative grid size-64 place-items-center rounded-full bg-ink">
                  <span className="grid size-52 place-items-center rounded-full bg-gold text-eyebrow font-semibold text-ink">
                    {m.step}
                  </span>
                </span>
              </div>
              <h3 className="pt-26 text-step-body font-semibold tracking-[-0.288px] text-ash">
                {m.title}
              </h3>
              <p className="pt-14 text-step-body text-dim">{m.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Roadmap
