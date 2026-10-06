import PillButton from '../../components/PillButton'
import checkCircle from '../../assets/icons/check-circle.svg'

const plans = [
  {
    name: 'Uji Coba',
    price: 'Gratis',
    period: '1 bulan',
    features: [
      'Akses hingga Paket Combo',
      '30 hari pertama',
      'Pendampingan onboarding',
    ],
    cta: 'Mulai Uji Coba',
  },
  {
    name: 'Lite',
    price: 'Gratis',
    period: 'kuota terbatas',
    features: [
      'Pencatatan dasar ERP',
      'Batasan kuota transaksi harian',
      'Tanpa biaya langganan',
    ],
    cta: 'Pilih Lite',
  },
  {
    name: 'Basic',
    price: 'Rp39.000',
    period: '/bulan',
    features: [
      'Seluruh modul utama ERP',
      'Pencatatan operasional',
      'Manajemen stok gabah',
    ],
    cta: 'Pilih Basic',
  },
  {
    name: 'Combo',
    price: 'Rp89.000',
    period: '/bulan',
    features: [
      'Integrasi ERP penuh',
      'Laporan keuangan (Laba/Rugi) otomatis',
      'Transparansi bisnis',
    ],
    cta: 'Pilih Combo',
    featured: true,
  },
  {
    name: 'Plus',
    price: 'Rp149.000',
    period: '/bulan',
    features: [
      'Kelengkapan ERP & keuangan',
      'Analis AI',
      'Rekomendasi efisiensi harian',
    ],
    cta: 'Pilih Plus',
  },
  {
    name: 'Pro',
    price: 'Rp229.000',
    period: '/bulan',
    features: [
      'Kelengkapan ERP & keuangan',
      'Analis AI',
      'Komunitas eksklusif',
    ],
    cta: 'Pilih Pro',
  },
]

// Figma node 76:3909 — 407.66x421.14 cards, the Combo plan inverted to #1A1A1A.
function Pricing() {
  return (
    <section
      id="harga"
      className="scroll-mt-100 bg-cream px-20 py-80 lg:py-130 xl:px-0"
    >
      <div className="mx-auto w-full max-w-page">
        <h2
          data-reveal
          className="pt-26 text-center text-h1-sm font-semibold text-muted lg:text-h1"
        >
          Harga Sederhana, Manfaat Maksimal
        </h2>
        <p data-reveal className="pt-14 text-center text-lead text-muted">
          Mulai dengan uji coba gratis 1 bulan, lalu pilih paket sesuai tahap
          bisnis Anda.
        </p>

        <ul
          data-reveal-children
          className="grid gap-20 pt-60 sm:grid-cols-2 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <li
              key={plan.name}
              className={`relative flex flex-col rounded-card p-37 ${
                plan.featured ? 'bg-ink' : 'border border-line bg-white'
              }`}
            >
              {plan.featured && (
                <span className="absolute top-32 right-32 rounded-full border border-gold px-12 py-4 text-badge-xs font-semibold text-gold uppercase">
                  Rekomendasi
                </span>
              )}
              <h3
                className={`text-plan font-semibold ${plan.featured ? 'text-ash' : 'text-ink'}`}
              >
                {plan.name}
              </h3>
              <p className="pt-40">
                <b
                  className={`block text-price font-semibold ${
                    plan.featured ? 'text-ash' : 'text-ink'
                  }`}
                >
                  {plan.price}
                </b>
                <span
                  className={`text-period font-medium ${plan.featured ? 'text-dim' : 'text-muted'}`}
                >
                  {plan.period}
                </span>
              </p>
              <ul
                className={`mt-26 flex-1 border-t pt-30 ${
                  plan.featured ? 'border-line-dark' : 'border-line'
                }`}
              >
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-12 pt-18 text-step-body first:pt-0 ${
                      plan.featured ? 'text-dim-soft' : 'text-ink-soft'
                    }`}
                  >
                    <img src={checkCircle} alt="" className="shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-36">
                <PillButton
                  to="/tentang-kontak"
                  variant={plan.featured ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {plan.cta}
                </PillButton>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Pricing
