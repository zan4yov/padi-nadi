const rows = [
  {
    no: '01',
    title: 'Dasbor',
    sub: 'Interaktif dan informatif',
    body: 'Pantau kondisi usaha dari satu layar, praktis dan mudah, di mana saja dan kapan saja.',
    benefit: 'Gambaran bisnis tersaji tanpa rekap manual.',
  },
  {
    no: '02',
    title: 'Pencatatan & Stok Gabah',
    sub: 'Mini-ERP yang meningkatkan efisiensi pencatatan',
    body: 'Catat operasional harian dan kelola stok gabah dalam satu sistem agar data selalu sesuai dengan stok fisik.',
    benefit: 'Kurangi ketidaksinkronan data stok.',
  },
  {
    no: '03',
    title: 'Laporan Keuangan',
    sub: 'Laporan keuangan dalam 10 detik',
    body: 'Laporan keuangan untuk periode tertentu sesuai keinginan pemilik UMKM, termasuk laba/rugi otomatis.',
    benefit: 'Laporan cepat dan tepat, kapan pun dibutuhkan.',
  },
  {
    no: '04',
    title: 'Riwayat Analisis',
    sub: 'Perkembangan usaha bulan ke bulan',
    body: 'Akses riwayat analisis untuk melihat perkembangan dari bulan ke bulan dalam sekitar 20 detik.',
    benefit: 'Pantau tren usaha dengan mudah.',
  },
  {
    no: '05',
    title: 'Analisis AI',
    sub: 'Analisis laporan berbantuan AI',
    body: 'Analis AI menganalisis laporan keuangan dan memberi rekomendasi efisiensi operasional harian.',
    benefit: 'Keputusan berbasis data, bukan subjektif.',
  },
  {
    no: '06',
    title: 'Komunitas & Peta',
    sub: 'Terhubung dengan sesama pengguna',
    body: 'Peta lokasi usaha pengguna lain untuk membangun kerjasama UMKM di area yang sama.',
    benefit: 'Bangun koneksi kebutuhan bisnis di sekitar Anda.',
  },
]

function Media({ row }) {
  return (
    <div className="relative grid aspect-[599.76/413.62] place-items-center overflow-hidden bg-placeholder">
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-[160deg,transparent_0%,var(--color-line)_50%,transparent_100%] opacity-60"
      />
      <span className="relative rounded-full bg-placeholder px-14 py-6 text-caption font-medium text-grey">
        Gambar fitur: {row.title}
      </span>
      <span className="absolute top-20 right-25 text-metric font-bold text-line">
        {row.no}
      </span>
    </div>
  )
}

// Figma node 76:3871 — alternating 599.76 / 576.24 columns split by 2px rules.
function FeatureRows() {
  return (
    <section className="px-20 xl:px-0">
      <div className="mx-auto w-full max-w-page">
        {rows.map((row, i) => (
          <article
            key={row.no}
            data-reveal-children
            className="grid items-center gap-45 border-t-2 border-line py-80 first:border-t-0 lg:grid-cols-[599.76fr_576.24fr] lg:gap-90"
          >
            <div className={i % 2 === 1 ? 'lg:order-2' : undefined}>
              <Media row={row} />
            </div>
            <div className={i % 2 === 1 ? 'lg:order-1' : undefined}>
              <h2 className="text-feature-title-sm font-semibold text-muted lg:text-feature-title">
                {row.title}
              </h2>
              <p className="pt-20 text-feature-sub font-semibold text-muted">
                {row.sub}
              </p>
              <p className="pt-20 text-prose text-muted">{row.body}</p>
              <div className="mt-30 rounded-tile bg-mint px-32 py-20">
                <span className="block text-caption-sm text-muted">
                  Manfaat utama
                </span>
                <b className="text-prose font-bold text-ink">{row.benefit}</b>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeatureRows
