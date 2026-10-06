import PageHero from '../components/PageHero'
import FaqList from '../components/FaqList'
import FeatureRows from '../sections/fitur/FeatureRows'
import ValueStrip from '../sections/fitur/ValueStrip'
import Pricing from '../sections/fitur/Pricing'
import CtaBand from '../sections/home/CtaBand'
import heroImage from '../assets/home/mandor-1.jpg'

const faqs = [
  {
    q: 'Apakah ada uji coba gratis?',
    a: 'Ada. Uji Coba 1 bulan gratis dengan akses hingga Paket Combo selama 30 hari pertama.',
  },
  {
    q: 'Apa bedanya paket Lite dan Basic?',
    a: 'Lite mencakup pencatatan dasar dengan kuota transaksi harian, sedangkan Basic membuka seluruh modul utama ERP tanpa batasan kuota tersebut.',
  },
  {
    q: 'Apakah data saya aman?',
    a: 'Aman. Setiap akun terpisah dan hanya dapat diakses oleh pengguna yang Anda beri izin.',
  },
  {
    q: 'Bagaimana cara berlangganan?',
    a: 'Kirim pesan WhatsApp dan sebutkan paket pilihan Anda. Tim kami membantu proses aktivasinya.',
  },
]

// Figma node 76:3611 (02 — Fitur Harga).
function FiturHarga() {
  return (
    <>
      <PageHero
        image={heroImage}
        lead="Fitur Lengkap,"
        highlight="Harga Terjangkau"
        body="Digitalisasi tidak harus mahal atau rumit. Pilih modul dan paket yang sesuai dengan tahap pertumbuhan bisnis Anda."
        cta="Lihat Harga"
        to="/fitur-harga"
      />
      <FeatureRows />
      <ValueStrip />
      <Pricing />

      <section className="px-20 py-80 lg:py-130 xl:px-0">
        <div className="mx-auto w-full max-w-page">
          <h2
            data-reveal
            className="pt-26 text-center text-h1-sm font-semibold text-muted lg:text-h1"
          >
            Yang Sering Ditanyakan
          </h2>
          <FaqList items={faqs} className="mx-auto max-w-[864px] pt-48" />
        </div>
      </section>

      <CtaBand />
    </>
  )
}

export default FiturHarga
