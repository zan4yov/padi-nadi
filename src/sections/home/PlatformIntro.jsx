import padiPanen from '../../assets/home/padi-panen.jpg'
import clockIcon from '../../assets/icons/clock.svg'
import chartIcon from '../../assets/icons/chart-bars.svg'
import mobileIcon from '../../assets/icons/mobile.svg'

const stats = [
  {
    icon: clockIcon,
    value: '10 detik',
    caption: 'Laporan keuangan sesuai periode pilihan Anda',
    accent: false,
  },
  {
    icon: chartIcon,
    value: '20 detik',
    caption: 'Riwayat analisis perkembangan bulan ke bulan',
    accent: true,
  },
  {
    icon: mobileIcon,
    value: 'Kapan saja',
    caption: 'Monitor bisnis dari mana saja',
    accent: false,
  },
]

// Figma node 79:6291 — cards 645.12 / 583.68 split, 19.2px gaps, 26px radius.
function PlatformIntro() {
  return (
    <section className="px-20 py-80 lg:py-130 xl:px-0">
      <div className="mx-auto flex w-full max-w-page flex-col gap-24">
        <div
          data-reveal-children
          className="grid gap-24 lg:grid-cols-[645.12fr_583.68fr]"
        >
          <article className="flex flex-col justify-center rounded-card border border-line bg-white p-30 lg:p-60">
            <h2 className="text-h3-sm font-semibold text-muted lg:text-h3">
              Satu Aplikasi untuk Seluruh Operasional Penggilingan.
            </h2>
            <p className="pt-[14.8px] text-prose text-muted">
              Platform Mini-ERP khusus penggilingan padi: manajemen stok,
              analitik cerdas, dan komunitas untuk mengatasi inefisiensi
              pencatatan manual.
            </p>
          </article>
          <img
            src={padiPanen}
            loading="lazy"
            decoding="async"
            alt="Hamparan padi siap panen"
            className="aspect-[583.68/437.76] w-full rounded-card object-cover"
          />
        </div>

        <ul
          data-reveal-children
          className="grid gap-24 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stats.map((stat) => (
            <li
              key={stat.value}
              className={`flex flex-col rounded-card p-44 lg:min-h-[236.22px] ${
                stat.accent ? 'bg-brand' : 'border border-line bg-white'
              }`}
            >
              <span
                className={`grid size-60 place-items-center rounded-full ${
                  stat.accent ? 'bg-white' : 'bg-mint'
                }`}
              >
                <img src={stat.icon} alt="" />
              </span>
              <b
                className={`pt-27 text-metric-sm font-bold lg:text-metric ${
                  stat.accent ? 'text-white' : 'text-ink'
                }`}
              >
                {stat.value}
              </b>
              <span
                className={`pt-3 text-note ${stat.accent ? 'text-white' : 'text-muted'}`}
              >
                {stat.caption}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PlatformIntro
