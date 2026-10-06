import PillButton from '../../components/PillButton'
import pencatatan from '../../assets/home/pencatatan-harian.jpg'
import stokGabah from '../../assets/home/stok-gabah.jpg'
import laporan from '../../assets/home/mandor-1.jpg'
import analisis from '../../assets/home/aktivitas-penggilingan.jpg'

const cards = [
  { no: '01', title: 'Pencatatan Harian', image: pencatatan },
  { no: '02', title: 'Manajemen Stok Gabah', image: stokGabah },
  { no: '03', title: 'Laporan Keuangan', image: laporan },
  { no: '04', title: 'Analisis AI', image: analisis },
]

// Figma node 79:6586 — dark band, 300x288 cards with a #022D1D 15%→90% scrim.
function FromRecords() {
  return (
    <section className="bg-ink px-20 py-80 lg:py-130 xl:px-0">
      <div className="mx-auto w-full max-w-page">
        <h2
          data-reveal
          className="pt-26 text-h1-sm font-semibold text-ash lg:text-h1"
        >
          Dari Pencatatan Hingga
          <br />
          Keputusan
        </h2>

        <div data-reveal className="pt-34">
          <PillButton to="/fitur-harga" variant="gold">
            Pelajari alur
          </PillButton>
        </div>

        <ul
          data-reveal-children
          className="grid gap-20 pt-[30px] sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card) => (
            <li
              key={card.no}
              className="relative flex aspect-[300/288] items-end overflow-hidden rounded-card"
            >
              <img
                src={card.image}
                loading="lazy"
                decoding="async"
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-b from-brand-deep/15 to-brand-deep/90"
              />
              <div className="relative p-32">
                <span className="block text-stat font-bold text-gold">
                  {card.no}
                </span>
                <h3 className="text-card-title font-bold text-white">
                  {card.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FromRecords
