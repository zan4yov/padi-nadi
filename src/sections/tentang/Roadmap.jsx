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
        <p className="pt-14 text-center text-lead text-dim">
          Langkah terukur menuju ekosistem penggilingan padi nasional yang
          saling terhubung.
        </p>

        <ol data-reveal className="relative grid gap-48 pt-60 lg:grid-cols-3">
          <div
            aria-hidden
            className="absolute top-[185px] right-70 left-70 hidden h-px bg-line-dark lg:block"
          />
          {milestones.map((m) => (
            <li key={m.year} className="relative text-center">
              <span className="block text-year font-bold text-gold">
                {m.year}
              </span>
              <span className="mx-auto mt-20 grid size-64 place-items-center rounded-full bg-ink">
                <span className="grid size-52 place-items-center rounded-full bg-gold text-eyebrow font-semibold text-ink">
                  {m.step}
                </span>
              </span>
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
