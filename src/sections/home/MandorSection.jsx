import PillButton from '../../components/PillButton'
import checkIcon from '../../assets/icons/check.svg'
import mandorImage from '../../assets/home/mandor-1.jpg'
import millImage from '../../assets/home/mandor-2.jpg'

const points = [
  'Antarmuka sederhana, cepat dipelajari',
  'Laporan keuangan (Laba/Rugi) otomatis',
  'Analis AI untuk rekomendasi bisnis',
]

// Figma node 79:6333
function MandorSection() {
  return (
    <section className="bg-cream px-20 py-80 lg:py-130 xl:px-0">
      <div className="mx-auto grid w-full max-w-page items-center gap-80 lg:grid-cols-2">
        <div data-reveal className="flex flex-col items-start">
          <h2 className="pt-16 text-h2-sm font-semibold text-muted lg:text-h2">
            Dirancang untuk Mandor, Bukan untuk Operator Komputer.
          </h2>
          <p className="pt-24 text-body text-muted">
            Kami mengubah pencatatan manual menjadi alur digital
            terintegrasi—dirancang khusus untuk cara kerja penggilingan padi
            Indonesia, bukan sistem generik yang rumit.
          </p>
          <ul className="grid w-full gap-14 pt-35 pb-40">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-16 rounded-full border border-line bg-white px-22 py-18"
              >
                <span className="grid size-check shrink-0 place-items-center rounded-full bg-brand">
                  <img src={checkIcon} alt="" width="17" height="17" />
                </span>
                <span className="text-item font-medium text-ink">{point}</span>
              </li>
            ))}
          </ul>
          <PillButton to="/tentang-kontak" variant="outline">
            Kenali kami
          </PillButton>
        </div>

        <div
          data-reveal
          className="mx-auto grid w-full max-w-media grid-cols-2 items-start gap-20"
        >
          <img
            src={mandorImage}
            loading="lazy"
            decoding="async"
            alt="Pemilik penggilingan memantau data"
            className="aspect-[288/416] w-full rounded-card object-cover"
          />
          <div className="pt-50">
            <img
              src={millImage}
              loading="lazy"
              decoding="async"
              alt="Lingkungan penggilingan padi"
              className="aspect-[288/416] w-full rounded-card object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MandorSection
