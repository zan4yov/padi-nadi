import PillButton from '../../components/PillButton'
import heroBg from '../../assets/home/hero-bg.jpg'
import avatar1 from '../../assets/home/avatar-1.jpg'
import avatar2 from '../../assets/home/avatar-2.jpg'
import chartIcon from '../../assets/home/hero-chart.svg'

// Figma node 79:6155
function Hero() {
  return (
    <section className="flex flex-col items-center px-20 pt-25 pb-80 xl:px-0">
      <div className="relative flex min-h-700 w-full max-w-page flex-col justify-between gap-50 overflow-hidden rounded-card p-25 md:p-50 lg:h-800 lg:min-h-800">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <img src={heroBg} alt="" className="size-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-b from-brand-deep/35 to-brand-deep/85" />
        </div>

        <div
          data-reveal
          className="relative flex flex-1 flex-col justify-center"
        >
          <div className="flex w-full max-w-hero-copy flex-col items-start">
            <h1 className="text-display-sm font-semibold text-white md:text-display lg:whitespace-nowrap">
              Kelola <span className="text-gold">Penggilingan Padi</span>
              <br />
              dalam Satu Aplikasi.
            </h1>
            <p className="max-w-hero-lead pt-26 text-lead text-white/88">
              Tinggalkan pencatatan manual. Padi Nadi mencatat setiap transaksi
              secara otomatis, rapi, dan bisa diakses kapan saja.
            </p>
            <div className="flex flex-wrap gap-14 pt-40">
              <PillButton to="/fitur-harga">Coba Gratis 1 Bulan</PillButton>
              <PillButton to="/fitur-harga" variant="light">
                Lihat Fitur
              </PillButton>
            </div>
          </div>
        </div>

        <div
          data-reveal
          className="relative flex flex-col items-start gap-20 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="flex items-center gap-18 rounded-full border border-white/20 bg-white/12 py-14 pr-20 pl-14 backdrop-blur-glass">
            <div className="flex">
              <img
                src={avatar1}
                alt="Pengguna Padi Nadi"
                className="size-avatar rounded-full border-2 border-white/60 object-cover"
              />
              <img
                src={avatar2}
                alt="Pengguna Padi Nadi"
                className="-ml-14 size-avatar rounded-full border-2 border-white/60 object-cover"
              />
            </div>
            <p className="flex flex-col gap-1">
              <b className="text-caption font-bold text-white">
                Divalidasi mitra penggilingan
              </b>
              <span className="text-caption-sm text-white/85">
                5 UMKM mitra pilot
              </span>
            </p>
          </div>

          <div className="flex items-center gap-16 rounded-tile bg-gold px-24 py-17">
            <span className="grid size-avatar place-items-center rounded-full bg-ink">
              <img src={chartIcon} alt="" width="22" height="22" />
            </span>
            <p className="flex flex-col">
              <small className="text-micro text-ink">Laporan keuangan</small>
              <b className="text-stat font-bold text-ink">10 detik</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
