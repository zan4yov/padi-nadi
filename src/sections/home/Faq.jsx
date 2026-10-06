import FaqList from '../../components/FaqList'
import butirPadi from '../../assets/home/butir-padi.jpg'

const items = [
  {
    q: 'Apakah Padi Nadi cocok untuk penggilingan kecil?',
    a: 'Cocok. Padi Nadi dirancang untuk UMKM penggilingan padi, baik swasta (keluarga/pribadi) maupun negeri (koperasi/BUMDes).',
  },
  {
    q: 'Apakah bisa dipantau dari mana saja?',
    a: 'Bisa. Data tersimpan terpusat sehingga dasbor dan laporan dapat dibuka dari perangkat mana pun.',
  },
  {
    q: 'Apakah data saya aman?',
    a: 'Aman. Setiap akun terpisah dan hanya dapat diakses oleh pengguna yang Anda beri izin.',
  },
  {
    q: 'Apakah ada pendampingan onboarding?',
    a: 'Ada. Tim kami mendampingi Anda dan pegawai sampai terbiasa memakai Padi Nadi.',
  },
]

// Figma node 79:6677 — copy + image on the left, 710.41px accordion on the right.
function Faq() {
  return (
    <section className="bg-cream px-20 py-80 lg:py-130 xl:px-0">
      <div className="mx-auto grid w-full max-w-page gap-48 lg:grid-cols-[537.59fr_710.41fr]">
        <div data-reveal className="pt-26">
          <h2 className="text-h3-sm font-semibold text-muted lg:text-h3">
            Hal yang Sering
            <br />
            Ditanyakan
          </h2>
          <p className="pt-[14.8px] text-prose text-muted">
            Tanya apa saja soal fitur, harga, atau cara berlangganan lewat
            WhatsApp.
          </p>
          <img
            src={butirPadi}
            alt="Butir padi"
            className="mt-45 aspect-[473.59/256] w-full rounded-card object-cover"
          />
        </div>

        <FaqList items={items} className="lg:pt-26" />
      </div>
    </section>
  )
}

export default Faq
