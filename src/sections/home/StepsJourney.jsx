import PillButton from '../../components/PillButton'
import aktivitas from '../../assets/home/aktivitas-penggilingan.jpg'

const steps = [
  {
    no: '01',
    title: 'Uji Coba 1 Bulan',
    body: 'Akses hingga Paket Combo secara gratis selama 30 hari pertama.',
  },
  {
    no: '02',
    title: 'Onboarding Langsung',
    body: 'Tim kami mendampingi Anda dan pegawai agar cepat terbiasa.',
  },
  {
    no: '03',
    title: 'Catat Setiap Hari',
    body: 'Pencatatan harian lebih cepat, stok gabah selalu sinkron.',
  },
  {
    no: '04',
    title: 'Analisis & Keputusan',
    body: 'Analis AI membantu keputusan berbasis data, bukan perkiraan.',
  },
]

function StepCard({ step }) {
  return (
    <li className="flex gap-20 rounded-card border border-line bg-white p-32">
      <span className="grid size-56 shrink-0 place-items-center rounded-full bg-brand text-prose font-semibold text-white">
        {step.no}
      </span>
      <div>
        <h3 className="text-step font-semibold text-muted">{step.title}</h3>
        <p className="text-step-body text-muted">{step.body}</p>
      </div>
    </li>
  )
}

// Figma node 79:6369 — 381.93 / 420.13 / 381.94 columns with 32px gaps.
function StepsJourney() {
  return (
    <section className="px-20 py-80 lg:py-130 xl:px-0">
      <div className="mx-auto w-full max-w-page">
        <h2
          data-reveal
          className="pt-26 text-center text-h1-sm font-semibold text-muted lg:text-h1"
        >
          Perjalanan Digitalisasi
          <br />
          dalam 4 Langkah
        </h2>

        <div
          data-reveal-children
          className="grid gap-40 pt-60 lg:grid-cols-[381.93fr_420.13fr_381.94fr] lg:items-center"
        >
          <ul className="flex flex-col gap-30">
            {steps.slice(0, 2).map((step) => (
              <StepCard key={step.no} step={step} />
            ))}
          </ul>
          <img
            src={aktivitas}
            loading="lazy"
            decoding="async"
            alt="Aktivitas penggilingan padi"
            className="aspect-[420.13/384] w-full rounded-card object-cover"
          />
          <ul className="flex flex-col gap-30">
            {steps.slice(2).map((step) => (
              <StepCard key={step.no} step={step} />
            ))}
          </ul>
        </div>

        <div data-reveal className="flex justify-center pt-60">
          <PillButton to="/fitur-harga">Mulai Uji Coba Gratis</PillButton>
        </div>
      </div>
    </section>
  )
}

export default StepsJourney
