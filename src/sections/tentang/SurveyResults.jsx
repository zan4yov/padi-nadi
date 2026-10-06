import iconInterest from '../../assets/icons/survey-interest.svg'
import iconCommit from '../../assets/icons/survey-commit.svg'
import iconMoney from '../../assets/icons/survey-money.svg'
import iconChallenge from '../../assets/icons/survey-challenge.svg'

const results = [
  {
    quote:
      'Seluruh responden UMKM menyatakan ketertarikan untuk mengadopsi Padi Nadi karena potensi kemudahan dalam manajemen operasional.',
    label: 'Tingkat ketertarikan tinggi',
    icon: iconInterest,
  },
  {
    quote:
      'Target pasar bersedia menggunakan sistem setiap hari, dengan harapan pencatatan lebih cepat dan info keuntungan tersaji secara instan.',
    label: 'Komitmen penggunaan rutin',
    icon: iconCommit,
  },
  {
    quote:
      'Responden bersedia membayar biaya langganan setelah mencoba dan menyesuaikan dengan operasional harian mereka.',
    label: 'Validasi monetisasi',
    icon: iconMoney,
  },
  {
    quote:
      'Satu kekhawatiran utama pengguna: keterbatasan kemampuan adaptasi digital pegawai lapangan, sehingga kami sediakan pendampingan onboarding.',
    label: 'Tantangan adopsi',
    icon: iconChallenge,
  },
]

// Figma node 76:4540 — 2x2 grid of 614.4x389.39 cards on #FAF8F3.
function SurveyResults() {
  return (
    <section className="bg-cream px-20 py-80 lg:py-130 xl:px-0">
      <div className="mx-auto w-full max-w-page">
        <h2
          data-reveal
          className="pt-26 text-center text-h1-sm font-semibold text-muted lg:text-h1"
        >
          Hasil Survei Product Market Fit
        </h2>
        <p data-reveal className="pt-14 text-center text-lead text-muted">
          Mitra pilot: DD, Gunung Emas, CS Putra, 3 Putra, dan 3 Permata.
        </p>

        <ul data-reveal-children className="grid gap-24 pt-60 lg:grid-cols-2">
          {results.map((result) => (
            <li
              key={result.label}
              className="flex flex-col rounded-card border border-line bg-white p-61"
            >
              <span
                aria-hidden
                className="block text-[64px] leading-none text-gold"
              >
                &ldquo;
              </span>
              <blockquote className="flex-1 pt-10 text-quote-lg font-medium text-ink">
                {result.quote}
              </blockquote>
              <div className="mt-33 flex items-center gap-20 border-t-2 border-line pt-33">
                <span className="grid size-62 shrink-0 place-items-center rounded-full bg-mint">
                  <img src={result.icon} alt="" />
                </span>
                <div>
                  <b className="block text-prose font-bold text-ink">
                    {result.label}
                  </b>
                  <span className="text-eyebrow text-muted">
                    Hasil Product Market Fit
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default SurveyResults
