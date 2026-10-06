import PillButton from '../../components/PillButton'
import checkSm from '../../assets/icons/check-sm.svg'
import iconDasbor from '../../assets/icons/feature-dasbor.svg'
import iconLaporan from '../../assets/icons/feature-laporan.svg'
import iconRiwayat from '../../assets/icons/feature-riwayat.svg'
import iconKomunitas from '../../assets/icons/feature-komunitas.svg'

const features = [
  {
    icon: iconDasbor,
    title: 'Dasbor',
    body: 'Interaktif dan informatif untuk pengguna.',
    chips: [
      'Ringkasan bisnis',
      'Monitor di mana saja',
      'Monitor kapan saja',
      'Praktis & mudah',
    ],
  },
  {
    icon: iconLaporan,
    title: 'Laporan Keuangan',
    body: 'Laporan keuangan dalam periode sesuai keinginan pemilik.',
    chips: [
      'Laba/Rugi otomatis',
      'Periode fleksibel',
      'Hanya 10 detik',
      'Cepat & tepat',
    ],
  },
  {
    icon: iconRiwayat,
    title: 'Riwayat Analisis & Analis AI',
    body: 'Lihat perkembangan usaha bulan ke bulan, dianalisis AI.',
    chips: [
      'Riwayat bulanan',
      'Analisis laporan',
      'Rekomendasi efisiensi',
      'Hanya 20 detik',
    ],
  },
  {
    icon: iconKomunitas,
    title: 'Komunitas & Peta',
    body: 'Interaksi antar pengguna dan peta lokasi usaha sekitar.',
    chips: [
      'Peta lokasi usaha',
      'Kerjasama UMKM',
      'Satu area',
      'Eksklusif paket Pro',
    ],
  },
]

// Figma node 79:6418 — 2x2 grid of 614.4x510.14 cards on #FAF8F3.
// The media band is a grey placeholder with two diagonal #D9D9D9 sheens.
function FeatureGrid() {
  return (
    <section className="bg-cream px-20 py-80 lg:py-130 xl:px-0">
      <div className="mx-auto w-full max-w-page">
        <div
          data-reveal
          className="flex flex-col gap-20 pt-26 lg:flex-row lg:items-end lg:justify-between"
        >
          <h2 className="text-h1-sm font-semibold text-ink lg:text-h1">
            Satu Platform untuk
            <br />
            Operasional Penggilingan
          </h2>
          <p className="text-lead-sm text-muted lg:max-w-[540px]">
            Empat area kerja utama yang saling terhubung, dari pencatatan hingga
            keputusan bisnis.
          </p>
        </div>

        <ul data-reveal-children className="grid gap-24 pt-60 lg:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="overflow-hidden rounded-card border border-line bg-white"
            >
              <div className="relative grid h-260 place-items-center bg-placeholder">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-[160deg,transparent_0%,var(--color-line)_50%,transparent_100%] opacity-60"
                />
                <span className="relative rounded-full bg-placeholder px-14 py-6 text-caption font-medium text-grey">
                  Gambar fitur: {feature.title}
                </span>
                <span className="absolute bottom-[-22.4px] left-26 grid size-60 place-items-center rounded-full bg-brand">
                  <img src={feature.icon} alt="" />
                </span>
              </div>

              <div className="px-36 pt-45 pb-36">
                <h3 className="text-feature font-semibold tracking-[-0.2976px] text-muted">
                  {feature.title}
                </h3>
                <p className="pt-8 text-feature text-muted">{feature.body}</p>

                <ul className="grid gap-10 pt-24 sm:grid-cols-2">
                  {feature.chips.map((chip) => (
                    <li
                      key={chip}
                      className="flex items-center gap-10 rounded-full bg-mint px-14 py-9 text-caption font-medium text-ink"
                    >
                      <img src={checkSm} alt="" className="shrink-0" />
                      {chip}
                    </li>
                  ))}
                </ul>

                <div className="pt-30">
                  <PillButton to="/fitur-harga" variant="outline">
                    Selengkapnya
                  </PillButton>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div data-reveal className="pt-36">
          <PillButton to="/fitur-harga" variant="outline">
            Lihat semua fitur
          </PillButton>
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
