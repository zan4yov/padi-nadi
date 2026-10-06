import PillButton from '../../components/PillButton'
import surveyIcon from '../../assets/icons/survey.svg'
import lahanPadi from '../../assets/home/padi-panen.jpg'

const findings = [
  { label: 'Tertarik mengadopsi', value: 'Seluruh responden' },
  { label: 'Bersedia pakai setiap hari', value: 'Ya' },
  { label: 'Bersedia berlangganan', value: 'Ya' },
  { label: 'Tantangan adopsi', value: 'Adaptasi digital pegawai' },
]

// Figma node 79:6622 — 1248x577.59 card split into copy + a 623px image.
function MarketFit() {
  return (
    <section className="px-20 py-80 lg:py-130 xl:px-0">
      <div className="mx-auto w-full max-w-page">
        <div
          data-reveal
          className="flex flex-col gap-20 pt-26 lg:flex-row lg:items-end lg:justify-between"
        >
          <h2 className="text-h1-sm font-semibold text-ink lg:text-h1">
            Hasil Validasi Product
            <br />
            Market Fit
          </h2>
          <p className="text-lead-sm text-muted lg:max-w-[540px]">
            Temuan dari survei langsung ke UMKM penggilingan padi.
          </p>
        </div>

        <div
          data-reveal
          className="mt-48 grid overflow-hidden rounded-card border border-line bg-white lg:grid-cols-[624fr_623fr]"
        >
          <div className="p-52">
            <div className="flex items-center gap-20">
              <span className="grid size-62 shrink-0 place-items-center rounded-full bg-mint">
                <img src={surveyIcon} alt="" />
              </span>
              <div>
                <b className="block text-prose font-bold text-ink">
                  Survei UMKM Penggilingan Padi
                </b>
                <span className="text-tiny text-muted">
                  Hasil Product Market Fit
                </span>
              </div>
            </div>

            <blockquote className="pt-40 text-quote font-medium text-ink">
              &ldquo;Seluruh responden UMKM menyatakan ketertarikan untuk
              mengadopsi Padi Nadi karena potensi kemudahan dalam manajemen
              operasional.&rdquo;
            </blockquote>

            <dl className="pt-40">
              {findings.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-20 border-b-2 border-line py-18 first:border-t-2"
                >
                  <dt className="text-nav text-muted">{row.label}</dt>
                  <dd className="text-row-value font-bold text-brand">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="pt-36">
              <PillButton to="/tentang-kontak" variant="outline">
                Kenali mitra kami
              </PillButton>
            </div>
          </div>

          <img
            src={lahanPadi}
            alt="Lahan padi mitra Padi Nadi"
            className="aspect-[623/575.59] size-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default MarketFit
